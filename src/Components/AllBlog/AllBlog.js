import React from 'react';
import reactImg from '../../images/React.jpg'
import jsImg from '../../images/js.jpg'
import InterviewImg from '../../images/js-interview.jpg'
const AllBlog = () => {
    return (
        <div className='container'>
             <div className="row blog-area mt-5 ">
                    <div className="col-md-4">
                        <div class="card">
                        <img class="card-img-top" src={jsImg} alt="Card image cap" />
                            <div class="card-body blog-deatils">
                                <a target="_blank" href='https://kaiser-samrat.medium.com/basic-of-react-a-powerful-javascript-library-f60ff55889ad' className='blog-info'>
                                    <h5 class="card-title text-dark">Basics of React, A powerful JavaScript Library.</h5>
                                    <p class="card-text text-dark">The answer is React is a library, not a framework. The framework is very vast and has so many features.On the other hand, React library is very simple and light-weighted. </p>
                                </a>
                            </div>
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
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AllBlog;