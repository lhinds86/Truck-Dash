import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>Create Driver</h1>
      <form onSubmit={handleSubmit}>
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