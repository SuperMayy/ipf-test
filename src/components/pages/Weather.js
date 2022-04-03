import React, {useState ,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchWeather } from '../../logic/weather-api';
import WeatherCard from '../molecules/WeatherCard'

const Weather = ({CROSS_DOMAIN}) => {
  const [weather, setWeather] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();
  const BASE_WEATHER_URL = `${CROSS_DOMAIN}/https://www.metaweather.com/api/location/${id}/`
   
  const getWeather = async() => {
    fetchWeather(BASE_WEATHER_URL, setWeather, setIsPending, setError)
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div>
        {
       isPending ? 
       <div className='error-message'>{error ? <div>{error}</div> 
       : <div className='initial-message'>Please wait...</div>}</div> 
       :<WeatherCard key={weather.woeid} weather={weather}/>
     } 
    </div>
  )
}

export default Weather