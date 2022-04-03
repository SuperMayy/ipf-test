import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate('/')
  }

  return (
    <div className='error-page'>
      <button className="navigate-back-button" onClick={handleNavigation}>Back</button>
      <h1>Error: Page does not exist</h1>
    </div>
  )
}

export default ErrorPage