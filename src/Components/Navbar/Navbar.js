import React from 'react';
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
                <a class="nav-link active list ms-3 " aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-3 list" href="/allProject">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-3 list" href="/allBlog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-3 list" href="/contactDetail">Contact</a>
              </li>



            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;