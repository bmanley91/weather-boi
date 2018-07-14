const axios = require('axios');

async function getDataForZip(zip) {
    const targetUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&APPID=e044524876f9f304d86a478113064c4f`;

    const result = await axios({
        method: 'get',
        url: targetUrl,
        responseType: 'json',
    });

    const jsonResults = await result.json;

    return jsonResults;
}

export { getDataForZip };
