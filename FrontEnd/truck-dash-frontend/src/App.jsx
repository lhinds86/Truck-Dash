import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import CreateDriver from './components/CreateDriver';
import Fuel_Log from './pages/Fuel_Log';
import Maintenance from './pages/Maintenance';
import Trucks from './pages/Trucks';

function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const getDrivers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/drivers/');
        setDrivers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('There was an error fetching the data!', error);
      }
    };
    getDrivers();
  }, []);

  const driverList = Array.isArray(drivers) ? drivers : [];

  return (
    <>
      <div className="Driverlist">
        {driverList.map(driver => (
          <Link key={driver.id} to={`/drivers/${driver.id}`}>
            <p className="driverlistname">{driver.name}</p>
          </Link>
        ))}
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/drivers" element={<Drivers data={drivers} />} />
        <Route path="/create" element={<CreateDriver />} />
        <Route path="/fuel_log" element={<Fuel_Log />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/trucks" element={<Trucks />} />
      </Routes>
    </>
  );
}

export default App;










/*
import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Dashboard from './pages/Dashboard'
import Drivers from './pages/Drivers'
import Fuel_Log from './pages/Fuel_Log'
import Maintenance from './pages/Maintenance'
import Trucks from './pages/Trucks'
import CreateDriver from './components/CreateDriver'


function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const getDrivers = async () => {
      try {
      const response = await axios.get('http://127.0.0.1:8000/api/drivers/')
      setDrivers(response.data);
      console.log(response.data)
    } catch(error) {
      console.error('There was an error fetching the data!', error)
    }};
      getDrivers();
  }, []);
  
  const driverList = Array.isArray(drivers) ? drivers : [];
  
  return (
    
      <div className='Driverlist'>
        {driverList.map(driver => (
         <Link  to = {/drivers/${driver.id}}>
          <p className="driverlistname" key={driver.id}>{driver.name}</p></Link>
        ))}
      
      </div>

      <Routes>
      <Route path="/" element = {<Dashboard/>}/>
      <Route path="/drivers" element={<Drivers data={drivers} />} />
      <Route path="/create" element={<CreateDriver/>} />
      <Route path="/fuel_log" element = {<Fuel_Log/>}/>
      <Route path="/maintenance" element = {<Maintenance/>}/>
      <Route path="/trucks" element = {<Trucks/>}/>
    </Routes>

  )
}

export default App
*/