import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Weather from './components/pages/Weather'
import ErrorPage from './components/pages/ErrorPage'

const App = () => {
  
  const CROSS_DOMAIN = 'https://the-ultimate-api-challenge-v2.herokuapp.com'

  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<Home 
          CROSS_DOMAIN={CROSS_DOMAIN}
        />}/>
        <Route path="/weather/:id" 
        element={<Weather 
        CROSS_DOMAIN={CROSS_DOMAIN}
        />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
