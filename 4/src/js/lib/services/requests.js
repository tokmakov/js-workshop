import $ from '../core.js';

$.extensions.get = async function (url, responseType = 'json') {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
    }
    switch(responseType) {
        case 'json':
            return await response.json();
        case 'text':
            return await response.text();
        case 'blob':
            return await response.blob();
        default:
            return response.body;
    }
};

$.extensions.post = async function (url, data, options = {}, responseType = 'json') {
    let settings = {
        method: 'POST',
        body: data
    };
    for (let key in options) {
        settings[key] = options[key];
    }

    let response = await fetch(url, settings);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
    }

    switch(responseType) {
        case 'json':
            return await response.json();
        case 'text':
            return await response.text();
        case 'blob':
            return await response.blob();
        default:
            return response.body;
    }
};
