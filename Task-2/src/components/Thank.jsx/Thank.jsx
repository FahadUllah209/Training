import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Thank.css"

function Thank() {
    const navigate = useNavigate();
  return (
    <div className="thankyou-container">
            <h1>Thank You!</h1>
            <p>Your submission has been received.</p>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </div>
  )
}

export default Thank
