import React from 'react'
import "./Project.css";
import sri9 from "../images/sri9.jpeg";
import sri11 from "../images/sri11.jpeg";
import sri12 from "../images/sri12.jpeg";
import sri13 from "../images/sri13.jpeg";
import sri14 from "../images/sri14.jpeg";
import sri15 from "../images/sri15.jpeg";
import sri16 from "../images/sri16.jpeg";


function Project() {
  const projects = [
    {
      title: "Srihari Green Meadows",
      location: "Chennai",
      status: "Ongoing",
      img: "/images/sri9.jpeg",
    },
    {
      title: "Srihari Elite Towers",
      location: "Delhi",
      status: "Upcoming",
      img: "/images/sri9.jpeg",
    },
    {
      title: "Srihari Harmony Homes",
      location: "Mumbai",
      status: "Completed",
      img: "/images/sri9.jpeg",
    },
  ];
   const cities = [
  { name: "Chennai", properties: "2 Properties", img: sri12 },
  { name: "Delhi", properties: "1 Property", img: sri13 },
  { name: "Mumbai", properties: "2 Properties", img: sri14 },
  { name: "Pune", properties: "3 Properties", img: sri15 },
  { name: "Culcutta", properties: "8 Properties", img: sri16 },
];

  return (
    <div className="project">
      <section className="project-hero">
        <h1>
          OUR <span>PROJECTS</span>
        </h1>
      </section>

      {/* Project Cards Grid */}
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
             <img
              src={sri9}
              className="project-img"
              alt={project.title}
            />

            <h2 className="project-title1">{project.title}</h2>
            <p className="project-location1">{project.location}</p>

            <span className={`project-status1 ${project.status.toLowerCase()}`}>
              {project.status}
            </span>

            <button className="project-btn">View Details</button>

          </div>
        ))}
      </div>
      <div className="project-hero">
  <img src={sri11} alt="Project Banner" className="project-hero-img" />
  <div className="project-hero-text">
    <h1>BELIEVE IN FINDING IT</h1>
    <p>Delivering Quality • Trust • Excellence</p>
  </div>
</div>
<section className="project-features">
  <h2>Why You Should Work With Us</h2>
  <p>Making real estate easier, smarter, and safer.</p>

  <div className="features-grid">
    <div className="feature-box">
      <i className="fas fa-file-alt"></i>
      <h3>Wide Range of Properties</h3>
      <p>We offer expert legal help for all related property items in Dubai.</p>
    </div>

    <div className="feature-box">
      <i className="fas fa-home"></i>
      <h3>Buy or Rent Homes</h3>
      <p>We sell your home at the best market price and very quickly as well.</p>
    </div>

    <div className="feature-box">
      <i className="fas fa-check-circle"></i>
      <h3>Trusted by Thousands</h3>
      <p>We offer you free consultancy to get a loan for your new home.</p>
    </div>
  </div>
</section>
<div className="cities-section">
      <h2 className="cities-title">Find Properties in These Cities</h2>
      <div className="cities-grid">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img src={city.img} alt={city.name} className="city-img" />
            
            <div className="city-overlay">
              <h3>{city.name}</h3>
              <p>{city.properties}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

       </div>
       
       
  );
}

export default Project;
