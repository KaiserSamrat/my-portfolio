import React from 'react';
import './Expertise.css'

const Expertise = () => {
    return (
        <div>
            <div className="container">
                <div className="row expertise">
                    <div className="col-md-3">
                        <h2 className='exp-title'>My Skills Set</h2>

                    </div>
                    <div className="col-md-7  mt-3 exp-details">
                        <h5>Programming language</h5>
                       <div className="">
                       <p className='expertise-button '>C</p>
                       <p className='expertise-button ms-2'>JavaScript</p>
                       <p className='expertise-button ms-2'>Python</p>
                       </div>
                       <h5>Designing Skills</h5>
                       <div className="">
                       <p className='expertise-button '>HTML5</p>
                       <p className='expertise-button ms-2'>CSS3</p>
                       <p className='expertise-button ms-2'>BOOTSTRAP4</p>
                       <p className='expertise-button ms-2'>Material UI</p>
                       </div>
                       <h5>FrameWork</h5>
                       <div className="">
                       <p className='expertise-button '>Node.js</p>
                       <p className='expertise-button ms-2'>Express.js</p>
                       <p className='expertise-button ms-2'>React</p>
                     
                       </div>
                       <h5>DataBase</h5>
                       <div className="">
                       <p className='expertise-button '>MongoDB</p>
                       <p className='expertise-button ms-2'>MySQL</p>
                       </div>
                       <h5>Tools</h5>
                       <div className="">
                       <p className='expertise-button '>Git</p>
                       <p className='expertise-button ms-2'>VS COde</p>
                       <p className='expertise-button ms-2'>Heroku</p>
                       <p className='expertise-button ms-2'>Netlify</p>
                       <p className='expertise-button ms-2'>Firebase</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;