const expect = require('chai').expect;
const nock = require('nock');
const TimeService = require('../../app/services/TimeService');

describe('Time Service', () => {
    beforeEach(() => {
        nock('https://maps.googleapis.com').
            get(/geocode/).
            reply(200, {results: [{geometry: {location: {lat: 1, lng: 1}}}]});

        nock('https://maps.googleapis.com').
            get(/timezone/).
            reply(200, {dstOffset: 1, rawOffset: 1});
    });

    it('get current time for a city', () =>
        TimeService.getLocalTime('Berlin').
            then((resp) => {
                const localDate = new Date();

                localDate.setTime(localDate.getTime() + localDate.getTimezoneOffset() * 60 * 1000);

                expect(resp).
                    to.
                    equal(localDate.getHours() + ':' + localDate.getMinutes());
            }));
});
