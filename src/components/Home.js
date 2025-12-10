import React from "react";
import "./Home.css";
import { FaMapPin } from "react-icons/fa6";
import { BiSolidHandRight } from "react-icons/bi";
import sri2 from "../images/sri2.jpeg";
import sri3 from "../images/sri3.png";
import sri4 from "../images/sri4.jpeg";
import sri5 from "../images/sri5.jpeg";
import sri6 from "../images/sri6.jpeg";
import sri8 from "../images/sri8.jpeg";
import client from "../images/client.jpeg";
function Home() {
     const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
    return(
       <section className="home">
         <div className="video-form-section">
         <div className="home-video">
        <video autoPlay loop muted playsInline>
          <source src="/video/Home.mp4" type="video/mp4" />
           Your browser does not support the video tag.
        </video>
      </div>
        <div className="homecontainer">
            <h1>YOUR KEY TO THE PERFECT <br/>
             <span>HOME AWAITS <BiSolidHandRight className="icon" /></span>
             </h1>
                  </div>
             <form onSubmit={handleSubmit} className="contactform">
          
          <label>Name</label>
         <input type="text" name="user_name" placeholder="Name" required />
          
          <label>Number</label>
         <input type="Number" name="user_name" placeholder="Number" required />
         
          <label>Schedule Visit</label>
         <input type="text" name="user_name" placeholder="Select Date" required />
          
          <label>Select Project</label>
         <input type="text" name="user_name" placeholder="Select Project" required />
        
         <button type="submit" className="submit-btn">RequestBrochure</button>
         </form>
         </div>
        
         <div className="our">
         <button type="submit" className="orr">< FaMapPin className="icon1"/>Our Project Near To ORR</button>
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
       <div className="project-section">
        <div className="project-image">
          <img src={sri3} alt="Project Image" />
        </div>
        <div className="project-content">
          <h2>
            Project At <span>ORR exit: 03</span>
          </h2>
          <h4>Crafting A Better Tomorrow</h4>
          <p>
            Anithara Aura, at Hyderabad, Near ORR Exit 03, is embraced by verdant
            greens and tranquil villas, creating a refreshing environment.
            Spanning an expansive 33 acres, this township integrates well-planned
            retail and residential spaces designed for a holistic lifestyle.
          </p>
          <div className="project-buttons">
            <button className="btn-outline">Schedule a Visit</button>
            <button className="btn-filled">Request Brochure</button>
          </div>
        </div>
      </div>
      <div className="image">
      <img src={sri4} alt="logo2" className="logo2img"/>
       
        <div className="textonimage">
          <h1> OUR PROJECTS</h1>
          <h2>Your Dream Home Awaits <br/>
          <span>Sri Hari Homes-Where Elegance Meets Comfort!</span>
          </h2>
       </div> 
        </div>   
    <div className="cardsection">
  <div className="projectcard">
    <img src={sri5} alt="projectimg"/>
    <div className="project-info">
    <h3>ANTHIRA AURA</h3>
    <p className="location">Isnapur Pathancheru</p>
      <p className="type">Valla Type:Duplex</p>
      <p className="type1">Villas 400</p>
      <button className="read-more">Read More</button>
    </div>
  </div>
  <div className="projectcard">
    <img src={sri5} alt="projectimg"/>
    <div className="project-info">
    <h3>ANTHIRA AURA</h3>
    <p className="location">Isnapur Patancheru</p>
      <p className="type">Villa Type:Duplex</p>
      <p className="type1">Villas 400</p>
      <button className="read-more">Read More</button>
    </div>
  </div>
  <div className="numbers-section">
  <h1>IN NUMBERS</h1>
  <div className="numbers-cards">
    <div className="num-card">
      <h2>200+</h2>
      <p>HAPPY CLIENTS</p>
    </div>
    <div className="num-card">
      <h2>3+</h2>
      <p>ONGOING PROJECTS</p>
    </div>
    <div className="num-card">
      <h2>6+</h2>
      <p>YEARS EXPERIENCE</p>
    </div>
    <div className="num-card">
      <h2>4LAK+</h2>
      <p>ONGOING SFTS</p>
    </div>
  </div>
</div>
<div className="round-image-section">
  <div className="round-image">
    <img src={sri8} alt="Anithara Aura" />
  </div>
</div>
<div className="client-section">
  <h1 className="client-heading">OUR CLIENTS</h1>

  <div className="client-cards">
    <div className="client-card">
      <img src={client} alt="Vijay Kumar" className="client-img" />
      <h3>VIJAY KUMAR</h3>
      <p className="client-role">Software Employee</p>
      <p>
        Our experience with Sri Hari Homes has been nothing short of exceptional.
        From the initial consultation to the final walkthrough, they demonstrated
        a commitment to quality and customer satisfaction.
      </p>
    </div>

    <div className="client-card">
      <img src={client} alt="Sudheer Varma" className="client-img" />
      <h3>SUDHEER VARMA</h3>
      <p className="client-role">Client</p>
      <p>
        Sri Hari Homes truly understands the emotional significance of owning a home.
        We were impressed by their dedication to turning our vision into a living masterpiece.
      </p>
    </div>

    <div className="client-card">
      <img src={client} alt="Bhushan Reddy" className="client-img" />
      <h3>BHUSHAN REDDY</h3>
      <p className="client-role">Client</p>
      <p>
        Choosing Sri Hari Homes was the best decision we made for our family.
        The craftsmanship and design of our villa surpassed our expectations.
      </p>
    </div>
  </div>
</div>
   </div>
</section>
       
    )
}
export default Home;

