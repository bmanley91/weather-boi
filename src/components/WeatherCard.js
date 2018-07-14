import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const Container = styled('div')`
    border: solid;
    border-radius: 5px;
    border-width: 1px;
    float: left;
    margin-bottom: 10px;
    margin-right: 10px;
    padding-left 10px;
    width: 200px;
`;

class WeatherCard extends Component {
    render() {
        return (
            <Container>
                <p>
                    Datetime: { this.props.date }
                </p>
                <p>
                    Weather: {this.props.weather}
                </p>
                <p>
                    Temp: {this.props.temperature}
                </p>
            </Container>
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
