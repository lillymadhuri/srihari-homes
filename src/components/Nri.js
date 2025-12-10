import React from "react";
import "./Nri.css";
import sri17 from "../images/sri17.jpeg";
import sri18 from "../images/sri18.jpeg";
import sri19 from "../images/sri19.jpeg"; 
import sri13 from "../images/sri13.jpeg";
import sri14 from "../images/sri14.jpeg";
import sri15 from "../images/sri15.jpeg";
import sri16 from "../images/sri16.jpeg";
function Nri() {
   const projects = [
    {
      name: "SriHariHomes", location:"Hyderabad" ,bhk: "3 BHK ", img: sri13,
    },
    {
      name: "SriHariHomes",location: "Hyderabad", bhk: " 2 BHK ", img: sri14,
    },
    {
      name: "SriHariHomes",location: "Hyderabad",bhk: " 1 BHK",img: sri15,
    },
    {
      name: "SriHariHomes", location: "Hyderabad", bhk: "3 BHK ", img: sri16,
    },
  ];
  return (
    <div className="nri-page">
      {/* NRI Hero Section */}
      <div className="nri-hero">
        <img src={sri17} alt="NRI Banner" className="nri-hero-img" />
        <div className="nri-hero-content">
          <h1 className="nri-hero-title">NRI INVESTMENTS</h1>
          <p className="nri-hero-subtext">
            Invest in India with trust, transparency and ease.
          </p>
          <button className="nri-hero-btn">Contact NRI Desk</button>
        </div>
      </div>

      {/* Why Buy in India Section */}
      <section className="whybuy-section">
        <div className="whybuy-content">
          <h1 className="whybuy-title">Why Buy in India</h1>
          <h2 className="whybuy-subtitle">
            A Thriving Market for Smart Investors
          </h2>
          <p className="whybuy-text">
            India continues to thrive as one of the world’s fastest-growing
            economies, making it the perfect time to buy real estate. We are
            here to assist you at every step of the journey, from pre-purchase
            to post-purchase, ensuring a seamless experience.
          </p>
        </div>

        <div className="whybuy-image">
          <img src={sri18} alt="Why Buy in India" />
        </div>
      </section>
      <div className="whybuy-section reverse">
  <div className="whybuy-image">
    <img src={sri19} alt="Why Buy" />
  </div>

  <div className="whybuy-content">
    <h2 className="whybuy-title">Your Perfect Home in India Awaits </h2>
    <p className="whybuy-text">
      India remains the top choice for NRIs, offering strong property appreciation, modern infrastructure, and a deep emotional connection to home. Ashiana Housing enhances this experience with diverse buying options—Kid-Centric Homes for growing families, Premium and Elite Homes for a luxurious lifestyle, and Senior Living Homes that prioritize comfort and care.
       Buy more than just a property—embrace a lifestyle that aligns with your dreams.
    </p>
  </div>
</div>
<div className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.name} className="project-img" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-location">{project.location}</p>
            <p className="project-bhk">{project.bhk}</p>
            <a href="#enquiry" className="project-enquire">ENQUIRE</a>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Nri;
