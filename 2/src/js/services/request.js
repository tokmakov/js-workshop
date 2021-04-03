// отправляет данные data методом POST на указанный url
const sendPostData = async (url, data) => {
    let response = await fetch(url, {
        method: 'POST',
        body: data
    });
    return await response.text();
};

// запрашивает json-данные по указанному url методом GET
const getResource = async (url) => {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Не удалось получить ответ от ${url}, статус ${response.status}`);
    }
    return await response.json();
};

export {sendPostData, getResource};