import React from 'react'
import Grid from '@react-css/grid'
import RoutesList from '../components/routeslist/RoutesList'
import CalendarMini from '../components/calendar/CalendarMini'
import SidebarMenu from '../components/sidebar/SidebarMenu'
import Topbar from '../components/topbar/Topbar'


const Dashboard = () => {

  return (
    <Grid>
        <Grid rows='auto'>
        <Topbar />
      </Grid>
      <Grid columns='250px auto'>
        <SidebarMenu />
        <Grid.Item  className='driverContainer'>
        <RoutesList />
        </Grid.Item>
      </Grid>
    </Grid>  
  )
}

export default Dashboard

