import React from "react";
import "./LandingPage.css";
import img1 from "../src/assets/img1.png";
import img2 from "../src/assets/img2.png";
import img3 from "../src/assets/img3.png";
import img4 from "../src/assets/img4.png";
import img5 from "../src/assets/img5.png";
import img6 from "../src/assets/img6.png";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpg";
import { Link } from 'react-router-dom';




const LandingPage = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="landing-page">
      <header className="header">
      <div className="header-content">
      <img src={logo} alt="The bridge logo" className="logo" />
      <Link to="/admin" className="admin-link">Admin</Link>
    </div>
        <div className="container">
          <div className="content">
            <strong><p className="description">Improve your skills on your own</p>
            <p className="action">To prepare for a better future</p></strong>
            <div className="form">
              <button type="submit">REGISTER NOW</button>
            </div>
          </div>
          <img src={hero} alt="Hero image" className="hero-image" />
        </div>
      </header>
      <main className="courses">
        <div className="section-header">
          <h2 className="section-title">Discover Our Courses</h2>
          <button className="dcourse-button">View More</button>
        </div>
        <ul className="course-list">
          <li className="course-item">
            <img src={img1} alt="Course 1" />
            <h3 className="course-title">Spring Boot / Angular</h3>
            <p className="course-price">350 DT/ Month</p>
          </li>
          <li className="course-item">
            <img src={img2} alt="Course 2" />
            <h3 className="course-title">Node JS / React</h3>
            <p className="course-price">350 DT/ Month</p>
           
          </li>
          <li className="course-item">
            <img src={img3} alt="Course 3" />
            <h3 className="course-title">Flutter / Firebase</h3>
            <p className="course-price">350 DT/ Month</p>
           
          </li>
          <li className="course-item">
            <img src={img4} alt="Course 4" />
            <h3 className="course-title">Business Intelligence</h3>
            <p className="course-price">1188 DT</p>
            
          </li>

          <li className="course-item">
            <img src={img5} alt="Course 5" />
            <h3 className="course-title">Artificial Intelligence</h3>
            <p className="course-price">350 DT/ Month</p>
           
          </li>

          <li className="course-item">
            <img src={img6} alt="Course 6" />
            <h3 className="course-title">Devops</h3>
            <p className="course-price">350 DT/ Month</p>
            
          </li>
        </ul>
      </main>
      <footer className="footer">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send the message</button>
        </form>
      </footer>
    </div>
  );
};

export default LandingPage;
