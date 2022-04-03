import React from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const WeatherCard = ({weather}) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/')
  }

  return (
    <div className='weather-card'>
      <div>
        <button className="navigate-back-button" onClick={handleNavigation}>Back</button>
        <h1>{weather.title}</h1>
      </div>
      <div className='weather-item'>
      {weather.consolidated_weather.map((data) => (
      <div className='main-weather-detail' key={data.id}>
        <div className='main-weather-detail-section'>
          <div>{moment(data.applicable_date).format('dddd Do')}</div>
          <img src={`https://www.metaweather.com/static/img/weather/png/64/${data.weather_state_abbr}.png`} alt={data.weather_state_name}/>
        </div>
        <div className='main-weather-detail-section'>
          <h3>{Math.floor(data.max_temp)} &#176;</h3>
          <h3>{Math.floor(data.min_temp)} &#176;</h3>
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default WeatherCard