import React, {useContext} from "react";
import ContactForm from "../model/contactForm";
import ContactContext from "../../../context/ContactContext";
import emailjs from 'emailjs-com'
const  Contact = (props) => {
  const context = useContext(ContactContext)
  const {setIsOpen, credentials, setAlert, setCredentials} = context
  const {name, email, message} = credentials
  const sendEmail = (e) => {

    e.preventDefault()
    setIsOpen(true)
    if(name === "" || email === "" || message === ""){
      setAlert({
        type: "Error",
        message: "Fill the form",
        color: "red"
      })
    }
    else{
      setAlert({ 
        type: "Success",
        message: "Your message has been send",
        color: "green"
      })
      emailjs
    .sendForm(
      "service_q8x1cgt",
        "template_vc1iu8g",
        e.target,
        "user_VcwoNwpEVuYh98P8ZWwlQ"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      setCredentials({ name: "", email: "", message: "" });
      }
    
    };

    return (
      <ContactForm sendEmail={sendEmail} onChange={context.onChange} name={credentials.name} email={credentials.email} message={credentials.message}/>
  );
};

export default Contact;
