import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Drivers from './pages/Drivers'
import Fuel_Log from './pages/Fuel_Log'
import Maintenance from './pages/Maintenance'
import Trucks from './pages/Trucks'
import SidebarMenu from './components/sidebar/SidebarMenu'
import Topbar from './components/topbar/Topbar'
import Grid from '@react-css/grid'
function App() {

  return (
    <Grid>
      <Grid rows='auto'>
        <Topbar />
      </Grid>
      <Grid columns='250px auto'>
        <SidebarMenu />
        <Dashboard />
      </Grid>
      

      <Routes>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/drivers" element = {<Drivers/>}/>
        <Route path="/fuel_log" element = {<Fuel_Log/>}/>
        <Route path="/maintenance" element = {<Maintenance/>}/>
        <Route path="/trucks" element = {<Trucks/>}/>
      </Routes>
    </Grid>
    
  )
}

export default App
