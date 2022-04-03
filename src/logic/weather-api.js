export const fetchWeather = (BASE_WEATHER_URL, setWeather, setIsPending, setError) => { //need error handling for this API
    fetch(BASE_WEATHER_URL)
    .then(res => {
      if(!res.ok){
        throw Error('The woeid is was passed to the API');
      }
      return res.json();
     })
     .then(data => {
      setWeather(data);
      setIsPending(false);
      console.log(data)
      })
      .catch(err => {
      console.log(`Error: ${err.message}`);
      setError(err.message)
      }); 
  }