const axios = require('axios');
const config = require('config');

const url = 'https://maps.googleapis.com/maps/api/';
const apiKey = config.googleApiKey;

const getTimeByLocation = async (location) => {
    const loc = location.lat + ', ' + location.lng;
    const date = new Date();
    const timestamp = date.getTime() / 1000 + date.getTimezoneOffset() * 60;
    const apiCall = `${url}timezone/json?location=${loc}&timestamp=${timestamp}&key=${apiKey}`;

    return await axios(apiCall).
        catch((error) => {
            console.log(error);
        }).
        then((res) => res.data).
        then((data) => {
            const offsets = data.dstOffset * 1000 + data.rawOffset * 1000;
            const localDate = new Date(timestamp * 1000 + offsets);

            return localDate.getHours() + ':' + localDate.getMinutes();
        });
};

exports.getLocalTime = async (city) => {
    const apiCall = `${url}geocode/json?address=${city}&key=${apiKey}`;

    return axios(apiCall).
        catch((error) => {
            console.log(error);
        }).
        then((res) => res.data.results).
        then((data) => {
            if (!data.length) {
                return {error: 'City not found'};
            }
            return data.pop().geometry.location;
        }).
        then(getTimeByLocation);
};
