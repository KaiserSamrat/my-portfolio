import React from 'react';
import emailjs from 'emailjs-com';

const ContactDetails = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_j7beah7', 'template_895462k', e.target, 'user_UrfOAsonOBkwWSwc7DCcS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <form className='container ms-auto mt-5 col-md-6 contact' id='contact-area' onSubmit={sendEmail}>
                <h3 className='text-center'>Get in touch</h3>
                <div class="mb-3">
                    <label class="form-label"></label>
                    <input type="text" class="form-control" placeholder='Enter your name here' name="name" />

                </div>
                <div class="mb-3">
                    <label class="form-label"></label>
                    <input type="email" class="form-control" placeholder='Enter your email here' name="email" />

                </div>
                <div class="mb-3">
                    <label class="form-label"></label>
                    <input type="text" class="form-control" placeholder='Enter your subject here' name="subject" />

                </div>
                <div className='mb-3'>
                    <label ></label>

                    <textarea rows="4" cols="50" placeholder='Your Message' class="form-control" name="message">

                    </textarea>

                </div>

                <button type="submit" class="btn btn-success form-control">Send</button>
            </form>

        </div>
    );
};

export default ContactDetails;