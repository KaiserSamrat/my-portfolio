import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div class='container'>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <a class="navbar-brand my-name" href="/">Kaiser</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active list ms-3 " aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-3 list" to="/allProject">Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-3 list" to="/allBlog">Blog</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link ms-3 list" to="/contactDetail">Contact</Link>
              </li>



            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;