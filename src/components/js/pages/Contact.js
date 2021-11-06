import React, {useContext} from "react";
import ContactForm from "../model/contactForm";
import ContactContext from "../../../context/ContactContext";
import emailjs from 'emailjs-com'
const  Contact = (props) => {
  const context = useContext(ContactContext)
  const sendEmail = (e) => {
          e.preventDefault()
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
      
    };

  const {credentials, setCredentials} = context;
    return (
      <ContactForm sendEmail={sendEmail} onChange={context.onChange} name={credentials.name} email={credentials.email} message={credentials.message}/>
  );
};

export default Contact;
