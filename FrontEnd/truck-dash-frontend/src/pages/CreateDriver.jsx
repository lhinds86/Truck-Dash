import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css'
import Grid from '@react-css/grid'
import Topbar from '../components/topbar/Topbar';
import SidebarMenu from '../components/sidebar/SidebarMenu';

const CreateDriver = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lic, setLic] = useState('');
  const [state, setState] = useState('');
  const [equipment, setEquipment] = useState('');
  const [totalMiles, setTotalMiles] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newDriver = {
        first_name: firstName,
        last_name: lastName,
        lic,
        state,
        equipment,
        total_miles: totalMiles,
      };
      await axios.post('http://127.0.0.1:8000/api/drivers/', newDriver);
      navigate('/drivers');
    } catch (error) {
      console.error('Error creating record:', error);
    }
  };

  return (
    <Grid>
      <Grid row='auto'>
        <Topbar />
      </Grid>
      <Grid columns='250px auto'>
        <SidebarMenu />
        <Grid.Item  className='editContainer'>
          <h1>New Driver</h1>
          <form onSubmit={handleSubmit} className='formContainer'>
            <label className='input-title' for="firstName">First Name:</label>
            <input className='input-box' type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
            
            <label className='input-title' for="lastName">Last Name:</label>
            <input className='input-box' type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
            
            <label className='input-title' for="lic">LIC:</label>
            <input className='input-box' type="text" id="lic" value={lic} onChange={(e) => setLic(e.target.value)} placeholder="LIC" />
            
            <label className='input-title' for="state">State:</label>
            <input className='input-box' type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" />
            
            <label className='input-title' for="equipment">Equipment:</label>
            <input className='input-box' type="text" id="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} placeholder="Equipment" />
            
            <label className='input-title' for="totalMiles">Total Miles:</label>
            <input className='input-box' type="text" id="totalMiles" value={totalMiles} onChange={(e) => setTotalMiles(e.target.value)} placeholder="Total Miles" />
            <button className='editSubmitBtn' type="submit">Submit</button>
          </form>
        </Grid.Item>
				
      </Grid>
      
    </Grid>
  );
};

export default CreateDriver;



/*
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateDriver = () => {
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [lic, setLic] = useState('')
const [state, setState] = useState('')
const [equipment, setEquipment] = useState('')
const [totalMiles, setTotalMiles] = useState('')

const [loading, setLoading] = useState(false)
const [drivers, setDrivers] = useState([])

useEffect(() => {
const getData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/drivers/')
      setDrivers(response.data);
    } catch (error) {
      console.error('Error pulling:', error);
    } finally {
      setLoading(false);
    }
  }
  getData();
}, [])
const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        if (firstName && lastName && lic && state && equipment && totalMiles) {
        const newDriver = {
          first_name: firstName,
          last_name:lastName,
          lic,
          state,
          equipment,
          total_miles: totalMiles,
        };
        const driverResponse = await axios.post('http://127.0.0.1:8000/api/drivers/', newDriver)
        console.log('New Driver created:', driverResponse.data)
        }
    } catch (error) {
        console.error('Error creating record:', error)
      }
    };

    if (loading) {
        return <div>Loading...</div>
      }
return (
    <div>
    <h1>Create Form</h1>
        <form onSubmit={handleSubmit}>
        <h2>New Driver</h2>
        First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
        Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
        LIC: <input type="text" value={lic} onChange={(e) => setLic(e.target.value)} placeholder="LIC" />
        State: <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" />
        Equipment: <input type="text" value={equipment} onChange={(e) => setEquipment(e.target.value)} placeholder="Equipment" />
        Total Miles: <input type="text" value={totalMiles} onChange={(e) => setTotalMiles(e.target.value)} placeholder="Total Miles" />
        <button type="submit">Submit</button>
      </form>
    </div>
    );
}
    export default CreateDriver

    */