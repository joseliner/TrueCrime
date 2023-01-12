import React, { useState, useEffect } from 'react'
import './Home.css'

/* eslint-disable */


export const Home: React.FC = () => {

   
//Type definition for suspect
interface ISuspect {
  id: number;
  name: string;
  placeOfCrime: string;
  NumberOfCrimes: number;
  NumberOfVictims: number;
  DateOfCrimes: string;
  JailTime: string;
  DateOfIncarceration: string;
  disorders: string;
  Facts: string;
}

  //usestate
    // const [viewKillers, saveKillers] = useState([]) 
    // const [searchInput, storeSearchInput] = useState([])
    const [viewKillers, saveKillers] = useState<ISuspect[]>([])
    const [searchInput, storeSearchInput] = useState("")

    const fetchData = () =>  {
      fetch("http://localhost:3000/suspects")
        .then(response => {
          return response.json()
        })
        .then(response => {
          saveKillers(response)
          console.log("fetch response", response);
        })
    }

  //useeffect ( fetch inside & set the response to the state to log to the jsx below ( to the screen))
  useEffect(() => {
    fetchData()
    }, [])

    console.log("killerState", viewKillers) 

const handleSearch = (event) => {
storeSearchInput(event.target.value)
} 


  return (
    <div>
       <h1>True Crime</h1>
      <div>
      <input className="input" type="text"
        value={searchInput}
        onChange={handleSearch}
        placeholder= "Type In Killer"
    />
       </div>

       <button
      className=''
      onClick={() => console.log('clicked')}>
        Search
     </button>
     <ul>
     {viewKillers.map(suspect => (
        <li key={suspect.id}>{suspect.name}</li>
     ))}
    </ul>
      </div>
  )
}


