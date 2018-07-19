const TimeService = require('../services/TimeService');
const WeatherService = require('../services/WeatherService');

exports.weather = async (req, res) => {
    const city = req.params.city;

    const [temperature, localTime] = await Promise.all([
        WeatherService.getLocalTemperature(city),
        TimeService.getLocalTime(city)
    ]);

    const data = {
        weather: {temperature},
        time: {localTime}
    };

    res.send(data);
};
