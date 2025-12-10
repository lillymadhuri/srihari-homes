import React from "react";
import "./Contact.css";
import sri21 from "../images/sri21.jpeg";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <img src={sri21} alt="Contact Us" className="contact-hero-img" />
        <div className="contact-hero-text">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>
            CONTACT US <span>NOW</span>
          </h2>
          <p>
            Owning your dream home begins with a simple conversation. At Sri Hari
            Homes, we are here to help you turn your dream into a reality.
            Whether you have inquiries, want to schedule a site visit, or discuss
            your specific housing needs, our team is ready to assist you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                <h3>ADDRESS</h3>
                S V Pinnacle Complex, Plot No. 6 & 50, Shiridi Hills, Isnapur
                Village Rd, Patancheru Mandal, Mumbai Highway Road, Hyderabad,
                TS 502307
              </p>
            </div>
            <hr className="divider" />

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
            
              <p>
                <h3>EMAIL</h3>
                info@sriharihomes.in</p>
            </div>
            <hr className="divider" />

            <div className="contact-item">
               <FaPhoneAlt className="contact-icon" />
              
              <p>
                 <h3>MOBILE</h3>
                 +91 70325 99541</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>
            Drop a line here, and we’ll put you in touch with the right people.
          </h3>
          <form>
            <div className="form-row">
              <div>
              <label className="name">NAME</label>
              <input type="text" placeholder="Name" required />
              </div>
              <div>
                <label className="email">EMAIL</label>
              <input type="email" placeholder="Email" required />
              </div>
            </div>
              <div className="form-row">
                <div>
                  <label className="name">MOBILE</label>
              <input type="text" placeholder="Mobile" required />
              </div>
              <div>
                <label className="name">SCHEDULE SITE VISIT</label>
              <input type="date" placeholder="Schedule Site Visit" />
              </div>
            </div>
           <div>
            <label className="name">MESSAGE</label>
             <textarea placeholder="Message" rows="5"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0000000000!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0000000000000000!2sYour%20Location!5e0!3m2!1sen!2sin!4v0000000000000"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
    ></iframe>
  </div>
</div>
    
  );
}

export default Contact;
