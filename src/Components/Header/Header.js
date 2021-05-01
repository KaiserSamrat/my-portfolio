import React from 'react';
import './Header.css'
import myImage from '../../images/1619778190617.jpg'

const Header = () => {
    return (
        <div class='header-area'>
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                       <img src={myImage} alt="" className='img-fluid img-area'/>
                       

                   </div>
                   <div className="col-md-6 info-area">
                      <h5 class='info'>Hello, I'm</h5>
                      <h2>Kaiser Samrat</h2>
                      <h3 class='info'>Front End Developer</h3>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque repellendus fugiat iusto placeat dignissimos quasi, iste omnis neque maiores reprehenderit. Harum recusandae omnis accusamus iure eum placeat ipsum sit maxime.</p>
                      <a class='hire-button' target='_blank' href="https://drive.google.com/file/d/1Ojlmhao-EYn2FEjl29d3FOryLumM7ktI/view?usp=sharing">Resume</a>

                   </div>
               </div>
           </div>
            
        </div>
    );
};

export default Header;