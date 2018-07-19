const axios = require('axios');
const config = require('config');

exports.getLocalTemperature = async (city) => {
    const apiKey = config.weatherApiKey;
    const url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    return axios(url).
        catch((error) => {
            console.log(error);
        }).
        then((res) => res.data).
        then((data) => data.main.temp);
};
