import React from "react";
import aboutImage from "../assets/image 54.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-content">
      <div className="image-container">
        <img
          src={aboutImage}
          alt="man sitting on top of a opened camper van in the dark"
        />
      </div>
      <div className="container">
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="cta">
          <h3>Your destination is waiting. Your van is ready.</h3>

          <Link to="/vans">
            <button className="btn-dark">Explore our vans</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
