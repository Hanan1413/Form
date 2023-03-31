// import DisplayFormData from './DisplayFormData'
import './Form.css';
import { useState } from 'react';

function Form({addContact}) {
  const[formData, setFormData]= useState({
    firstname:'',
    email:'',
    number:'',
    isstrong: false,


  });
  

  function handleSubmit(e){
      e.preventDefault()

      addContact(formData)


      // clear form input on submit
      setFormData({ firstname:"", email:"", number:""});


  }

  function handleChange(e) {
    // destructure 
    
    setFormData( perviousState =>(
      {
      ...perviousState,

      [ e.target.name]: e.target.value
      
      
      
      }
    )
    )}
    return(
     <>
      <div className="container">
      <form action="#" className='form' onSubmit={handleSubmit}>

      <div className="user-details">
        <div className="input-box">
          <label  htmlFor="firstname" className="details">Full Name</label>
          <input id='name' type="text" placeholder="Enter your name" name='firstname' value={formData.firstname} onChange={handleChange} required />
        </div>
      
        <div className="input-box">
          <label  htmlFor="email" className="details">Email</label>
          <input id='emil' type="text" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange}  required  />
        </div>
        <div className="input-box">
          <label  htmlFor="number" className="details">Phone Number</label>
          <input  id="number" type="text" placeholder="Enter your number" name='number' value={formData.number} onChange={handleChange}  required />
        </div>

   
      </div>


     



        <button className='button' type='submit'>submit</button>

      </form>


      </div>

      

     
     
     </>
 ) 
}

export default Form;