const expect = require('chai').expect;
const nock = require('nock');
const WeatherService = require('../../app/services/WeatherService');

describe('Weather Service', () => {
    beforeEach(() => {
        nock('http://api.openweathermap.org').
            get(/data/).
            reply(200, {main: {temp: 10}});
    });

    it('get current temperature for a city', () =>
        WeatherService.getLocalTemperature('Berlin').
            then((resp) => {
                expect(resp).
                    to.
                    equal(10);
            }));
});
