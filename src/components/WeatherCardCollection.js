import PropTypes from 'prop-types';
import React, { Component } from 'react';
import WeatherCard from './WeatherCard';
import { convertKelvinToCelsius, convertKelvinToFahrenheit } from '../util/kelvin-converter';

class WeatherCardCollection extends Component {
    render() {
        const responseData = this.props.data;

        if (responseData !== undefined) {
            return (
                <ul>
                    { responseData.map((item) => {
                        let temp = 0;
                        if (this.props.unit === 'celsius') {
                            temp = convertKelvinToCelsius(item.main.temp);
                        } else {
                            temp = convertKelvinToFahrenheit(item.main.temp);
                        }

                        return (
                            <li key={item.dt}>
                                <WeatherCard
                                    date={item.dt_txt}
                                    weather={item.weather[0].main}
                                    temperature={temp}
                                />
                            </li>
                        );
                    })}
                </ul>
            );
        }

        return (
            <p>
                Loading
            </p>
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
