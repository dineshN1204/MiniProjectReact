import React, { useState } from 'react'

export default function AddClubs() {
    const[events,setEvents]=useState('')
    const[description,setDescription]=useState('')
    const[select,setSelect]=useState('')
  return (
    <div>
        <form>
            <label>Event Name:</label>
            <input type='text'></input>
            <label>Description:</label>
            <input type='text'></input>
            <label>Category:</label>
            <select>
                <option>Tennis</option>
                <option>Cricket</option>
                <option>Football</option>
                <option>Hockey</option>
                <option>Marathon</option>
                <option>Badminton</option>
                <option>Athletics</option>
                <option>Badminton</option>
                <option>Kick-boxing</option>
            </select>
        </form>
    </div>
  )
}
