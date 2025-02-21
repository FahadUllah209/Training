import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/thank");
    };
  
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
