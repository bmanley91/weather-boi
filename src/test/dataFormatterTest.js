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
        assert.equal(testOutput[0].date, expectedOutput[0].date);
        assert.equal(testOutput[1].date, expectedOutput[1].date);
        assert.equal(testOutput[0].low, expectedOutput[0].low);
        assert.equal(testOutput[1].low, expectedOutput[1].low);
        assert.equal(testOutput[0].high, expectedOutput[0].high);
        assert.equal(testOutput[1].high, expectedOutput[1].high);
        assert.equal(testOutput[0].weather, expectedOutput[0].weather);
        assert.equal(testOutput[1].weather, expectedOutput[1].weather);
    });
});
