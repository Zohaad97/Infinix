import Navigation from "../Navigation/Navigation";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";

import group_12 from "../assets/images/Group_12_1.png";
import frame_1 from "../assets/images/Frame 1.png";
import Graphic_Elements from "../assets/images/Graphic_Elements.png";
import Graphic_Elements_1 from "../assets/images/Graphic_Elements (1).png";
import Circle from "../assets/images/Circle.png";
import "../About/About.css";

const About = () => {
  return (
    <>
      <Navigation />
      <div
        data-w-id="83518ac2-f205-f7c2-7dd0-8484af416ef0"
        className="gradient__image-wrapper"
      ></div>
      <section
        style={{ marginTop: "10%" }}
        class="section track__record logo-changer"
      >
        <div className="page-spacing__large is-track-record bg--4 radius-24">
          <div className="container-small">
            <div className="record-div bg--2">
              <h2 className="p-leading opacity-06">Projects</h2>
            </div>

            <h2 className="project-heading">
              Our Winning &nbsp;
              <span className="project-span">Formula &nbsp;</span>
              is
            </h2>

            <div className="p-body project-desc">
              We are obsessed with making the most of technology, putting it out
              there for people to have fun together in the most exciting way
              possible while playing immersive technologies.
            </div>
            <img src={group_12} alt="" />
          </div>

          <div className="approach-container space-top-10">
            <div className="approach-left">
              <h2 className="h2 approach-heading">Approach</h2>
              <div className="approach-left-content">
                <img src={frame_1} alt="" />
                <h3 className="h3 approach-heading space-top-10">
                  Our Commitment
                </h3>
                <div class="p-body text-balance approach-heading space-top-10">
                  Dedication is at the core of our team's ethos. We strive to be
                  trendsetters in the event technology landscape, consistently
                  delivering moments that leave a lasting impression on your
                  audience.
                </div>
                <div
                  data-w-id="581c9748-1d05-0e08-4e64-c932eb159c10"
                  className="separator bg--1 opacity-02 space-top-10 line"
                ></div>
              </div>
              <div className="approach-left-content">
                <img src={Graphic_Elements} alt="" />
                <h3 className="h3 approach-heading space-top-10">
                  What makes us Different
                </h3>
                <div class="p-body text-balance approach-heading space-top-10">
                  Offering flexible rental plans to meet specific requirements,
                  ensuring a customized AV solution for every event. Quality
                  Assurance and Vendor Connections: Ensuring reliability and
                  efficiency by partnering with top-quality vendors, we provide
                  excellence beyond just equipment, contributing to the success
                  of your event.
                </div>
                <div
                  data-w-id="581c9748-1d05-0e08-4e64-c932eb159c10"
                  className="separator bg--1 opacity-02 space-top-10 line"
                ></div>
              </div>
              <div className="approach-left-content">
                <img src={Graphic_Elements_1} alt="" />
                <h3 className="h3 approach-heading space-top-10 space-top-10">
                  Reliable Technology
                </h3>
                <div class="p-body text-balance approach-heading space-top-10">
                  For us, technology is not just a tool; it's a reliable partner
                  for creating exceptional event experiences. Our team ensures
                  every technical element adds value to your event, delivering a
                  seamless experience.
                </div>
              </div>
            </div>

            <div className="approach-right">
              <img src={Circle} alt="" />
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </>
  );
};
export default About;
