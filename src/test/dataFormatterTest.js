/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */
import formatData from '../util/data-formatter';
import WeatherDay from '../model/WeatherDay';

const chai = require('chai');

const { assert } = chai;

const data = require('./resources/testData.json');


describe('The formatter can correctly parse OWA data', () => {
    it('Should parse the data correctly', () => {
        const inputData = data;
        const expectedOutput = [
            new WeatherDay('2018-07-15', 300.941, 304.38, 'Clear'),
            new WeatherDay('2018-07-16', 291.589, 300.7, 'Clear'),
        ];

        const testOutput = formatData(inputData);

        assert.equal(testOutput.length, expectedOutput.length);
        assert.equal(testOutput[0].getDate(), expectedOutput[0].getDate());
        assert.equal(testOutput[1].getDate(), expectedOutput[1].getDate());
        assert.equal(testOutput[0].getLow(), expectedOutput[0].getLow());
        assert.equal(testOutput[1].getLow(), expectedOutput[1].getLow());
        assert.equal(testOutput[0].getHigh(), expectedOutput[0].getHigh());
        assert.equal(testOutput[1].getHigh(), expectedOutput[1].getHigh());
        assert.equal(testOutput[0].getWeather(), expectedOutput[0].getWeather());
        assert.equal(testOutput[1].getWeather(), expectedOutput[1].getWeather());
    });
});
