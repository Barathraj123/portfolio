import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
