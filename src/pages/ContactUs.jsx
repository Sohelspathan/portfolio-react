import axios from "axios";
import emailjs from '@emailjs/browser';
import {useState, useEffect ,useRef} from "react"
import '../styles/contact.css'

function ContactUs() {
    const form = useRef();
    const [backendVariables, setBackendVariables] = useState({});

    useEffect(() => {
      // Update the URL to match your backend
      axios.get('http://localhost:3001/api/')
        .then(response => {
          setBackendVariables(response.data);
        })
        .catch(error => {
          console.error('Error fetching backend variables:', error);
        });
    }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(backendVariables.YOUR_SERVICE_ID,
      backendVariables.YOUR_TEMPLATE_ID, 
        form.current, 
        backendVariables.YOUR_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        message(result)
      }, (error) => {
        console.log(error.text);
        message(null,error)
      });
  };
const message = (result) =>{
  if (result) {
    alert("Message sent successfully:", result.text);
  } 
  else (result !=='OK')
    alert("Message Not send, Please try again later") 
}

  return (
    <div className="form-container">
    <form ref={form} onSubmit={sendEmail} className="form-action">
      <h1>Contact Me</h1>
      <label  >Name</label>
      <input type="text" name="user_name" placeholder="Name" required/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder="email@example.com" required />
      <label>Message</label>
      <textarea name="message" required placeholder="Type your message" />
      <input onClick={()=>{
        message()
      }} id="button" type="submit" value="Send" />
    </form>
    </div>
  );
}
export default ContactUs;



