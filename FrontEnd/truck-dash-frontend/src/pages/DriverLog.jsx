import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from 'axios' 

export default function DriverLog() {
    const [driver, setDriver] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        const driversData = async () => {
            try {
                const url = `http://127.0.0.1:8000/api/drivers/${id}`
                const response = await axios.get(url)
                if (response.status !== 200) {
                    throw new Error('Not working')
                }
                setDriver(response.data)
            } catch (error) {
                console.error('Error grabbing driver', error)
            }
        }
    driversData()
    }, [id])
    if (!driver) {
        return <div>Loading...</div>
    }

    const handleDelete = async () => {
      try {
          const url = `http://localhost:8000/drivers/${id}`
          const response = await axios.delete(url);
          if (response.status === 204) {
              console.log('Event deleted successfully')
              window.location.href = '/events'
          }
      } catch (error) {
          console.error('Error deleting', error);
      }
  };


    return (
    <div className = 'Driver'>
      <h1>Driver page</h1>
      <h2>First Name: {driver.first_name}</h2>
      <h3>Last Name: {driver.last_name}</h3>
      <h3>Lic: {driver.lic}</h3>
      <h4>State: {driver.state}</h4>
      <p>Equipment: {driver.equipment} Total Miles {driver.total_miles} </p>
        <Link to={`/drivers/${id}/update`}>Update Driver</Link>
        <button onClick={handleDelete}>Delete Event</button>
    </div>
    )
}