import React from 'react'
import './Contact.css';
import contactImg from '../img/about-9.jpg'

export default function Contact() {
  return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p style={{textAlign:'left'}} className="hire__text white">I'd be delighted to set aside some time for you. And I'm available <br/>if you'd want to have a chat with me about developing a solution <br/>for you. Let's talk about your future together. <br/>I am available for freelance work. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+9476 446 5200</strong> or email <strong>kavisha.contactme@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
  )
}
