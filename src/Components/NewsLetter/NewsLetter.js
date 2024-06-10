import { useState } from "react";
import RightArrow from "../assets/images/right-arrow.svg";
import { toast } from 'react-toastify';
const NewsLetter = () => {

  const [email, setEmail] = useState('')
  const [isLoading, setLoading] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    if (!validateForm()) {
      setLoading(false)
      return
    }

    fetch('https://infinix.me/mail/subscribe.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, }),
    })
      .then(() => {
        toast("Request sent successfully!")
        setLoading(false)
        setEmail('')
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false)
      });
  }



  const validateForm = () => {
    if (!email || !validateEmail(email)) {
      alert('Please enter a valid email.');
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
    <div className="blog__newsletter-wrapper is-home radius-16">
      <div className="container-medium" style={{ justifyContent: 'space-around', alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="newsletter__home-heading" style={{ width: '100%' }}>
          <div className="newsletter__heading-text">
            <h2 className="text-3 nav_fontsize-54 line-height-1-1">
              Don&#x27;t want to <br />
              miss anything?
            </h2>
          </div>
          <div className="newsletter__heading-text">
            <div className="p-body text-3 text-balance">
              Sign up for our newsletter to discover winning trends before your
              competition!
            </div>
          </div>
        </div>
        <div className="blog__newsletter-form">
          <div
            className="blog__newsletter-block w-form"
          >
            <form
              id="email-form"
              name="email-form"
              className="blog__newsletter-form"
            >
              <input
                className="blog__newsletter-field is-home w-input"
                maxlength="256"
                name="email"
                placeholder="Email Address"
                type="email"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="newsletter__button-wrapper is-home">
                <div
                  data-w-id="3c0b519a-a9a3-60c4-48e0-5d02c9bac54d"
                  className="newsletter-button-text text-3"
                >
                  {isLoading ? "Please wait..." : "Subscribe"}
                </div>
                <input
                  onClick={onSubmit}
                  type="submit"
                  disabled={isLoading}
                  className="newsletter__submit-button-inner line-height-1 w-button"
                  value={isLoading ? "Please wait..." : "Subscribe"}
                />
                <img
                  data-w-id="bd262f9d-3f0a-c3cc-1540-073a764f18d0"
                  loading="lazy"
                  alt=""
                  src={RightArrow}
                  className="newsletter__arrow rel"
                />
                <img
                  data-w-id="f919849e-39d4-53c8-64af-1f1f3e944daf"
                  loading="lazy"
                  alt=""
                  src={RightArrow}
                  className="newsletter__arrow ap"
                />
              </div>
            </form>
            <div className="is--adifico w-form-done">
              <div className="z-index-5 text-3 is-bold opacity-07 newsletter">
                Thank you! Your have joined our newsletter!
                <a
                  href="/#"
                  fs-formsubmit-element="reset"
                  className="newsletter-close text-3 underline-link is-ligher"
                >
                  Close
                </a>
              </div>
              <div className="success__message-bg opacity-06"></div>
            </div>
            <div className="newsletter-error w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
