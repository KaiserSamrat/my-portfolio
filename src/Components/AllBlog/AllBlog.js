import React from 'react';
import reactImg from '../../images/React.jpg'
import jsImg from '../../images/js.jpg'
import materialImg from '../../images/material.png'
const AllBlog = () => {
    return (
        <div className='container'>
             <div className="row blog-area mt-5 ">
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={reactImg} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title text-dark">Best Practices with React Hooks</h5>
                                <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={jsImg} alt="Card image cap" />
                            <div class="card-body blog-deatils">
                                <h5 class="card-title text-dark">JavaScript ES6 snippets</h5>
                                <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={materialImg} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title text-dark">Material UI introduction</h5>
                                <p class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AllBlog;