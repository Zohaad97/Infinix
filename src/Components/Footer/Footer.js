import YoutubeIcon from "../assets/images/footer-youtube.svg"
import InstaIcon from "../assets/images/footer-instagram.png"
import FacebookIcon from "../assets/images/footer-facebook.png"
import YoutubeIconHover from "../assets/images/footer-youtube-hover.svg"
import InstaIconHover from "../assets/images/footer-instagram-hover.svg"
import FacebookIconHover from "../assets/images/footer-facebook-hover.svg"
import "./Footer.css"
const Footer = () => {
  return (
    <div className="footer-new container-medium">
      <div className="footer-content-row" >
        <div className="footer-item" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 className="text-3 nav_fontsize-54">
            Seeking Inspiration <br />
            for Activations?
            <br /> Let's Collaborate!
          </h3>
          <div className="social-icons-wrapper">
            <a
              className="text-2 text-balance text-blue"
              href="https://www.facebook.com/profile.php?id=61555398414386&mibextid=9R9pXO"
              target="_blank"
            >
              <div className="footer-social-icon">
                <img src={FacebookIcon} style={{ width: 17, height: 30 }} />
              </div>
            </a>
            <a
              className="text-2 text-balance text-blue"
              href="https://www.instagram.com/infinixinnovations?igsh=MXVqaHV2emVxdHRiZA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <div className="footer-social-icon">
                <img src={InstaIcon} style={{ width: 30, height: 30 }} />
              </div>
            </a>
            <a
              className="text-2 text-balance text-blue"
              href="https://youtube.com/@InfinixInnovations-hp1sv?si=5lHA0_yxThH9b08t"
              target="_blank"
            >
              <div className="footer-social-icon">
                <img src={YoutubeIcon} />
              </div>
            </a>
          </div>

        </div>

        <div  className="address footer-item" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>


          <h4>
            <a
              className="text-3 h3 line-height-1-1 text-blue"
              href="tel:971 567158879"
              style={{ whiteSpace: 'nowrap' }}
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
          <h4 style={{ marginTop: 10 }}>
            <a
              style={{ whiteSpace: 'nowrap' }}
              className="address"
              href="https://maps.app.goo.gl/Pt4k5ko9j8bEnox69?g_st=ic"
              target="_blank"
            >
              Business Center 1,
            </a>
          </h4>
          <h5 style={{ marginTop: 5 }}>
            <a
              style={{ whiteSpace: 'nowrap' }}
              className="p-body address"
              href="https://www.google.com/maps?q=LATITUDE,LONGITUDE"
              target="_blank"
            >
              M Floor, The Meydan Hotel,
            </a>

          </h5>
          <h5>
            <a
              style={{ whiteSpace: 'nowrap' }}
              className="p-body address"
              href="https://www.google.com/maps?q=LATITUDE,LONGITUDE"
              target="_blank"
            >
              Nad Al Sheba, Dubai, U.A.E.
            </a>
          </h5>
        </div>
      </div>
      <div  style={{ flex: 1 }} className="footer-content-row text-right-align" >
        <a
          style={{
            flex: 1, justifyContent: 'flex-start', display: 'flex', alignItems: 'center'
          }}
          href="https://www.termsfeed.com/live/92952038-c087-42ad-8648-b0d9b07d85c2"
          target="_blank"
          className="text-2 p-small text-balance footer-item"
        >
          Privacy Policy
        </a>

        <div  className="text-2 address footer-item" style={{ flex: 1, justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
          <p>©2024 infinix innovations L.L.C-FZ</p>
        </div>


      </div>

    </div >
  );
};
export default Footer;
