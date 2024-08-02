import React from 'react'
import Grid from '@react-css/grid'
import RoutesList from '../components/routeslist/RoutesList'
import SidebarMenu from '../components/sidebar/SidebarMenu'
import Topbar from '../components/topbar/Topbar'
import DataTable, { createTheme } from 'react-data-table-component'
import { Link } from 'react-router-dom'

createTheme(
	'solarized',
	{
		text: {
			primary: '#268bd2',
			secondary: '#2aa198',
		},
		background: {
			default: '#002b36',
		},
		context: {
			background: '#cb4b16',
			text: '#FFFFFF',
		},
		divider: {
			default: '#073642',
		},
		button: {
			default: '#2aa198',
			hover: 'rgba(0,0,0,.08)',
			focus: 'rgba(255,255,255,.12)',
			disabled: 'rgba(255, 255, 255, .34)',
		},
		sortFocus: {
			default: '#2aa198',
		},
	},
	'dark',
)

const columns = [
	{
		name: 'First Name',
		selector: row => row.first_name,
	},
	{
		name: 'Last Name',
		selector: row => row.last_name,
    sortable: true,
	},
  {
		name: 'Lic #',
		selector: row => row.lic,
    sortable: true,
	},
  {
		name: 'state',
		selector: row => row.state,
    sortable: true,
	},
  {
		name: 'Equipment',
		selector: row => row.equipment,
    sortable: true,
	},
  {
		name: 'Total Miles',
		selector: row => row.total_miles,
    sortable: true,
	},
	
]


const Drivers = ({ data }) => {

  return (
      <Grid>
        <Grid rows='auto'>
        <Topbar />
      </Grid>
      <Grid columns='250px auto'>
        <SidebarMenu />
        <Grid.Item  className='driverContainer'>
          <DataTable 
            title="Driver List"
            columns={columns}
            data={data}
            theme="solarized"
            selectableRows
						highlightOnHover
          /> 
        </Grid.Item>
				{/* <Link to="/create">Create Driver</Link> */}
      </Grid>
    </Grid>  
  )
}

export default Drivers
