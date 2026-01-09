import React, { useState } from "react";
import "./Home.css";
import { FaMapPin } from "react-icons/fa6";
import { BiSolidHandRight } from "react-icons/bi";
import axios from "axios";
import sri2 from "../images/sri2.jpeg";
import sri3 from "../images/sri3.png";
import sri4 from "../images/sri4.jpeg";
import sri5 from "../images/sri5.jpeg";
import sri6 from "../images/sri6.jpeg";
import sri8 from "../images/sri8.jpeg";
import client from "../images/client.jpeg";

function Home() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    scheduleVisit: "",
    scheduleProject: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/brochures/request",
        formData
      );
      console.log("Request submitted:", response.data);
      alert("Brochure request submitted successfully!");
      // Reset form
      setFormData({ name: "", number: "", scheduleVisit: "", scheduleProject: "" });
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <section className="home">
      <div className="video-form-section">
        <div className="home-video">
          <video autoPlay loop muted playsInline>
            <source src="/video/Home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="homecontainer">
          <h1>
            YOUR KEY TO THE PERFECT <br />
            <span>
              HOME AWAITS <BiSolidHandRight className="icon" />
            </span>
          </h1>
        </div>

        {/* Brochure Form */}
        <form onSubmit={handleSubmit} className="contactform">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Number</label>
          <input
            type="number"
            name="number"
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <label>Schedule Visit</label>
          <input
            type="date"
            name="scheduleVisit"
            placeholder="Select Date"
            value={formData.scheduleVisit}
            onChange={handleChange}
          />

          <label>Select Project</label>
          <input
            type="text"
            name="scheduleProject"
            placeholder="Select Project"
            value={formData.scheduleProject}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Request Brochure
          </button>
        </form>
      </div>

      {/* Rest of your Home component */}
      <div className="our">
        <button type="button" className="orr">
          <FaMapPin className="icon1" />
          Our Project Near To ORR
        </button>
      </div>

      <div>
        <div className="logo1">
          <img src={sri2} alt="Logo1" className="logo1img" />
          <div className="overlay-box">
            <h2>Why Invest or Buy</h2>
            <h3>Villa at ORR Hyderabad Area?</h3>
            <p>Premium location • High ROI • Modern Amenities</p>
            <button className="know-more-btn">Know More</button>
          </div>
        </div>
      </div>

      {/* Other sections remain unchanged */}
    </section>
  );
}

export default Home;
