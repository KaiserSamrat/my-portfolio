import React from 'react';
import './Project.css'
import projectImage from '../../images/learning.gif'
import BookImage from '../../images/book.gif'





const Project = () => {
    return (
        <div className='mt-5 container'>
            <div className="row">
                <div className="col-md-3">
                    <h2 className='project-title'>My Projects</h2>
                </div>
            </div>
            <div className="row project">
                <div className="col-md-6">

                    <img src={projectImage} alt="" className='img-fluid project-img' />

                </div>
                <div className="col-md-6 ">
                    <h4 className='project-name'>Your Tutor</h4>
                    <p className='project-details'>This website is the best platform for the learning programming. It provides different courses of different programming language.Details information about this project is given below</p>
                    <ul>
                        <li>User can place Order, see order history, Update Order</li>
                        <li>Admin can add services, update the order of user.</li>
                        <li>User can login by using Google Sign-in option.</li>
                        <li>User can give the reviews about a service which will show in the home page</li>
                        <li>Alternative dashboard for user and admin</li>

                    </ul>
                    <h4>Used Stack:</h4>
                    <div className="">
                        <p className='expertise-button '>HTML5</p>
                        <p className='expertise-button ms-2'>CSS3</p>
                        <p className='expertise-button ms-2'>BOOTSTRAP4</p>
                        <p className='expertise-button ms-2'>JavaScript</p>
                        <p className='expertise-button ms-2'>React</p>
                        <p className='expertise-button '>Express.Js</p>
                        <p className='expertise-button ms-2'>Node.js</p>
                        <p className='expertise-button ms-2'>MongoDB</p>
                    </div>
                    <div>
                        <a href="https://your-tutor-c52de.web.app/" target='_blank' className='Live-btn me-2'>Live Demo</a>
                        <a href="https://github.com/KaiserSamrat/Online-Learning-Platform-Client" target='_blank' className='git-btn'>Github</a>
                    </div>
                </div>
            </div>
            <div className="row project">
                <div className="col-md-6 ms-4">
                    <h4 className='project-name'>BookWorms (Online Book Sharing Platform)</h4>
                    <p className='project-details'>It is a Online book sharing platform where people can sell/buy/exchange books by giving post. Users can also share their thoughts on the blog platform</p>
                    <ul>
                        <li>Users can Buy/Sell/Rent/Exchange Books.</li>
                        <li>User can purchase books by using SSLCOMMERZ payment gateway.</li>
                        <li>User can chat with others.</li>
                        <li>User can give the reviews about a service which will show in the home page</li>
                        <li>Post/comment option in blog platform.</li>

                    </ul>
                    <h4>Used Stack:</h4>
                    <div className="">
                        <p className='expertise-button '>HTML5</p>
                        <p className='expertise-button ms-2'>CSS3</p>
                        <p className='expertise-button ms-2'>BOOTSTRAP4</p>
                        <p className='expertise-button ms-2'>JavaScript</p>
                        <p className='expertise-button ms-2'>Python</p>
                        <p className='expertise-button '>Django</p>
                        <p className='expertise-button ms-2'>MySQL</p>
                        <p className='expertise-button ms-2'>Redis</p>
                    </div>
                    <div>
                       
                        <a href="https://github.com/KaiserSamrat/BookWormsWeb/tree/master/BookWormsWeb" target='_blank' className='git-btn'>Github</a>
                    </div>
                </div>
                <div className="col-md-5">
                <img src={BookImage} alt="" className='img-fluid project-img' />
                </div>
            </div>


        </div>
    );
};

export default Project;