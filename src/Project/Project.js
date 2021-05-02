import React from 'react';
import './Project.css'
import projectImage from '../images/details.gif'
import gitImg from '../images/gti.png'

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
                <div className="col-md-6 ms-4">
                    <h4 className='project-name'>Your Tutor</h4>
                    <p className='project-details'>This website is the best platform for the learning programming. It provides different courses of different programming language.Details information about this project is given below</p>
                    <ul>
                        <li>User can place Order, see order history, Update Order</li>
                        <li>Admin can add services, update the order of user.</li>
                        <li>User can login by using Google Sign-in option.</li>
                        <li>User can give the reviews about a service which will show in the home page</li>
                        <li>Alternative dashboard for user and admin</li>
                       
                    </ul>
                    <h4>Technology:</h4>
                    <div className="">
                       <p className='expertise-button '>HTML5</p>
                       <p className='expertise-button ms-2'>CSS3</p>
                       <p className='expertise-button ms-2'>BOOTSTRAP4</p>
                       <p className='expertise-button ms-2'>JavaScript</p>
                       <p className='expertise-button ms-2'>React</p>
                       <p className='expertise-button ms-2'>Express.Js</p>
                       <p className='expertise-button'>Node.js</p>
                       <p className='expertise-button ms-2'>MongoDB</p>
                       </div>
                       <div>
                            <a href="https://github.com/KaiserSamrat/Online-Learning-Platform-Client"  target='_blank'  className='Live-btn me-2'>Live Demo</a>
                           <a href="https://your-tutor-c52de.web.app/"  target='_blank'  className='git-btn'>Github</a>
                       </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-3">
                    
                </div>
            </div>


        </div>
    );
};

export default Project;