import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">Have a project in mind, a question, or just want to say hi?</p>
      
      <form
        action="https://formspree.io/f/yourformid"  // Replace with your Formspree form ID
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p className="contact-footer">Or email me directly at <a href="mailto:your@email.com">your@email.com</a></p>
    </section>
  );
};

export default Contact;
