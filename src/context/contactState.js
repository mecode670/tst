import React from 'react'
import ContactContext from './ContactContext'
import { useState } from "react";

const ContactState = (props) => {
    
    const s1 = {
        "name": "",
        "email": "",
        "message": ""
    }
    let s2 = false

    const s3 = {
        type: "",
        message: ""
    }
  let [isOpen, setIsOpen] = useState(s2)
  let [alert, setAlert] = useState(s3)
    const [credentials, setCredentials] = useState(s1); 
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    return (
            <ContactContext.Provider value={{
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                credentials: credentials, 
                setCredentials: setCredentials,
                onChange: onChange,
                alert : alert,
                setAlert: setAlert
                }}>
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;