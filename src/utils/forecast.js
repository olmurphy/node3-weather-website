const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ed8e2d06e69412de6940dbeeb7b7586&query=' + longitude + ',' + latitude;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const current = body.current;
            callback(undefined, current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees celcius out. It feels like " + current.feelslike + ' degrees with a precipitation of ' + current.precip + '.' +
            ' With wind speeds of ' + current.wind_speed + ' mph. The uv index is at ' + current.uv_index + '.')
        }
    })
}

module.exports = forecast;