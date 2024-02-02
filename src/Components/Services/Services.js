import React from "react";
import "../Home/internal.css";
import "../Home/mainstyle.css";

import "../Services/Service.css";
import Container from "../base/Container";
import { gsap, ScrollTrigger } from "gsap/all";
import layer_1_3 from "../assets/images/Vector.svg";
import v_rentals from "../assets/images/V Rentals.svg";
import programming from "../assets/images/programming.svg";
import Interactive_Installation from "../assets/images/Interactive_Installation.svg";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  return (
    <Container
      title={"Services"}
      renderBody={() => (
        <>
          <section id="values" class="section">
            <div class="single__wrapper">
              <div class="column-50 flex-vertical is-single-process">
                <div className="single_process-sticky-heading">
                  <h1 style={{ lineHeight: "1.1" }} className="about-heading">
                    Your biggest business challenges.
                    <br />
                    <span className="blue-text">Solved.</span>
                  </h1>
                  <div class="p-body lighter opacity-05 w-dyn-bind-empty"></div>
                </div>
              </div>
              <div class="column-50 flex-vertical">
                <div class="single-process-wrap">
                  <div
                    data-w-id="6d58321c-4791-73a4-901a-c4abbbabd421"
                    className="single-service"
                  >
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper background-service"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div
                          data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                          className="service__single-image-wrap service-heading-wrapper"
                        >
                          <img src={layer_1_3} alt="service" />
                          <h3 class="h2 text-balance">
                            Immersive Art Installation
                          </h3>
                        </div>
                      </div>

                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Innovative Hardware Focus
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Kinetic structures and mechatronics redefine our
                          approach to immersive art installations, introducing
                          cutting-edge technology into the creative process.
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Thematic Design & Tech-Driven Interaction
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Tailored installations dynamically respond to event
                          themes, incorporating state-of-the-art hardware with
                          sensor-responsive elements for a captivating and
                          immersive experience.
                        </div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper background-service"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div
                          data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                          className="service__single-image-wrap service-heading-wrapper"
                        >
                          <img src={Interactive_Installation} alt="service" />
                          <h3 class="h2 text-balance">
                            Interactive Installation
                          </h3>
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Precision-Crafted Experiences
                        </h3>
                        <div class="p-body-normal service-desc line-height-1-2 lighter text-balance">
                          Demonstrating expertise in crafting interactive
                          installations tailored for impactful presentations at
                          events. These installations bring dynamic interaction
                          options to your presentations, enhancing engagement
                          and leaving a lasting impression.
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Cutting-edge Technology
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Leveraging advanced technologies to ensure memorable
                          and innovative presentations. Our interactive
                          installations provide a sophisticated platform to
                          showcase your services and products with creativity
                          and effectiveness.
                        </div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper background-service"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div
                          data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                          className="service__single-image-wrap service-heading-wrapper"
                        >
                          <img src={programming} alt="service" />
                          <h3 class="h2 text-balance">Programming & Gaming</h3>
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Engaging Experience
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Delivering technically robust gaming activations and
                          applications tailored for events and exhibitions,
                          captivating audiences with immersive and interactive
                          content.
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Multi-platform Innovation
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Offering cost-effective solutions that go beyond
                          conventional websites and mobile apps, our
                          applications and games are designed for diverse
                          platforms, ensuring a tailored and impactful
                          experience in event and exhibition settings.
                        </div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper background-service"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div
                          data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                          className="service__single-image-wrap service-heading-wrapper"
                        >
                          <img src={v_rentals} alt="service" />
                          <h3 class="h2 text-balance">Audio Visual Rentals</h3>
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Technically Superior Solution
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Delivering top-notch audio-visual equipment for an
                          unparalleled event experience.
                        </div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading service-heading is-bigger text-balance">
                          Tailored Options
                        </h3>
                        <div class="p-body-normal line-height-1-2 lighter service-desc text-balance">
                          Offering flexible rental plans to meet specific
                          requirements, ensuring a customized AV solution for
                          every event. Quality Assurance and Vendor Connections:
                          Ensuring reliability and efficiency by partnering with
                          top-quality vendors, we provide excellence beyond just
                          equipment, contributing to the success of your event.
                        </div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service w-condition-invisible">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper background-service w-condition-invisible"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div class="h3">05</div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading is-bigger text-balance w-dyn-bind-empty"></h3>
                        <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance w-dyn-bind-empty"></div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service w-condition-invisible">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper background-service w-condition-invisible"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div class="h3">06</div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading is-bigger text-balance w-dyn-bind-empty"></h3>
                        <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance w-dyn-bind-empty"></div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service w-condition-invisible">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper bg--3 w-condition-invisible"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div class="h3">07</div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading is-bigger text-balance w-dyn-bind-empty"></h3>
                        <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance w-dyn-bind-empty"></div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div className="single-service w-condition-invisible">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper bg--3 w-condition-invisible"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div class="h3">08</div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading is-bigger text-balance w-dyn-bind-empty"></h3>
                        <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance w-dyn-bind-empty"></div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                  <div class="single-service w-condition-invisible">
                    <div
                      data-scroll=""
                      class="single__process-item-wrapper bg--3 single-serive w-condition-invisible"
                    >
                      <div class="single__process-number-wrap text-accent">
                        <div class="h3">09</div>
                      </div>
                      <div class="single__proces-content-holder">
                        <h3 class="p-leading is-bigger text-balance w-dyn-bind-empty"></h3>
                        <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance w-dyn-bind-empty"></div>
                      </div>
                      <div class="card-hider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    />
  );
};
export default Services;
