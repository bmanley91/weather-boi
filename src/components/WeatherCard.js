import PropTypes from 'prop-types';
import React, { Component } from 'react';

class WeatherCard extends Component {
    render() {
        return (
            <p>
                Datetime: { this.props.date }, Weather: {this.props.weather}, Temp: {this.props.temperature}
            </p>
        );
    }
}

WeatherCard.propTypes = {
    date: PropTypes.string,
    weather: PropTypes.string,
    temperature: PropTypes.number,
};

WeatherCard.defaultProps = {
    date: '',
    weather: 'Clear',
    temperature: 0,
};

export default WeatherCard;
