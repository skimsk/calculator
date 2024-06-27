const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Загружаем учетные данные
const credentials = require('./credentials.json'); // Путь к вашему файлу credentials.json

// ID вашей таблицы Google Sheets
const spreadsheetId = '1qSKQnpdvuE2QPBWMTU9kdLNXhZbw_Fn2DQNcwPUfL1Q';

// Диапазон данных, включая колонку Profile
const range = 'Sheet1!A1:E';

// Путь до файла price.js
const priceFilePath = path.join(__dirname, 'src', 'data', 'price.js');

// Аутентификация и получение клиента Google Sheets API
async function authorize() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const authClient = await auth.getClient();
  return authClient;
}

// Функция получения данных из Google Таблицы и записи в файл price.js.
async function getSheetData(auth) {
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (rows.length) {
      let result = {
        employee: {}
      };

      // Проходимся по строкам данных, начиная со второй строки (первая строка - заголовки)
      for (let i = 1; i < rows.length; i++) {
        let profile = rows[i][0];
        let category = rows[i][1];
        let item = {
          key: rows[i][2].toLowerCase(), // Приводим ключ к нижнему регистру, как требуется
          price: parseInt(rows[i][3], 10)
        };
        if (rows[i][4]) item.min = parseInt(rows[i][4], 10);

        // Если такого профиля еще нет в результате, создаем его в employee
        if (!result.employee[profile]) {
          result.employee[profile] = {
            canvas: [],
            frame_color: [],
            corners: [],
            handles: [],
            montage: []
          };
        }

        // Добавляем данные в соответствующую категорию профиля
        switch (category) {
          case 'canvas':
            result.employee[profile].canvas.push(item);
            break;
          case 'frame_color':
            result.employee[profile].frame_color.push(item);
            break;
          case 'corners':
            result.employee[profile].corners.push(item);
            break;
          case 'handles':
            result.employee[profile].handles.push(item);
            break;
          case 'montage':
            result.employee[profile].montage.push({ key: item.key, price: item.price }); // Простой формат монтажа
            break;
        }
      }

      // Формируем вывод в нужном формате с комментариями
      let output = 'export default {\n';
      output += '  // Монтажник\n';
      output += '  employee: {\n';
      for (let profile in result.employee) {
        output += `    ${profile}: {\n`;
        output += `      canvas: [\n`;
        result.employee[profile].canvas.forEach((item, index) => {
          output += `        { key: '${item.key}', price: ${item.price}, min: ${item.min || 1} }`;
          output += index === result.employee[profile].canvas.length - 1 ? '\n' : ',\n';
        });
        output += `      ],\n`;
        output += `      // Цвет рамки\n`;
        output += `      frame_color: [\n`;
        result.employee[profile].frame_color.forEach((item, index) => {
          output += `        { key: '${item.key}', price: ${item.price} }`;
          output += index === result.employee[profile].frame_color.length - 1 ? '\n' : ',\n';
        });
        output += `      ],\n`;
        output += `      // Углы\n`;
        output += `      corners: [\n`;
        result.employee[profile].corners.forEach((item, index) => {
          output += `        { key: '${item.key}', price: ${item.price} }`;
          output += index === result.employee[profile].corners.length - 1 ? '\n' : ',\n';
        });
        output += `      ],\n`;
        output += `      // Ручки\n`;
        output += `      handles: [\n`;
        result.employee[profile].handles.forEach((item, index) => {
          output += `        { key: '${item.key}', price: ${item.price} }`;
          output += index === result.employee[profile].handles.length - 1 ? '\n' : ',\n';
        });
        output += `      ],\n`;
        output += `      // Монтаж\n`;
        output += `      montage: [\n`;
        result.employee[profile].montage.forEach((item, index) => {
          output += `        { key: '${item.key}', price: ${item.price} }`;
          output += index === result.employee[profile].montage.length - 1 ? '\n' : ',\n';
        });
        output += `      ]\n`;
        output += `    },\n`;
      }
      output += '  },\n';
      output += '};\n';

      // Записываем результат в файл price.js
      fs.writeFileSync(priceFilePath, output);
      console.log(`Данные успешно записаны в файл ${priceFilePath}`);
    } else {
      console.log('Нет данных для записи.');
    }
  } catch (err) {
    console.error('Ошибка при получении данных из Google Таблицы:', err);
  }
}

// Функция мониторинга изменений в Google Таблице
async function watchSheetChanges(auth) {
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const { spreadsheetUrl, properties } = response.data;
    console.log(`Мониторинг изменений в таблице: ${spreadsheetUrl}`);
    console.log('Свойства таблицы:', properties);

    let lastData = null;

    // Функция для мониторинга изменений
    const monitorChanges = async () => {
      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });

        const rows = response.data.values;
        if (JSON.stringify(rows) !== JSON.stringify(lastData)) {
          console.log(`Таблица была обновлена.`);
          // Выполняем обновление данных и перезапись price.js
          await getSheetData(auth);
          lastData = rows;
        } else {
          console.log('Изменений нет.');
        }
      } catch (err) {
        console.error('Ошибка при мониторинге изменений:', err);
      }
    };

    // Начальное получение данных и запись в файл
    await getSheetData(auth);
    await monitorChanges(); // Вызовем функцию мониторинга сразу после начального получения данных

    // Проверяем изменения каждые 5 минут
    setInterval(monitorChanges, 5 * 60 * 1000); // 5 минут
  } catch (err) {
    console.error('Ошибка при запуске мониторинга:', err);
  }
}

// Авторизуемся и запускаем мониторинг изменений
authorize()
  .then((authClient) => {
    // Запускаем мониторинг изменений
    watchSheetChanges(authClient);
  })
  .catch((err) => {
    console.error('Ошибка при авторизации:', err);
  });