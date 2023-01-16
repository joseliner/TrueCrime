import React, { useState, useEffect } from 'react'
import './Home.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
/* eslint-disable */


export const Home: React.FC = () => {

   interface IAutoCompleteList {
    id: number;
    label: string;
   }

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

    const listOfSuspectsForAutocomplete: Array<IAutoCompleteList> = [
      {
        id: 1,
        label: "Jeffrey Dahmer",
      },
      {
        id: 2,
        label: "Ted Bundy",
      },
      {
        id: 3,
        label: "John Wayne Gacy",
      },
      {
        id: 4,
        label: "Aileen Wuornos",
      },
      {
        id: 5,
        label: "Richard Ramirez",
      },
      {
        id: 6,
        label: "Edmund Kemper",
      },
      {
        id: 7,
        label: "David Berkowitz",
      },
      {
        id: 8,
        label: "Gary Ridgway",
      },
      {
        id: 9,
        label: "Jerry Brudos",
      },
      {
        id: 10,
        label: "Herbert Mullin",
      },
      {
        id: 11,
        label: "Dennis Rader",
      },
      {
        id: 12,
        label: "Andrei Chikatilo",
      },
      {
        id: 13,
        label: "Peter Sutcliffe",
      }
    ]

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

console.log(listOfSuspectsForAutocomplete, "list");


  return (
    <div>
       <h1>True Crime</h1>
      <div>
      <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={listOfSuspectsForAutocomplete}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Click to see Suspects" />}
/>
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


