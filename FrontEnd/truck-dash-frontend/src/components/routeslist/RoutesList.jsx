import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'

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
);

const columns = [
	{
		name: 'Load #',
		selector: row => row.load_id,
	},
	{
		name: 'Origin',
		selector: row => row.origin,
    sortable: true,
	},
  {
		name: 'Pickup Date',
		selector: row => row.pickup_date,
    sortable: true,
	},
  {
		name: 'Pickup Time',
		selector: row => row.pickup_time,
    sortable: true,
	},
  {
		name: 'Destination',
		selector: row => row.destination,
    sortable: true,
	},
  {
		name: 'Drop off Date',
		selector: row => row.dropoff_date,
    sortable: true,
	},
  {
		name: 'Drop off Time',
		selector: row => row.dropoff_time,
    sortable: true,
	},
  {
		name: 'ETA',
		selector: row => row.eta,
    sortable: true,
	},
  {
		name: 'Miles',
		selector: row => row.miles,
    sortable: true,
	},
]

const data = [
  	{
		id: 1,
		load_id: '455990',
		origin: 'Atlanta, GA',
    pickup_date: '7/29/24',
    pickup_time: '2:30PM',
    destination: 'Miami, FL',
    dropoff_date: '7/30/24',
    dropoff_time: '8PM',
    eta: '12hrs',
    miles: '800'  
	},
	{
		id: 2,
		load_id: '467655',
		origin: 'Nashville, TN',
    pickup_date: '8/01/24',
    pickup_time: '8AM',
    destination: 'Atlanta, GA',
    dropoff_date: '8/01/24',
    dropoff_time: '1PM',
    eta: '12hrs',
    miles: '350' 
	},
  {
		id: 3,
		load_id: '455990',
		origin: 'Atlanta, GA',
    pickup_date: '7/29/24',
    pickup_time: '2:30PM',
    destination: 'Miami, FL',
    dropoff_date: '7/30/24',
    dropoff_time: '8PM',
    eta: '12hrs',
    miles: '800'  
	},
  {
		id: 4,
		load_id: '455990',
		origin: 'Atlanta, GA',
    pickup_date: '7/29/24',
    pickup_time: '2:30PM',
    destination: 'Miami, FL',
    dropoff_date: '7/30/24',
    dropoff_time: '8PM',
    eta: '12hrs',
    miles: '800'  
	}
]

function RoutesList() {
	return (
		<DataTable 
			columns={columns}
			data={data}
      theme="solarized"
			selectableRows
		/>
	);
}

export default RoutesList