const Footer = () => {
  return (
    <div className="footer-new">
      <div className="footer-content-row">
        <h3 className="text-3 nav_fontsize-54">
          Seeking Inspiration <br />
          for Activations?
          <br /> Let's Collaborate!
        </h3>

        <div className="text-2 text-balance spacing-top-04">We are social:</div>

        <div>
          <a
            className="text-2 text-balance text-blue"
            href="https://www.instagram.com/infinixinnovations?igsh=MXVqaHV2emVxdHRiZA%3D%3D&utm_source=qr"
            target="_blank"
          >
            Instagram
          </a>{" "}
          <span style={{ fontSize: 16 }} className="text-2 text-balance">
            &nbsp;/&nbsp;
          </span>{" "}
          <a
            className="text-2 text-balance text-blue"
            href="https://www.facebook.com/profile.php?id=61555398414386&mibextid=9R9pXO"
            target="_blank"
          >
            Facebook
          </a>
        </div>

        <a
          href="https://www.termsfeed.com/live/92952038-c087-42ad-8648-b0d9b07d85c2"
          target="_blank"
          className="text-2 p-small text-balance spacing-top-02"
        >
          Privacy Policy
        </a>
      </div>
      <div className="footer-content-row text-right-align">
        <h4>
          <a
            className="text-3 h3 line-height-1-1 text-blue"
            href="tel:971 567158879"
          >
            +971 56 715 8879
          </a>
        </h4>
        <h4>
          <a
            className="text-3 h3 line-height-1-1 text-blue"
            href="mailto:info@infinix.me"
          >
            info@infinix.me
          </a>
        </h4>
        <h3>
          <a
            className="address"
            href="https://maps.app.goo.gl/Pt4k5ko9j8bEnox69?g_st=ic"
            target="_blank"
          >
            Business Center 1,
          </a>
        </h3>
        <h5>
          <a
            className="p-body address"
            href="https://www.google.com/maps?q=LATITUDE,LONGITUDE"
            target="_blank"
          >
            M Floor, The Meydan Hotel,Nad Al Sheba, Dubai, U.A.E.
          </a>
        </h5>

        <div className="text-2 spacing-top-08">
          <p>©2024 infinix innovations L.L.C-FZ</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
