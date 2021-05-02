import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Expertise from '../Expertise/Expertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Expertise></Expertise>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;