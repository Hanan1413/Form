import {React, useState} from 'react';


import './App.css';

// don't change the Component name "App"
export default function Smallform() {

    //  const[userinput, setUserInput] = useState('')
     const[message, setMessage]= useState('Invalid')

      function messgehandleChange(e){
        const value = e.target.value
         if ( value.trim().length <= 3 ) {
            setMessage('invalid')

         } else {
            setMessage('vailid')
            
         }
       
         
     }
    return (
        <form>
        <label>Your message</label>
        <input type="text"  
        // value={userinput} 
        onChange={messgehandleChange}
        />
            <p>{message}</p>
            
            {/* { key in formData {
        console.log()

      }} */}
      {/* {Array.from(formData).map((person) =>{
        return(
          <div >
            <h4>{person.name}</h4>
            <h4>{person.email}</h4>
            <h4>{person.number}</h4>

          </div>
        )
      })} */}
        </form>
    );
}