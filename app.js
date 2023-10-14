import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css';

function App() {
  const [data, setdata] = useState([]) 
   useEffect(()=>{
    axios.put('https://reqres.in/api/users',
    {
      "name": "morpheus",
    "job": "zion resident"
    })

    .then(res=> console.log(res))
    .catch(err=> console.log(err));
}, [])
  return (
    <div >
      <h2>axios library in React js</h2>
      {
        data.map((d, i) => {
          return <p key={i}> {d.email}</p>

        })
      }
      
    </div>
  );
}

export default App;
