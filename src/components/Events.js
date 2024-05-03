import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Events() {
    const [eventData, setEventData] = useState([])
    const [category, setCategory] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3002/users`)
            .then(
                res => {
                    setEventData(res.data)
                    // setEventData(eventData.filter(item => item.category === category))
                }
            )
            .catch(err => { console.log(err); })
    }, [])
    const changeCategory = (e) => {
        setCategory(e.target.value)
        let updated = []
        for (let i = 0; i < eventData.length; i++) {
            if(eventData[i].category !== category){
                updated.push(eventData[i])
            }
        }
        setEventData(updated)
        // const filtered = eventData.filter(item => item.category === category)
        // setEventData(filtered)
        console.log(eventData);
    }

    return (
        <div>
            <select value={category} onChange={changeCategory}>
                <option value=''>Select an option</option>
                <option value='tennis'>Tennis</option>
                <option value='cricket'>Cricket</option>
                <option value='football'>Football</option>
                <option value='hockey'>Hockey</option>
                <option value='marathon'>Marathon</option>
                <option value='badminton'>Badminton</option>
                <option value='athletics'>Athletics</option>
                <option value='badminton'>Badminton</option>
                <option value='kick-boxing'>Kick-boxing</option>
            </select>

            <div className='d-flex'>

                {/* <img src='https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql' style={{ width: '150px', height: '150px' }} alt='' /> */}
                <Link className='text-decoration-none d-flex mt-3'>
                    {eventData.map(e => (<div className='' key={e.id}>
                        <h3 className='p-1'>{e.eventName}</h3>
                        <p className='p-1'>{e.description}</p><br />
                    </div>
                    ))}
                </Link>
            </div>
        </div>
    )
}
