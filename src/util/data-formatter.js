import moment from 'moment';

import ReportAggregate from '../model/ReportAggregate';
import WeatherDay from '../model/WeatherDay';
import WeatherReport from '../model/WeatherReport';

function formatDate(inputDate) {
    return moment(inputDate).format('YYYY-MM-DD');
}

function generateWeatherDayFromAggregate(aggregate) {
    const reports = aggregate.getReports();

    let highestSoFar = Number.MIN_SAFE_INTEGER;
    let lowestSoFar = Number.MAX_SAFE_INTEGER;
    let weatherSoFar = '';

    for (let i = 0; i < reports.length; i++) {
        if (reports[i].getHigh() > highestSoFar) {
            highestSoFar = reports[i].getHigh();
        }

        if (reports[i].getLow() < lowestSoFar) {
            lowestSoFar = reports[i].getLow();
        }

        // TODO: put real logic here?
        weatherSoFar = reports[i].getWeather();
    }

    return new WeatherDay(aggregate.date, lowestSoFar, highestSoFar, weatherSoFar);
}

function aggregateReports(reports) {
    const datesSoFar = [];
    const aggregateList = [];

    // Iterate through reports and group by date
    for (let i = 0; i < reports.length; i++) {
        if (!datesSoFar.includes(reports[i].date)) {
            datesSoFar.push(reports[i].date);
            aggregateList.push(new ReportAggregate(reports[i].date, [reports[i]]));
        } else {
            const aggregate = aggregateList[aggregateList.length - 1];
            aggregate.addReport(reports[i]);
            aggregateList[aggregateList.length - 1] = aggregate;
        }
    }

    const days = [];

    for (let i = 0; i < aggregateList.length; i++) {
        days.push(generateWeatherDayFromAggregate(aggregateList[i]));
    }

    return days;
}

function formatData(input) {
    const formattedData = [];

    for (let i = 0; i < input.length; i++) {
        const item = input[i];
        const date = formatDate(item.dt_txt);
        const low = item.main.temp_min;
        const high = item.main.temp_max;
        const weather = item.weather[0].main;

        const weatherDay = new WeatherReport(date, low, high, weather);

        formattedData.push(weatherDay);
    }

    const weatherDays = aggregateReports(formattedData);

    return weatherDays;
}

export default formatData;
