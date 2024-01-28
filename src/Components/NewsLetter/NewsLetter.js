const NewsLetter = () => {
  return (
    <div className="blog__newsletter-wrapper is-home radius-16">
      <div className="container-small is-inner-related">
        <div className="newsletter__home-heading">
          <div className="newsletter__heading-text">
            <h2 className="text-3 h3 line-height-1-1">
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
            fs-formsubmit-enhance="true"
            fs-formsubmit-element="form"
            className="blog__newsletter-block w-form"
          >
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              action="https://assets.mailerlite.com/jsonp/614959/forms/100454619644167706/subscribe"
              method="post"
              className="blog__newsletter-form"
              data-wf-page-id="652ab251b8dc5f55fea70ec0"
              data-wf-element-id="bd262f9d-3f0a-c3cc-1540-073a764f18cc"
            >
              <input
                className="blog__newsletter-field is-home w-input"
                maxlength="256"
                name="fields[email]"
                data-name="fields[email]"
                placeholder="Email"
                type="email"
                id="fields[email]"
                required=""
              />
              <div className="newsletter__button-wrapper is-home">
                <div
                  data-w-id="3c0b519a-a9a3-60c4-48e0-5d02c9bac54d"
                  className="newsletter-button-text text-3"
                >
                  Subscribe
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  data-w-id="bd262f9d-3f0a-c3cc-1540-073a764f18cf"
                  className="newsletter__submit-button-inner line-height-1 w-button"
                  value="Subscribe"
                />
                <img
                  data-w-id="bd262f9d-3f0a-c3cc-1540-073a764f18d0"
                  loading="lazy"
                  alt=""
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e8667bfbbf04480e3205e2_Arrow-green.svg"
                  className="newsletter__arrow rel"
                />
                <img
                  data-w-id="f919849e-39d4-53c8-64af-1f1f3e944daf"
                  loading="lazy"
                  alt=""
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e8667bfbbf04480e3205e2_Arrow-green.svg"
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
