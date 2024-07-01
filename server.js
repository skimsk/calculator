const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const expressAdmin = require('@adminjs/express');
const mongooseAdapter = require('@adminjs/mongoose');

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Инициализация Express приложения
const app = express();

// Настройка AdminJS
AdminJS.registerAdapter(mongooseAdapter);

const adminJsOptions = {
  // настройки ресурсов AdminJS
};

const adminJs = new AdminJS(adminJsOptions);

// Middleware для использования AdminJS с Express
app.use(expressAdmin.router(adminJs));

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
