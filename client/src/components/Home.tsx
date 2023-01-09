import React, { useState, useEffect } from 'react'
import './Home.css'


/* eslint-disable */

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
}
 
export const Home: React.FC<Props> = ({ value, onChange, placeholder, name }) => {

  //usestate
  const UsingFetch = () => {
    const [killers, setKillers] = useState([]) 

    const fetchData = () =>  {
      fetch("src/mockApi/truecrime.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setKillers(data)
          console.log(data);
        })
    }
  }

  //useeffect ( fetch inside & set the response to the state to log to the jsx below ( to the screen))
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {data.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch
  

  return (
    
    <React.Fragment>
      <h1>True Crime</h1>
      <div>
      <input className="input" type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
    />
       </div>

       <button
      className=''
      onClick={() => console.log('clicked')}>
        Search
     </button>
    </React.Fragment>
  );
};




function fetchData() {
  throw new Error('Function not implemented.');
}

