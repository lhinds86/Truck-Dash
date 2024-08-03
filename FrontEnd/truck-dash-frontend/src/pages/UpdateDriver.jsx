import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../App.css'
import Grid from '@react-css/grid'
import Topbar from '../components/topbar/Topbar';
import SidebarMenu from '../components/sidebar/SidebarMenu';

const UpdateDriver = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lic, setLic] = useState('');
  const [state, setState] = useState('');
  const [equipment, setEquipment] = useState('');
  const [totalMiles, setTotalMiles] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDriver = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/drivers/${id}`);
        const driverData = response.data;
        setDriver(driverData);
        setFirstName(driverData.first_name);
        setLastName(driverData.last_name);
        setLic(driverData.lic);
        setState(driverData.state);
        setEquipment(driverData.equipment);
        setTotalMiles(driverData.total_miles);
      } catch (error) {
        console.error('Error fetching driver:', error);
      }
    };
    fetchDriver();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedDriver = {
        first_name: firstName,
        last_name: lastName,
        lic,
        state,
        equipment,
        total_miles: totalMiles,
      };
      await axios.put(`http://127.0.0.1:8000/api/drivers/${id}/`, updatedDriver);
      navigate('/drivers');
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  if (!driver) {
    return <div>Loading...</div>;
  }

  return (
    <Grid>
      <Grid row='auto'>
        <Topbar />
      </Grid>
      <Grid columns='250px auto'>
        <SidebarMenu />
        <Grid.Item  className='editContainer'>
          <h1>Edit Driver</h1>
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

export default UpdateDriver;



