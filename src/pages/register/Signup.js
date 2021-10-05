import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { Link } from "react-router-dom"
import "./signup.css"
export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPasword] = useState("")
    const [error, setError] = useState(false);
    const handSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/signin");
        } catch (err) {
            setError(true);
        }
    }
    return (
        <div className="signup">
            <span className="SignupTitle">SignUp</span>
            <form className="SignupForm" onSubmit={handSubmit}>
                <label>Username</label>
                <input type='text' className="SignupInput" placeholder="Enter your username.."
                    onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input type="text" className="SignupInput" placeholder="Enter your email"
                    onChange={(e) => SetEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" className="SignupInput" placeholder="password !!!"
                    onChange={(e) => SetPasword(e.target.value)} />
                <button className="SignupButton" type="submit">
                    SignUp
                </button>
            </form>
            {error && <span style={{ color: "red", margin: "10px" }}> Something went worng!</span>}
        </div>
    )
}
