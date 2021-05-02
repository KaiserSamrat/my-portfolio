import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <form className='container ms-auto mt-5 col-md-6 contact'>
                <h3 className='text-center'>Get in touch</h3>
                <div class="mb-3">
                    <label class="form-label"></label>
                    <input type="name" class="form-control" placeholder='Enter your name here' />

                </div>
                <div class="mb-3">
                    <label class="form-label"></label>
                    <input type="email" class="form-control" placeholder='Enter your email here' />

                </div>
                <div className='mb-3'>
                    <label ></label>

                    <textarea rows="4" cols="50" placeholder='Your Message' class="form-control">

                    </textarea>

                </div>

                <button type="submit" class="btn btn-success form-control">Send</button>
            </form>

        </div>
    );
};

export default Contact;