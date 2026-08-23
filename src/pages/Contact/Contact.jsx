import { useState } from "react";
import "./Contact.css";


function Contact() {
  // TODO 1: Initialize state for form inputs (name, email, message)
  const [input , setInput] = useState({
      name : "",
      email : "",
      message : ""
  });
  // TODO 2: Initialize state for submission status (sent: false)
   const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
      const{name, email, message} = e.target;
    // TODO 3: Write the handle change function to update the form state dynamically
      setInput((prev)=>{
          return {...prev, [name] : e.target.value}

      })
  }


        function handleSubmit(e) {
          e.preventDefault();

                if (
                  input.name === "" ||
                  input.email === "" ||
                  input.message === ""
                ) {
                  alert("Fields are required");
                  return;
                }

                alert("Good");
                setIsSubmitted(true);

                setInput({
                  name: "",
                  email: "",
                  message: ""
                });
        }
  


  return (
    <section className="section">
      <div className="container">
        <header className="contact-header">
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-subtitle">
            Questions, feedback or partnerships — we'd love to hear from you.
          </p>
        </header>


        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Visit Us</h3>
              <p>123 Tech Avenue<br />Stockholm, Sweden</p>
            </div>
            <div className="info-card">
              <h3>✉️ Email</h3>
              <p>hello@novatech.store<br />support@novatech.store</p>
            </div>
            <div className="info-card">
              <h3>📞 Call</h3>
              <p>+46 (0) 8 123 456 78<br />Mon–Fri, 9am–6pm CET</p>
            </div>
          </div>


          <form className="contact-form" onSubmit={handleSubmit}>
            {/* TODO 5: Conditionally display this success message when 'sent' is true */}

            {
              isSubmitted ?  <div className="form-success">Thanks! We'll get back to you within 24h.</div> : ""
            }


            <label>
              <span>Full name</span>
              <input
                name="name"
                type="text"
                // TODO 6: Bind value and onChange handler
                value = {input.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                // TODO 7: Bind value and onChange handler
                value={input.email}
                   onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                // TODO 8: Bind value and onChange handler
                value={input.message}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </label>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Contact;

