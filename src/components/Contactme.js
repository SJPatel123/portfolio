import React, { useState } from 'react'
import './contactme.css'
import axios from 'axios';

export default function Contactme() {
  const charLimit = 300;
  const [limit, setLimit] = useState(charLimit);

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onMessageChange = (event) => {
    setMessage(event.target.value);

    let lenOfMsg = (event.target.value).length;
    let limitChar = charLimit - lenOfMsg;
    setLimit(limitChar);
  }

  const onNameChange = (event) => {
    const nm = event.target.value;
    setName(nm);
  }

  const onEmailChange = (event) => {
    const mail = event.target.value;
    setEmail(mail);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSending(true);
      await axios.post('http://localhost:3001/send-email', { name, email, message });
      setShowSuccessMessage(true);
      
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      console.log('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
    finally{
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="contact-me">
        <div className="contact-form">
          <form onSubmit={handleSubmit} method="POST">
            <label>Full Name:</label>
            <input type="text" onChange={onNameChange} value={name} placeholder="Enter Full Name" />
            <label>Email:</label>
            <input type="text" onChange={onEmailChange} value={email} placeholder="Enter Your Email-Id" />
            <label>Description:</label>
            <textarea onChange={onMessageChange} placeholder="Enter Description" rows={5} maxLength={charLimit} />
            <p>{limit} / 300 character(s) remaining</p>
            <button type="submit">{isSending ? <div className="loader"></div> : showSuccessMessage ? (<span>Email sent successfully!</span>) : (<span>Send Email</span>)}</button>
          </form>
        </div>
      </div>
    </>
  )
}
