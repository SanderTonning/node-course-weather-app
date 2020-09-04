const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=ee4e640857faaf1862db60920ecc3508&query=' + latitude + ','+ longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `Observed at ${body.current.observation_time}! ${body.current.weather_descriptions}! It's currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}% and windspeed ${body.current.wind_speed} kmph.`)
        }
    })
}

module.exports = forecast