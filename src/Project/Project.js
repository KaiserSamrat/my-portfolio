import React from 'react';
import './Project.css'
import projectImage from '../images/details.gif'

const Project = () => {
    return (
        <div className='mt-5 project container'>
            <div className="row">
                <div className="col-md-3">
                <h2 className='project-title'>My Projects</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-5">
                    
                    <img src={projectImage} alt="" className='img-fluid'/>

                </div>
                <div className="col-md-7">
                    <h4>Your Tutor</h4>
                    <p>This website is the best platform for the learning programming. It provides different courses of different programming language.Details information about this project is given below</p>
                    <ul>
                        <li>User can place Order, see order history, Update Order</li>
                        <li>Admin can add services, update the order of user.</li>
                        <li>User can login by using Google Sign-in option.</li>
                        <li>User can give the reviews about a service which will show in the home page</li>
                        <li>Alternative dashboard for user and admin</li>
                        <li></li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Project;