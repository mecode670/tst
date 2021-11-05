import React from 'react'
import ContactContext from './ContactContext'
import { useState } from "react";
import emailjs from "emailjs-com"

const ContactState = (props) => {
    
    const s1 = {
        "name": "",
        "email": "",
        "message": ""
    }
    const [credentials, setCredentials] = useState(s1); 
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    return (
            <ContactContext.Provider value={{

                credentials: credentials, 
                setCredentials: setCredentials,
                onChange: onChange
                }}>
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;