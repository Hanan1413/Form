import {React, useState} from 'react'
import ContactList from './Form/ContactList';
import ContactForm from './Form/ContactForm';
import SmallForm from './SmallForm';
import './App.css';

function App() {
//  store contact info object data gotton from ContactForm
  const[contacts, setContacts] = useState([]);
   
// take contactInfo as Parameter for updating the contacts state
  const addContact = (contactInfo) =>{
    setContacts([...contacts, contactInfo])


    }
  


  return (
    <div>
      {/* <SmallForm /> */}
      <ContactForm  addContact={addContact}  />
      <ContactList contacts={contacts} />

    </div>
  );
}

export default App;
