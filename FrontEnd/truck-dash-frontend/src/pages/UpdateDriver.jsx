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



/*
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const UpdateDriver = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [driver, setDriver] = useState({
        firstName: '',
        lastName: '',
        lic: '',
        state: '',
        equipment: '',
        totalMiles:'',
    });
    const [updated, setUpdated] = useState(false)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const driverDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/drivers/${id}/`)
                setDriver(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching driver data:', error)
            }
        }
        driverDetails()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const putResponse = await axios.put(`http://127.0.0.1:8000/api/drivers/${id}/`, driver)
            console.log('Parent updated', putResponse.data)
            setUpdated(true);
        } catch (error) {
            console.error('Error updating driver:', error)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDriver(prevDriver => ({
            ...prevDriver,
            [name]: value
        }));
    };
useEffect(() => {
        if (updated) {
            navigate('/');
        }
    }, [updated, navigate]);

    if (loading) {
        return <div>Loading...</div>
    }
return (
        <div>
        <h1>Edit Driver</h1>
        <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input type="text" name="first" value={driver.firstName} onChange={handleChange} required />
            <label>Last Name:</label>
            <input type="text" name="last" value={driver.lastName} onChange={handleChange} />
            <label>Lic:</label>
            <input type="text" name="lic" value={driver.lic} onChange={handleChange} />
            <label>State:</label>
            <input type="text" value={driver.state} onChange={handleChange} />
            <label>Equipment:</label>
            <input type="text" value={driver.equipment} onChange={handleChange} />
            <label>Total Miles:</label>
            <input type="text" value={driver.totalMiles} onChange={handleChange} />
            <button type="submit">Update</button>
        </form>
    </div>
)
}

export default UpdateDriver
*/