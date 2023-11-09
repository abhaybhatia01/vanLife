import React from "react"
import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-hero">
                <img src={bgImg} className="about-hero-image" />
                <div className="about-heading">
                    <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                </div>
            </div>
            <div className="about-page-content">
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your van is ready. <br />Your destination is waiting...</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}