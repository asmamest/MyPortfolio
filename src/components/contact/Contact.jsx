import React, { useState } from "react";
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_8ucazfb',  
            'template_spdqhte',  
            formData,
            'O4UYH-yLr9yuDaVI3'      
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
        }, (err) => {
            console.log('FAILED...', err);
            alert("Failed to send message, please try again.");
        });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">
                Get In Touch
            </h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">
                        Let's talk about everything!
                    </h3>

                    <p className="contact__details">
                    Don't like forms? Send me an email. 👋
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input 
                                type="text" 
                                className="contact__form-input" 
                                placeholder="Insert your name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__form-div">
                            <input 
                                type="email" 
                                className="contact__form-input" 
                                placeholder="Insert your email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                            <input 
                                type="text" 
                                className="contact__form-input" 
                                placeholder="Insert your subject" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                    </div>

                    <div className="contact__form-div">
                        <textarea 
                            cols="30" 
                            rows="10" 
                            className="contact__form-input" 
                            placeholder="Write your message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
