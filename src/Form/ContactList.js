import {React, useState} from "react";
import ContactForm from "./ContactForm.js"

function ContactList({contacts}) {

  return (
    <div >
        {contacts.map((contact, index)=>{
           return <div key={index}>
            <h4>{contact.firstname}</h4>
            <h4>{contact.email}</h4>
            <h4>{contact.number}</h4>


           </div>
        })}
     
    </div>
  );
}

export default ContactList;
