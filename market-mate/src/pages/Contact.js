import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send Message')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    emailjs.sendForm(
      'service_tbb3rs7',
      'template_daqbppm',
      form.current,
      '7zRbZLcheu4KUKFjm'
    ).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
        setTimeout(() => {
          form.current.reset();
          setFormStatus('Send Message');
        }, 1500);
      },
      (error) => {
        console.log(error.text);
        setFormStatus('Send Message');
      }
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3"><strong>Contact Us</strong></h2>
      <h6 className="mb-6">
        Have questions about our company, products, orders, your account, or technical issues?
      </h6>
      <h6 className="mb-6">Send our Customer Service team a note below. We look forward to helping you.</h6>

      <div className='flex justify-center' >
        <form ref={form} onSubmit={sendEmail} className=''>
          <div className="mb-3">
            <input className="form-control" type="text" id="name" placeholder="Your Name" name="user_name" required />
          </div>
          <div className="mb-3">
            <input className="form-control" type="email" id="email" placeholder="Email" name="user_email" required />
          </div>
          <div className="mb-4">
            <textarea
              rows={10}
              className="form-control w-100"
              id="message"
              placeholder="Enter Your Message!"
              name="message"
              required />
          </div>
        </form>

      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-danger" type="submit" >
          {formStatus}
        </button>
      </div>
    </div>
  )
}

export default Contact
