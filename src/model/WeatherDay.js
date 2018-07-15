function WeatherDay(date, low, high, weather) {
    this.date = date;
    this.low = low;
    this.high = high;
    this.weather = weather;

    this.getDate = function () {
        return this.date;
    };

    this.getLow = function () {
        return this.low;
    };

    this.getHigh = function () {
        return this.high;
    };

    this.getWeather = function () {
        return this.weather;
    };
}

export default WeatherDay;
