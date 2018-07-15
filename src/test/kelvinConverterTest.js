/* eslint-env mocha */
/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const { convertKelvinToCelsius, convertKelvinToFahrenheit } = require('../util/kelvin-converter');

const { assert } = chai;

describe('Convert Kelvin to different scales.', () => {
    const kelvinInput = 1000;

    it('Should corectly convert Kelvin to Celsius', () => {
        const expectedCelsius = 727;
        const testOutput = convertKelvinToCelsius(kelvinInput);

        assert.equal(testOutput, expectedCelsius);
    });

    it('Should corectly convert Kelvin to Fahrenheit', () => {
        const expectedFahrenheit = 1340;
        const testOutput = convertKelvinToFahrenheit(kelvinInput);

        assert.equal(testOutput, expectedFahrenheit);
    });
});
