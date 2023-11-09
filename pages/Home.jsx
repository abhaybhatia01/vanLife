import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <div className="home-p-a-conatiner">
                <Link className="home-link" to="vans">Find your van</Link>
                <Link className="home-link" to="host">host your van</Link>
            </div>
        </div>
    )
};