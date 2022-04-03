import React, {useEffect, useState} from 'react'
import Locations from '../molecules/Locations'
import { fetchLocation } from '../../logic/location-api'

const Home = ({CROSS_DOMAIN}) => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [isLoaded, setIsLoaded] = useState({loaded: false})
  const [isPending, setIsPending] = useState(true);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(null);
  const BASE_LOCATION_URL = `${CROSS_DOMAIN}/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`

  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };
  
  const onSuccess = async (location) => {
    setIsLoaded( prevState => ({...prevState, loaded: true}))
    await setLatitude(()=>{
      localStorage.setItem('latitude', `${location.coords.latitude}`)
      return location.coords.latitude
    })
    await setLongitude(()=>{
      localStorage.setItem('longitude',` ${location.coords.longitude}`)
      return location.coords.longitude
    })
    await fetchLocation(BASE_LOCATION_URL, setLocations, setIsPending, setError)
    if(latitude && longitude === ''){
      throw Error('Please turn on your geolocation')
    }
  }
  
  const onError = (error) => {
    setIsLoaded( prevState => ({
      ...prevState, 
      loaded: true, 
      error
    }))
    console.warn(`ERROR(${error.code}): ${error.message}`);
  }

  const getLocation = async () => {
    if(!localStorage.getItem('latitude') && !localStorage.getItem('longitude')){
      await navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else{
      const long = localStorage.getItem('longitude')
      const latt =  localStorage.getItem('latitude')
      const LOCAL_URL = `${CROSS_DOMAIN}/https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`    
      await fetchLocation(LOCAL_URL, setLocations, setIsPending, setError)
    }
  }

  useEffect(() => {
    if(!("geolocation" in navigator)){
      onError({
        code: 0,
        message: 'Geolocation is not supported'
      })
    } 
    getLocation()
  },[])

  return (
    <div className="App">
     {
       isPending ? 
       <div className='error-message'>{isLoaded &&  error ? <div>{error}</div> 
       : <div className='initial-message'>We are retriving your location...</div>}</div> 
       :<Locations locations={locations}/>
     } 
    </div>
  )
}

export default Home