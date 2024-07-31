import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';

import './App.css'
import Dashboard from './pages/Dashboard'
import Drivers from './pages/Drivers'
import Fuel_Log from './pages/Fuel_Log'
import Maintenance from './pages/Maintenance'
import Trucks from './pages/Trucks'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/mymodel/')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error)
      })
  }, [])
  
  return (
    
    <Routes>
      <Route path="/" element = {<Dashboard/>}/>
      <Route path="/drivers" element = {<Drivers/>}/>
      <Route path="/fuel_log" element = {<Fuel_Log/>}/>
      <Route path="/maintenance" element = {<Maintenance/>}/>
      <Route path="/trucks" element = {<Trucks/>}/>
    </Routes>
  )
}

export default App
