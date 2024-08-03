
import Grid from '@react-css/grid'
import RoutesList from '../components/routeslist/RoutesList'
import SidebarMenu from '../components/sidebar/SidebarMenu'
import Topbar from '../components/topbar/Topbar'
import DataTable, { createTheme } from 'react-data-table-component'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

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




const Drivers = () => {

	

	const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
	const {id} = useParams()

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
		{
			cell: row => <button onClick={() => handleEdit(row)}>Edit</button>,
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
		{
			cell: row => <button onClick={() => handleDelete(row.id)}>Delete</button>,
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
		
	]

	const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/drivers/${id}`);
      setData(data.filter(driver => driver.id !== id));
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  const handleEdit = (driver) => {
		navigate(`/drivers/${driver.id}/update`);
    // navigate(`/drivers/:id/update/${driver.id}`);
  };

  useEffect(() => {
    const getDrivers = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/drivers/`)
				if (response.status !== 200) {
					throw new Error('Not Working')
				}
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    getDrivers();
  }, [])
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <Grid>
        <Grid rows='auto'>
        <Topbar />
      </Grid>
      <Grid columns='250px auto'>
        <SidebarMenu />
        <Grid.Item  className='driverContainer'>
          <DataTable 
            title="Drivers"
            columns={columns}
            data={data}
            theme="solarized"
            selectableRows
						highlightOnHover
          /> 
					
        </Grid.Item>
				<Link to="/create">Create Driver</Link>
      </Grid>
			
    </Grid>  
  )
}

export default Drivers
