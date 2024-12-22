import React, { useState } from "react";

import '../App.css';

const ContactForm = () => {

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://glacial-garden-61233.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
 
  return (
    <div id="contactme"  style={{ display:'flex', justifyContent:''}} className="contact"> 
      

    <header className="App-header">
    <p className="ContactTitle">Jody Grenier is currently looking for Photogrophy events and opportunities.</p> 
    <form form-name="Submission" name="form-name" onSubmit={handleSubmit} netlify>
      
      
      <div  className="">
        <label className="contactinfo" htmlFor="name">Name:<input type="text" id="name" required /></label>
        
     
        <label className="contactinfo" htmlFor="email">Email:<input type="email" id="email" required /></label>
        
  
      </div>
      <div>
        <div>
      <label className="contactinfoMessage" htmlFor="message">Message:</label>
      </div>
      <textarea className="MessageBox" id="message" required ></textarea><br/>
      
      <button className="ContactButton" type="submit">{status}</button>
      </div>
    </form>
    </header>
    </div>
  );
};

export default ContactForm;