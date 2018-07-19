const cityInformationController = require('../controllers/cityInformationController');

module.exports = (app) => {
    app.get('/getCityInformation/:city', cityInformationController.weather);
};
