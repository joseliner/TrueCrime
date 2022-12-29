import React from 'react'
import { Login } from '../auth/Login'
import { Register } from '../auth/Register'
import './Home.css'

/* eslint-disable */

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
}
 
export const Home: React.FC<Props> = ({ value, onChange, placeholder, name }) => {
  return (
    
    <React.Fragment>
      <h1>Weather App</h1>
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





