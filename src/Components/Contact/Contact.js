import "../Home/internal.css";
import "../Home/mainstyle.css";
import "./Contact.css";
import { gsap, ScrollTrigger } from "gsap/all";
import "swiper/css";

import Container from "../base/Container";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  return (
    <Container
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
            <div class="w-form">
              <form
                id="wf-form-Contact-form"
                name="wf-form-Contact-form"
                data-name="Contact form"
                method="get"
                data-wf-page-id="652ab251b8dc5f55fea70f25"
                data-wf-element-id="dd55e6bb-92a3-3e99-6015-c3c57372d774"
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
                  />
                  <input
                    class="footer__form-field w-input phone"
                    maxlength="256"
                    name="Phone"
                    data-name="Phone"
                    placeholder="Phone"
                    type="tel"
                    id="Phone-3"
                  />

                  <textarea
                    id="Message-3"
                    name="Message"
                    maxlength="5000"
                    data-name="Message"
                    placeholder="Your message*"
                    required=""
                    class="footer__form-field is-text w-input"
                  ></textarea>
                  <div
                    data-w-id="3f146fd9-1078-aa91-a0fc-1dd29c24f774"
                    class="footer__submit-button-wrapper"
                  >
                    <input
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
