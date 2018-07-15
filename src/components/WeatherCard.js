import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import clearweather from '../resources/clearweather.png';
import rainweather from '../resources/rainweather.png';
import cloudweather from '../resources/cloudyweather.png';
import snowweather from '../resources/snowweather.png';

const Container = styled('div')`
    border: solid;
    border-radius: 5px;
    border-width: 1px;
    float: left;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-left 10px;
    width: 150px;
`;

function getWeatherImage(input) {
    switch (input) {
    case 'Clear':
        return clearweather;
    case 'Rain':
        return rainweather;
    case 'Clouds':
        return cloudweather;
    case 'Snow':
        return snowweather;
    default:
        return null;
    }
}

class WeatherCard extends Component {
    render() {
        const {
            date, weather, high, low,
        } = this.props;

        return (
            <Container>
                <p>
                    { date }
                </p>
                <img src={getWeatherImage(weather)} alt={weather} />
                <p>
                    Temp:
                    { `${high} / ${low}` }
                </p>
            </Container>
        );
    }
}

WeatherCard.propTypes = {
    date: PropTypes.string,
    weather: PropTypes.string,
    high: PropTypes.number,
    low: PropTypes.number,
};

WeatherCard.defaultProps = {
    date: '',
    weather: 'Clear',
    high: 0,
    low: 0,
};

export default WeatherCard;
