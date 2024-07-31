import React from 'react'


const Weather = () => {
    return (
        <WeatherWidget
        provider='openWeather'
        apiKey='5126df27a59cc1cabcd7f07263b29fb3'
        autoLocate="gps"
        tempUnit="F"
        windSpeedUnit="mps"
        lang="pl"
        />
    )}

export default Weather