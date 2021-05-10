import React from 'react';
import './Blog.css'
import reactImg from '../../images/React.jpg'
import jsImg from '../../images/js.jpg'
import InterviewImg from '../../images/js-interview.jpg'
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='mt-5 blog container'>
                <div className="row">
                    <div className="col-md-3">
                        <h2 className='Blog-title'>My Blogs</h2>
                    </div>
                    <div className='col-md-9'>
                        <Link to='/allBlog'><div className="btn project-btn">View all</div></Link>

                    </div>
                </div>
                <div className="row blog-area mt-5">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={jsImg} alt="Card image cap" />
                            <div class="card-body">
                                <a target="_blank" href='https://kaiser-samrat.medium.com/an-overview-of-javascript-basics-9aacf8efd3f7' className='blog-info'>
                                    <h5 class="card-title text-dark">An Overview of JavaScript Basics.</h5>
                                    <p class="card-text text-dark">JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.In this blog, I mainly write about some basic features of JavaScript.
                                    <br />
                                    Happy Reading!!</p>
                                </a>
                            </div>
                            {/* <div class="card-footer">
                               <button className="btn btn-dark">View</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={reactImg} alt="Card image cap" />
                            <div class="card-body blog-deatils">
                                <a target="_blank" href='https://kaiser-samrat.medium.com/basic-of-react-a-powerful-javascript-library-f60ff55889ad' className='blog-info'>
                                    <h5 class="card-title text-dark">Basics of React, A powerful JavaScript Library.</h5>
                                    <p class="card-text text-dark">The answer is React is a library, not a framework. The framework is very vast and has so many features.On the other hand, React library is very simple and light-weighted. </p>
                                </a>
                            </div>
                            {/* <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={InterviewImg} alt="Card image cap" />
                            <div class="card-body">
                                <a target="_blank" href="https://kaiser-samrat.medium.com/10-javascript-interview-question-you-need-to-know-8d89a47998cb"  className='blog-info'>
                                <h5 class="card-title text-dark">10 JavaScript Interview Question</h5>
                                <p class="card-text text-dark">In this blog, I tried to share 10 interview questions. You can get the idea of some programming related topic such as null vs undefined, difference between double equal and triple equal, difference between local scope and global scope...</p>
                                </a>
                            </div>
                            {/* <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blog;