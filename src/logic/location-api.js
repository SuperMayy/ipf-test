export const fetchLocation = (BASE_LOCATION_URL, setLocations, setIsPending, setError) => {
    fetch(BASE_LOCATION_URL)
    .then(res => {
      if(!res.ok){
        throw Error('Your location was not passed into the API succesfully');
      }
      return res.json();
     })
     .then(data => {
      setLocations(data);
      setIsPending(false);
      console.log(data)
      })
      .catch(err => {
        console.log(BASE_LOCATION_URL)
        setError(err.message)
      }); 
}