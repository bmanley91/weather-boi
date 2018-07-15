import axios from 'axios';
import React, { Component } from 'react';
import WeatherCardCollection from './WeatherCardCollection';
import config from '../token.json';

import '../styles/App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            zipCode: 12203,
        };
    }

    componentDidMount() {
        const { zipCode } = this.state;
        const targetUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&APPID=${config.key}`;

        axios({
            method: 'get',
            url: targetUrl,
            responseType: 'json',
        }).then((result) => {
            if (result.status === 200) {
                this.setState({ error: false, data: result.data });
            } else {
                this.setState({ error: true });
            }
        });
    }

    render() {
        const { error, data } = this.state;

        if (error) {
            return (
                <p>
                    Error!
                </p>
            );
        }

        return (
            <WeatherCardCollection data={data.list} />
        );
    }
}

export default App;
