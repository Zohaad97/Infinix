import "../Home/internal.css";
import "../Home/mainstyle.css";

import layer_1_3 from "../assets/images/Vector.svg";
import Arrow_1 from "../assets/images/Arrow_1.png";
import v_rentals from "../assets/images/V Rentals.svg";
import programming from "../assets/images/programming.svg";
import Interactive_Installation from "../assets/images/Interactive_Installation.svg";

import "../Services/Service.css";
import Container from "../base/Container";

const Services = () => {
  return (
    <Container
      title={"Services"}
      renderDescription={() => (
        <h1 className="about-heading">
          Unique and reliable <br /> technology &nbsp;
          <span className="blue-text">solutions</span> assured
        </h1>
      )}
      renderBody={() => (
        <div className="services-sticky space-service">
          <div className="services-track">
            <div className="services__wrapper">
              <div className="w-dyn-list">
                <div role="list" className="service__slider w-dyn-items">
                  <div role="listitem" className="service-item w-dyn-item">
                    <a
                      data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                      href="/services/market-trends-analysis"
                      className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                    >
                      <div
                        data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                        className="service__single-image-wrap"
                      >
                        <img src={layer_1_3} alt="service" />
                      </div>
                      <div
                        data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                        className="service__single-text-block"
                      >
                        <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                          Immersive Art Installation
                        </h3>
                        <div className="service_single-small-wrapper">
                          <div className="p-small text-4 is-bigger is-services-tablet">
                            Demonstrating expertise in crafting interactive
                            installations tailored for impactful presentations
                            at events. These installations bring dynamic
                            interaction options to your presentations, enhancing
                            engagement and leaving a lasting impression.
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                        loading="lazy"
                        alt=""
                        className="cut-edge top-right is-services"
                      />
                      <div className="service__single-wrapper-bg">
                        <div
                          data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                          className="service__single-bg bg-accent"
                        ></div>
                      </div>
                      <div
                        data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                        className="service__single-arrow w-embed"
                      >
                        <img src={Arrow_1} alt="" />
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="service-item w-dyn-item">
                    <a
                      data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                      href="/services/customer-research"
                      className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                    >
                      <div
                        data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                        className="service__single-image-wrap"
                      >
                        <img src={Interactive_Installation} alt="service" />
                      </div>
                      <div
                        data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                        className="service__single-text-block"
                      >
                        <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                          Interactive Installation
                        </h3>
                        <div className="service_single-small-wrapper">
                          <div className="p-small text-4 is-bigger is-services-tablet">
                            Kinetic structures and mechatronics redefine our
                            approach to immersive art installations, introducing
                            cutting-edge technology into the creative process.
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                        loading="lazy"
                        alt=""
                        className="cut-edge top-right is-services"
                      />
                      <div className="service__single-wrapper-bg">
                        <div
                          data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                          className="service__single-bg bg-accent"
                        ></div>
                      </div>
                      <div
                        data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                        className="service__single-arrow w-embed"
                      >
                        <img src={Arrow_1} alt="" />
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="service-item w-dyn-item">
                    <a
                      data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                      href="/services/market-sizing-and-forecasting"
                      className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                    >
                      <div
                        data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                        className="service__single-image-wrap"
                      >
                        <img src={programming} alt="service" />
                      </div>
                      <div
                        data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                        className="service__single-text-block"
                      >
                        <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                          Programming & Gaming
                        </h3>
                        <div className="service_single-small-wrapper">
                          <div className="p-small text-4 is-bigger is-services-tablet">
                            Delivering technically robust gaming activations and
                            applications tailored for events and exhibitions,
                            captivating audiences with immersive content.
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                        loading="lazy"
                        alt=""
                        className="cut-edge top-right is-services"
                      />
                      <div className="service__single-wrapper-bg">
                        <div
                          data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                          className="service__single-bg bg-accent"
                        ></div>
                      </div>
                      <div
                        data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                        className="service__single-arrow w-embed"
                      >
                        <img src={Arrow_1} alt="" />
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="service-item w-dyn-item audio-service"
                >
                  <a
                    data-w-id="52d8cbef-9526-9dca-e171-165f7a27a1cc"
                    href="/services/market-sizing-and-forecasting"
                    className="single-service-wrapper bg--3 radius-16 radius-24 w-inline-block"
                  >
                    <div
                      data-w-id="54dc9481-d76e-7894-29d5-a73a0322b026"
                      className="service__single-image-wrap"
                    >
                      <img src={v_rentals} alt="service" />
                    </div>
                    <div
                      data-w-id="6a575794-c216-6f9f-0477-527f51640c02"
                      className="service__single-text-block"
                    >
                      <h3 className="p-leading line-height-1-1 is-service-single-text text-balance">
                        Audio Visual Rentals
                      </h3>
                      <div className="service_single-small-wrapper">
                        <div className="p-small text-4 is-bigger is-services-tablet">
                          Delivering top-notch audio-visual equipment for an
                          unparalleled event experience.
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f32f6bda170853c4dea2_VectorTest.svg"
                      loading="lazy"
                      alt=""
                      className="cut-edge top-right is-services"
                    />
                    <div className="service__single-wrapper-bg">
                      <div
                        data-w-id="20aa7ea5-0a72-b658-1a07-1534c6e36f3d"
                        className="service__single-bg bg-accent"
                      ></div>
                    </div>
                    <div
                      data-w-id="fd334e19-8828-bb58-a856-8e50d2e6adda"
                      className="service__single-arrow w-embed"
                    >
                      <img src={Arrow_1} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      renderExtra={() => (
        <div className="quest-container">
          <div className="quest-text">Not seeing what you are looking for?</div>
          <div
            data-w-id="a4d4e9df-7f74-ec3b-40f4-c50318097d80"
            className="button-outter services"
          >
            <a href="/contact-us" className="new-buttonn w-inline-block">
              <div className="black-background blue-background"></div>
              <div className="items-wrapper">
                <div className="text-rotaotr">
                  <div className="text-2">Request service</div>
                </div>

                {/* <div className="circle-wrapper move-right text-2">
                <div className="circle white-background"></div>
              </div> */}
              </div>
            </a>
          </div>
        </div>
      )}
    />
  );
};
export default Services;
