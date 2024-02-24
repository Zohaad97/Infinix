import "../Home/internal.css";
import "../Home/mainstyle.css";
import "./Contact.css";
import { gsap, ScrollTrigger } from "gsap/all";
import "swiper/css";

import Container from "../base/Container";
import { toast } from 'react-toastify';
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    fetch('https://infinix.me/mail/send.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        toast("Request sent successfully!")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }



  const validateForm = () => {
    console.log({ email, })
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email.');
      return false;
    }
    if (!name) {
      alert('Please enter your name.');
      return false;
    }
    if (!message) {
      alert('Please enter a message.');
      return false;
    }
    return true;
  };

  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const alert = (message) => {
    toast(message, { type: 'error', autoClose: 3000 })
  }

  return (
    <Container
      hideBottomBackground
      title={"Contact Us"}
      renderBody={() => (
        <div className="contact-container">
          <div className="contact-left">
            <h1 className="contact-heading">
              We thought <br /> you’d never <br /> ask&nbsp;
              <span className="blue-text">Let’s talk</span>
            </h1>
            <div className="about-desc">
              Feel free to reach out! We're eager to hear your feedback, questions, and ideas. Get in touch via email, social media, or the form below.
            </div>
          </div>

          <div class="column-50 flex-vertical">
            <div>
              <form

                method="post"
              >
                <div class="footer__form-field-wrapper">
                  <input
                    class="footer__form-field w-input"
                    maxlength="256"
                    name="Name"
                    data-name="Name"
                    placeholder="Name*"
                    type="text"
                    id="Name-5"
                    required=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    class="footer__form-field w-input"
                    maxlength="256"
                    name="Email"
                    data-name="Email"
                    placeholder="Email*"
                    type="email"
                    id="Email-5"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    class="footer__form-field w-input phone"
                    maxlength="256"
                    name="Phone"
                    data-name="Phone"
                    placeholder="Phone"
                    type="tel"
                    id="Phone-3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <textarea
                    id="Message-3"
                    name="Message"
                    maxlength="5000"
                    data-name="Message"
                    placeholder="Your message*"
                    required=""
                    class="footer__form-field is-text w-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <div

                    class="footer__submit-button-wrapper"
                  >
                    <input
                      onClick={onSubmit}
                      type="submit"
                      data-wait="Please wait..."
                      class="footer__submit-button text-3 w-button"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    />
  );
};
export default Contact;
