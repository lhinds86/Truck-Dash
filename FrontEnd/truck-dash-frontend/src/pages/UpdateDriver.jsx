import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>Edit Driver</h1>
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

export default UpdateDriver;



