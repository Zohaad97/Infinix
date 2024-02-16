import "../Home/internal.css";
import "../Home/mainstyle.css";
import group_12 from "../assets/images/Group_12_1.png";
import background from "../assets/images/background.jpg";
import background_500 from "../assets/images/background-500.jpg";
import background_800 from "../assets/images/background-800.jpg";
import background_1080 from "../assets/images/background-1080.jpg";
import frame_1 from "../assets/images/Frame 1.png";
import Graphic_Elements from "../assets/images/Graphic_Elements.png";
import Graphic_Elements_1 from "../assets/images/Graphic_Elements (1).png";
import Circle from "../assets/images/Circle.png";
import { gsap, ScrollTrigger } from "gsap/all";
// import Swiper styles
import "swiper/css";
import "../About/About.css";
import Container from "../base/Container";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  return (
    <Container hideBackground title={"About"} renderSubtitle={() => <div className="about-desc">
      We specialize in crafting innovative technology solutions that amplify
      marketing activations, drawing attention tocyour campaignlike never before.
      Our goal is to empower your voice and ideas, ensuring they resonate louder
      and reach further in the ever-evolving landscape of immersive technologies.


    </div>
    } renderDescription={() => <h1 className="about-heading">
      OUR WINING <span className="blue-text">fORMULA</span> IS
    </h1>}

      renderBody={() => <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="about-image">

          <img src={group_12} alt="" />
          <div className="about-image-overlay">
            <span>
              <h5 className="about-value-text"> ENGINEERING</h5>

            </span>
            <span>
              <h5 className="about-value-text"> COLLABORATION</h5>

            </span>
            <span>
              <h5 className="about-value-text"> EXECUTION</h5>

            </span>
          </div>
        </div>
      </div>}


      renderExtra={() => <> <section style={{ zIndex: 2 }} className="container-medium single__wrapper ">
        <div className="approach-container space-top-10">
          <div className="approach-left">
            <h2 className="h2 humongus approach-heading">Approach</h2>
            <div className="approach-left-content">
              <img src={frame_1} alt="" />
              <h3 className="approach-title space-top-10">Our Commitment</h3>
              <div class="text-balance approach-desc space-top-10">
                Dedication is at the core of our team's ethos. We strive to be
                trendsetters in the event technology landscape, consistently
                delivering moments that leave a lasting impression on your
                audience.
              </div>
              <div
                data-w-id="581c9748-1d05-0e08-4e64-c932eb159c10"
                className="separator bg--1 opacity-02 seperator-about"
              ></div>
            </div>
            <div className="approach-left-content">
              <img src={Graphic_Elements} alt="" />
              <h3 className="approach-title space-top-10">
                What makes us Different
              </h3>
              <div class="text-balance approach-desc space-top-10">
                Offering flexible rental plans to meet specific requirements,
                ensuring a customized AV solution for every event. Quality
                Assurance and Vendor Connections: Ensuring reliability and
                efficiency by partnering with top-quality vendors, we provide
                excellence beyond just equipment, contributing to the success
                of your event.
              </div>
              <div
                data-w-id="581c9748-1d05-0e08-4e64-c932eb159c10"
                className="separator bg--1 opacity-02 space-top-10 seperator-about"
              ></div>
            </div>
            <div className="approach-left-content">
              <img src={Graphic_Elements_1} alt="" />
              <h3 className="approach-title space-top-10">
                Reliable Technology
              </h3>
              <div class="text-balance approach-desc space-top-10">
                For us, technology is not just a tool; it's a reliable partner
                for creating exceptional event experiences. Our team ensures
                every technical element adds value to your event, delivering a
                seamless experience.
              </div>
            </div>
          </div>

          <div className="approach-right is-single-process">
            <div style={{top:'20vh'}} className="single_process-sticky-heading">
              <img src={Circle} alt="" />
            </div>
          </div>
        </div>
      </section>
        <div
          style={{ top: "-20%", position: 'absolute' }}
          data-w-id="83518ac2-f205-f7c2-7dd0-8484af416ef0"
          className="gradient__image-wrapper"
        >
          <img
            src={background}
            loading="eager"
            sizes="(max-width: 479px) 100vw, 97vw"
            srcSet={`${background_500} 500w, ${background_800} 800w, ${background_1080} 1080w, ${background} 1200w`}
            alt=""
            className="gradient__image is-home-hero-right"
          />
        </div>

        <div
          style={{ top: "10%", position: 'absolute' }}
          data-w-id="83518ac2-f205-f7c2-7dd0-8484af416ef0"
          className="gradient__image-wrapper"
        >

          <img
            src={background}
            loading="eager"
            sizes="100vw"
            srcSet={`${background_500} 500w, ${background_800} 800w, ${background_1080} 1080w, ${background} 1200w`}
            alt=""
            className="gradient__image is-home-hero"
          />
        </div>
      </>
      }
    />
  )
};
export default About;
