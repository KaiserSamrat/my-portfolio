import React from 'react';
import './Allproject.css'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'
const Allproject = () => {
    return (
        <div>
            <div className="container mt-5">
              
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                                <img src={project1} class="card-img-top single-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Your Tutor</h5>
                                    <p class="card-text text-dark">This is a online platform for learning programming where user can register for different courses. There are different dashboard for admin and user. User can also give their reviews after completing the course. Admin can add new courses and update the order status of the user  </p>
                                </div>
                                <div class="card-footer text-dark">
                                    <small class="text-muted"></small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={project2} class="card-img-top single-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">BookWorms</h5>
                                    <p class="card-text text-dark">It is a Online book sharing platform where people can sell/buy/exchange books by giving post. Users can share their thoughts on the blog platform. They can also chat with each other and comment on others post. User can purchase books using SSLCOMMERZ payment gateway.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={project3} class="card-img-top single-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Fantasy League</h5>
                                    <p class="card-text text-dark">This website contains all the information about the english premiere league teams. All the information is displayed by the fetching API. Each team details is dynamically showed by team's ID</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img src={project3} class="card-img-top single-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-dark">Fantasy League</h5>
                                    <p class="card-text text-dark">This website contains all the information about the english premiere league teams. All the information is displayed by the fetching API. Each team details is dynamically showed by team's ID</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Allproject;