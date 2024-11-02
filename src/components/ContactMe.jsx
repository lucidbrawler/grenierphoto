import React from 'react'

const ContactMe = () => {
  return (
    <div className='ContactMe'>
      <form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="subject" 
  value="Sales inquiry from mysitename.netlify.app" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
  )
}

export default ContactMe