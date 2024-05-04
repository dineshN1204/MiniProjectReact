import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Events() {
  const [eventData, setEventData] = useState([]);
  const [category, setCategory] = useState("");
  const[filteredData,setFilteredData]=useState([])

 useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then(res=>setEventData(res.data))
    .catch(err=>{console.log(err)})
 },[])

  const changeCategory = (e) => {
    
    const filtered=eventData.filter(x=>x.category === e.target.value)
    setFilteredData(filtered)
  };

  return (
    <div>
      <label>Select Events: </label>
      <select value={category} onChange={changeCategory}>
        <option value="">Select an option</option>
        <option value="tennis">Tennis</option>
        <option value="volleyball">Volleyball</option>
        <option value="basketball">Basketball</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="hockey">Hockey</option>
        <option value="marathon">Marathon</option>
        <option value="badminton">Badminton</option>
        <option value="athletics">Athletics</option>
        <option value="kick-boxing">Kick-boxing</option>
      </select>
      
      <div className="d-flex">
        {/* <img src='https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql' style={{ width: '150px', height: '150px' }} alt='' /> */}
        <Link className="text-decoration-none d-flex mt-3 text-dark">
          {filteredData.map((e) => (
            <div className="" key={e.id}>
              <h3 className="p-1 ">{e.eventName}</h3>
              <p className="p-1 ">{e.description}</p>
              <br />
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
}
