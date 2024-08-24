import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import facebook from '../../assets/facebook.png';
import microsoft from '../../assets/microsoft.png';
import facebooks from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter.png';
import Youtube from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';
const Contact =()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_1fab5se', 'template_0zonx57', form.current, {
            publicKey: 'S8INwN7brz9Em-wxh',
          })
          .then(
            (result) => {
                console.log(result.text);
              console.log('SUCCESS!');
              alert('Email sent')
              e.target.reset()
              


            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactpageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the oppertunity to work with a deserve group of companies. some of the notable companies i have worked with includes.
                </p>
                <div className="clientImages">
                   <img src={Walmart} alt="client" className="clientImg" />
                   <img src={adobe} alt="client" className="clientImg" />
                   <img src={facebook} alt="client" className="clientImg" />
                   <img src={microsoft} alt="client" className="clientImg" />
                </div>

            </div>
            <div id="contact">
                <h1 className="contactPagTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any work oppertunites
                </span>
                <form  className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Enter your name" name='your_name'/>
                  <input type="email" className="email" placeholder="Enter your email" name='your_email' />
                  <textarea  className="msg"name="message" rows='5' placeholder="your message"></textarea>
                  <button type="submit" value='send'className="submitBtn">submit</button>
                  <div className="links">
                    <img src={facebooks} alt="Facebook" className="link" />
                    <img src={twitter} alt="Twitter" className="link" />
                    <img src={Youtube} alt="Youtube" className="link" />
                   
                  </div>
                </form>

            </div>
        </section>
    )
}
export default Contact;