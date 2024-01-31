import React, { useEffect } from "react";
import "../Home/internal.css";
import "../Home/mainstyle.css";

import "../Services/Service.css";
import Container from "../base/Container";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import $ from "jquery";
gsap.registerPlugin(ScrollTrigger);
const ServiceDesc = () => {
  useEffect(() => {
    // External script
    const fsScript = document.createElement("script");
    fsScript.src =
      "https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js";
    fsScript.async = true;
    fsScript.setAttribute("fs-cc-mode", "informational");
    document.body.appendChild(fsScript);

    // Your GSAP animation
    const tl = gsap.timeline({
      delay: 0.5,
      defaults: { duration: 0.2, ease: "power4.out" },
    });

    function progressUpdate() {
      let progress = Math.round(this.progress() * 99);
      document.querySelector(".loader_number").innerText = progress;
    }

    tl.to(".loader_bottom_bar", {
      width: "100%",
      duration: 2.7,
      onUpdate: progressUpdate,
      ease: "power4.out",
    }).set(".loader", {
      display: "none",
    });

    // Initialize Swiper
    const initSwiper = (selector, nextEl, prevEl) => {
      new Swiper(selector, {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl,
          prevEl,
          disabledClass: "is-disabled",
        },
      });
    };

    initSwiper(".fiverr", ".swiper-next", ".swiper-prev");
    initSwiper(".upwork", ".upwork-next", ".upwork-prev");

    // Append elements
    document.querySelectorAll(".span-wrapper").forEach((wrapper, index) => {
      const relatedEl = document.querySelectorAll(".span-element")[index];
      wrapper.appendChild(relatedEl);
    });

    // SVG color manipulation
    document.querySelectorAll(".logo__single svg path").forEach((path) => {
      const originalColor = path.getAttribute("fill");
      path.style.setProperty("--original-color", originalColor);
      path.setAttribute("fill", "currentColor");
    });

    // Cleanup function
    return () => {
      document.body.removeChild(fsScript);
    };
  }, []);

  useEffect(() => {
    let splitText;

    const runSplit = () => {
      splitText = new SplitType("[stagger-link]", {
        types: "words, chars",
      });
    };

    runSplit();

    // Update on window resize
    let windowWidth = window.innerWidth;
    const handleResize = () => {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        splitText.revert();
        runSplit();
      }
    };

    window.addEventListener("resize", handleResize);

    // Animation
    const staggerLinks = document.querySelectorAll("[stagger-link]");
    staggerLinks.forEach((link) => {
      const letters = link.querySelectorAll("[stagger-link-text] .char");
      const handleMouseEnter = () => {
        gsap.to(letters, {
          yPercent: -130,
          duration: 0.4,
          ease: "power4.inOut",
          stagger: { each: 0.025, from: "start" },
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(letters, {
          yPercent: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: { each: 0.025 },
          overwrite: true,
        });
      };

      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function
      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container
      title={"Services"}
      renderBody={() => (
        <>
          <section id="values" class="section">
            <div class="page-spacing__large">
              <div class="container-small">
                <div class="single__wrapper">
                  <div class="column-50 flex-vertical is-single-process">
                    <div class="single_process-sticky-heading hide-on-mobile">
                      <h1 className="about-heading">
                        Unique and reliable <br /> technology&nbsp;
                        <span className="blue-text">solutions</span> assured
                      </h1>
                      <div class="p-body lighter opacity-05 w-dyn-bind-empty"></div>
                    </div>
                  </div>
                  <div class="column-50 flex-vertical">
                    <div class="spacing-container-04 hide-on-mobile"></div>
                    <div class="spacing-container-04"></div>
                    <div class="spacing-container-04 hide-on-mobile"></div>
                    <div class="single-process-wrap">
                      <div class="single_process-sticky-heading hide-on-desktop">
                        <h1 className="about-heading">
                          Unique and reliable <br /> technology&nbsp;
                          <span className="blue-text">solutions</span> assured
                        </h1>
                        <div class="p-body lighter opacity-05 hide-on-mobile w-dyn-bind-empty"></div>
                      </div>
                      <div
                        data-w-id="6d58321c-4791-73a4-901a-c4abbbabd421"
                        class="single-service"
                      >
                        <div
                          data-scroll=""
                          class="single__process-item-wrapper bg--3"
                        >
                          <div class="single__process-number-wrap text-accent">
                            <div class="h3">01</div>
                          </div>
                          <div class="single__proces-content-holder">
                            <h3
                              style={{ color: "red" }}
                              class="p-leading text-3 is-bigger text-balance"
                            >
                              Target audience sizing
                            </h3>
                            <div
                              style={{ color: "blue" }}
                              class="p-body-normal line-height-1-2 lighter opacity-05 text-balance"
                            >
                              We analyze your solution and its use cases to
                              identify the perfect audience for your business so
                              we can then size up the audience
                            </div>
                          </div>
                          <div class="card-hider"></div>
                        </div>
                      </div>
                      <div class="single-service">
                        <div
                          data-scroll=""
                          class="single__process-item-wrapper bg--3"
                        >
                          <div class="single__process-number-wrap text-accent">
                            <div class="h3">02</div>
                          </div>
                          <div class="single__proces-content-holder">
                            <h3 class="p-leading is-bigger text-balance">
                              Revenue model analysis
                            </h3>
                            <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                              We dissect how your business generates cash from
                              its customers. Then we connect those findings to
                              size up the revenue potential across geographies
                              and customer segments
                            </div>
                          </div>
                          <div class="card-hider"></div>
                        </div>
                      </div>
                      <div class="single-service">
                        <div
                          data-scroll=""
                          class="single__process-item-wrapper bg--3"
                        >
                          <div class="single__process-number-wrap text-accent">
                            <div class="h3">03</div>
                          </div>
                          <div class="single__proces-content-holder">
                            <h3 class="p-leading is-bigger text-balance">
                              Competitive analysis
                            </h3>
                            <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                              Understanding the competitiveness in your niche
                              and all entry barriers is crucial when calculating
                              the obtainable market share (and SOM) of your
                              business.
                            </div>
                          </div>
                          <div class="card-hider"></div>
                        </div>
                      </div>
                      <div class="single-service">
                        <div
                          data-scroll=""
                          class="single__process-item-wrapper bg--3"
                        >
                          <div class="single__process-number-wrap text-accent">
                            <div class="h3">04</div>
                          </div>
                          <div class="single__proces-content-holder">
                            <h3 class="p-leading is-bigger text-balance">
                              Growth projections
                            </h3>
                            <div class="p-body-normal line-height-1-2 lighter opacity-05 text-balance">
                              In the end, we analyze the industry’s projected
                              growth rate and forecast your TAM, SAM, SOM, and
                              obtainable market share over the next 5 years.
                            </div>
                          </div>
                          <div class="card-hider"></div>
                        </div>
                      </div>
                      <div class="single-service w-condition-invisible">
                        <div
                          data-scroll=""
                          class="single__process-item-wrapper bg--3 w-condition-invisible"
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
                      <div class="single-service w-condition-invisible">
                        <div
                          data-scroll=""
                          class="single__process-item-wrapper bg--3 w-condition-invisible"
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
                      <div class="single-service w-condition-invisible">
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
                      <div class="single-service w-condition-invisible">
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
              </div>
            </div>
          </section>
        </>
      )}
    />
  );
};
export default ServiceDesc;
