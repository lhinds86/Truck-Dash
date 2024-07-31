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
       </Grid>
     </Grid>  
  )
}

export default Dashboard


    // <Grid>
    //   <Grid rows='6em' columns='80em 2em' className='dashboardContainer'>
    //     <Grid.Item className='routeContainer'>
    //       <RoutesList />
    //     </Grid.Item>
        
    //     <Grid.Item className='calendarContainer'>
    //       <CalendarMini />
    //     </Grid.Item>
    //   </Grid>
    // </Grid>  
     
    //   <Grid>
    //   <Grid rows='auto'>
    //     <Topbar />
    //   </Grid>
    //   <Grid columns='250px auto'>
    //     <SidebarMenu />
    //     <Dashboard />
    //   </Grid>
    // </Grid>  