import React from 'react'
import { useNavigate } from 'react-router-dom'

const Locations = ({locations}) => {
  const navigate = useNavigate()

  const handleNavigation = (location) => {
    navigate(`/weather/${location.woeid}`)
  }

  return (
    <div className='location-container'>
      <h1 className='location-instruction'>Select a location</h1>
      <ul>{locations.map(location => 
       <li 
       onClick={()=> handleNavigation(location)}
       key={location.woeid}>
         <div className='location-name'>{location.title}</div>
        </li>)}
       </ul>
    </div>
  )
}

export default Locations