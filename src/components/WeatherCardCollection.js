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
                    {data.map((item) => {
                        let temp = 0;
                        if (unit === 'celsius') {
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
