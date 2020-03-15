import React from 'react'
import { Link, Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"



const HomePage = () => (
    <div className="jumbotron app" >
        <h1> Pluralsight Administration</h1>
        <p>React, Redux and React Router for ultra resposive web app</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more
        </Link>
    </div>
)

export default HomePage;