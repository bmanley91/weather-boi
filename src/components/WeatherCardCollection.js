import styled from 'react-emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
import { convertKelvinToCelsius, convertKelvinToFahrenheit } from '../util/kelvin-converter';
import spinner from '../resources/fidget-spinner.gif';

const ListContainer = styled('ul')`
    list-style-type: none;
`;

class WeatherCardCollection extends Component {
    render() {
        const { data, unit } = this.props;
        if (data !== undefined) {
            return (
                <ListContainer>
                    {data.map((weatherDay) => {
                        let { low, high } = 0;
                        if (unit === 'celsius') {
                            low = convertKelvinToCelsius(weatherDay.low);
                            high = convertKelvinToCelsius(weatherDay.high);
                        } else {
                            low = convertKelvinToFahrenheit(weatherDay.low);
                            high = convertKelvinToFahrenheit(weatherDay.high);
                        }

                        return (
                            <li key={weatherDay.getDate()}>
                                <WeatherCard
                                    date={weatherDay.getDate()}
                                    weather={weatherDay.getWeather()}
                                    high={high}
                                    low={low}
                                />
                            </li>
                        );
                    })}
                </ListContainer>
            );
        }

        return (
            <img src={spinner} alt="spinner" />
        );
    }
}

WeatherCardCollection.propTypes = {
    data: PropTypes.array,
    unit: PropTypes.string,
};

WeatherCardCollection.defaultProps = {
    data: [],
    unit: 'fahrenheit',
};

export default WeatherCardCollection;
