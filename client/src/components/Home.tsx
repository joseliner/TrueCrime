import React from 'react'
import { Login } from '../auth/Login'
import { Register } from '../auth/Register'
import './Home.css'

/* eslint-disable */
interface Props {
  onChange: (str: string) => void;
  placeholder: string;
  name: string;
  value?: string;
}

export const Home: React.FC<Props> = ({ onChange: onchange, placeholder: 'placeholder', name: 'name', value: 'value' ? = "" : }); =>
{
  return (
    <React.Fragment>
        
      <h1>Weather App</h1>
      {/* <p>Want to sign up?<Register/></p>
     <p>Already Signed up? <Login /></p>   */}
    </React.Fragment>
  );
}

export default Home;
