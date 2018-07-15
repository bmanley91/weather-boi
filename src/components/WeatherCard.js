import styled from 'react-emotion';
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
        const { date, weather, temperature } = this.props;

        return (
            <Container>
                <p>
                    Datetime:
                    { date }
                </p>
                <p>
                    Weather:
                    { weather }
                </p>
                <p>
                    Temp:
                    { temperature }
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
