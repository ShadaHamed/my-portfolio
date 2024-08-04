import React from 'react'
import './Contact.css'
import call from '../../assets/call.png'
import email from '../../assets/email.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c41e1c96-abf2-48f4-ae60-7ccede1eb3f5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(result);
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert(`Error: ${data.message}`);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <div className='line'></div>
        </div>
        <div className="contact-sections">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to take on new projects, so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt="" /> <p>shadahamed@aucegypt.edu</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call} alt="" /> <p>+967-782-529-613</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact