export function convertKelvinToCelsius(kelvinValue) {
    return Math.round(kelvinValue - 273.15);
}

export function convertKelvinToFahrenheit(kelvinValue) {
    return Math.round((kelvinValue * 9 / 5) - 459.67);
}
