import axios from 'axios'
import React, { useState } from 'react'

export default function AddEvents() {
    const [eventName, setEventName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const handleAddEvents = (e) => {
        e.preventDefault()
        if (eventName && category !== "") {
            axios.post(`http://localhost:3002/users`, {
                eventName, description, category
            })
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })
        } else alert('Please fill all the required fields')
        setEventName('');
        setDescription('');
        setCategory('')
    }
    return (
        <div>
            <form onSubmit={handleAddEvents}>
                <label>Event name:</label>
                <input type='text' value={eventName} onChange={(e) => { setEventName(e.target.value) }} required /><br />
                <label>Description:</label>
                <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} /><br />
                <label>Category:</label>
                <select value={category} onChange={(e) => { setCategory(e.target.value) }} aria-required='true'>
                    <option value='select-an-option'>Select an option</option>
                    <option value='tennis'>Tennis</option>
                    <option value='cricket'>Cricket</option>
                    <option value='football'>Football</option>
                    <option value='hockey'>Hockey</option>
                    <option value='marathon'>Marathon</option>
                    <option value='badminton'>Badminton</option>
                    <option value='athletics'>Athletics</option>
                    <option value='badminton'>Badminton</option>
                    <option value='kick-boxing'>Kick-boxing</option>
                </select><br />
                <button type='submit'>Add Events</button>
            </form>
        </div>
    )
}
