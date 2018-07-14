import PropTypes from 'prop-types';
import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

// const moment = require('moment');

class WeatherCardCollection extends Component {
    render() {
        const responseData = this.props.data;

        if (responseData !== undefined) {
            return (
                <ul>
                    { responseData.map((item) => {
                        // Conver temp
                        const temp = Math.round(item.main.temp - 273.15);

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
};

WeatherCardCollection.defaultProps = {
    data: [],
};

export default WeatherCardCollection;
