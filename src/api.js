import config from './config.js'

async function fetchUserData() {
    const apiUrl = window.location.href + 'userdata.json';
    return await fetch(apiUrl).then(response => {
        return response.json();
    });
}


// Отправка заказа в битрикс24
async function fetchOrderToBitrix24(data) {
    // Create request to bx
    if (config.webhooks.bitrix24) {
        let response = await fetch(config.webhooks.bitrix24, {
            method: 'POST',
            // mode: "no-cors",  
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })

        return await response.json();
    }

    return false;
    
}

export { 
    fetchUserData, 
    fetchOrderToBitrix24 
}