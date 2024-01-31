import "../Home/internal.css";
import "../Home/mainstyle.css";
import background from "../assets/images/background.jpg";
import background_500 from "../assets/images/background-500.jpg";
import background_800 from "../assets/images/background-800.jpg";
import background_1080 from "../assets/images/background-1080.jpg";

import site2 from "../assets/images/emaar-project.png";
import tehkom from "../assets/images/cop-project.png";
import sitee from "../assets/images/site-project.png";
import general from "../assets/images/general.png";
import { gsap, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import $ from "jquery";
import SplitType from "split-type";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import Navigation from "../Navigation/Navigation";
import Loader from "../Navigation/Loader/Loader";
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import "../About/About.css";
import "../Services/Service.css";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".page__wrap",
      { y: "0.3em" },
      {
        opacity: 1,
        y: "0em",
        duration: 0.3,
        ease: "power1.inOut",
      }
    );
    let tl = gsap.timeline({
      delay: 0.5,
      defaults: { duration: 0.2, ease: "power4.out" },
    });
    function progressUpdate() {
      let progress = Math.round(this.progress() * 99);
      $(".loader_number").text(progress);
    }
    tl.to(".loader_bottom_bar", {
      width: "100%",
      duration: 2.7,
      onUpdate: progressUpdate,
      ease: "power4.out", // Add your desired easing function here
    }).set(".loader", {
      display: "none",
    });

    document.addEventListener("DOMContentLoaded", function () {
      // Initialize Swiper
      var swiper = new Swiper(".fiverr", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: $(this).find(".swiper-next")[0],
          prevEl: $(this).find(".swiper-prev")[0],
          disabledClass: "is-disabled",
        },
      });
      // Initialize Swiper
      var swiper = new Swiper(".upwork", {
        effect: "cards",
        grabCursor: true,
        keyboard: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: $(this).find(".upwork-next")[0],
          prevEl: $(this).find(".upwork-prev")[0],
          disabledClass: "is-disabled",
        },
      });
      // Append elements
      $(".span-wrapper").each(function (index) {
        let relatedEl = $(".span-element").eq(index);
        relatedEl.appendTo($(this));
      });
      // SVG color manipulation
      document.querySelectorAll(".logo__single svg path").forEach((path) => {
        const originalColor = path.getAttribute("fill");
        path.style.setProperty("--original-color", originalColor);
        path.setAttribute("fill", "currentColor");
      });
    });
  });

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    window.onpageshow = function (event) {
      if (event.persisted) {
        window.scrollTo(0, 0);
        window.location.reload(true);
      }
    };
  }, []);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      // create svg elements
      $(".svg-code").each(function (index) {
        let svgCode = $(this).text();
        $(svgCode).insertAfter($(this));
      });

      const logoChangers = document.querySelectorAll(".logo-changer");

      // Loop through each .logo-changer element and create a ScrollTrigger for it
      logoChangers.forEach((logoChanger) => {
        ScrollTrigger.create({
          trigger: logoChanger,
          start: "top 3%",
          end: "bottom 10%",
          toggleClass: {
            targets: ".nav__logo-wrapper",
            className: "changed-logo",
          },
        });
      });

      // Split text into spans
      let typeSplit = new SplitType("[text-split]", {
        types: "lines, words, chars",
        tagName: "span",
      });

      // Link timelines to scroll position
      function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
          },
        });

        // Play tl when scrolled into view (60% from top of screen)
        ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onEnter: () => timeline.play(),
        });
      }
      $("[scrub-each-word]").each(function (index) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: $(this),
            start: "top 70%",
            end: "top 20%",
            scrub: 0.5,
          },
        });
        tl.from($(this).find(".char"), {
          opacity: 0.15,
          duration: 0.3,
          ease: "power1.out",
          stagger: { each: 0.4 },
        });
      });

      $("[letters-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), {
          yPercent: 130,
          duration: 0.9,
          ease: "power4.out",
          stagger: { amount: 0.3 },
        });
        createScrollTrigger($(this), tl);
      });

      // Avoid flash of unstyled content
      gsap.set("[text-split]", { opacity: 1 });

      // Copy footer mail
      window.withJquery = function () {
        console.time("time1");
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($(".is-mail-to-copy").text()).select();
        document.execCommand("copy");
        temp.remove();
        console.timeEnd("time1");
      };
    });
  }, []);

  useEffect(() => {
    let splitText;
    function runSplit() {
      splitText = new SplitType("[stagger-link]", {
        types: "words, chars",
      });
    }
    runSplit();

    // ————— Update on window resize
    let windowWidth = $(window).innerWidth();
    window.addEventListener("resize", function () {
      if (windowWidth !== $(window).innerWidth()) {
        windowWidth = $(window).innerWidth();
        splitText.revert();
        runSplit();
      }
    });

    // ————— animation
    const staggerLinks = document.querySelectorAll("[stagger-link]");
    staggerLinks.forEach((link) => {
      const letters = link.querySelectorAll("[stagger-link-text] .char");
      link.addEventListener("mouseenter", function () {
        gsap.to(letters, {
          yPercent: -130,
          duration: 0.4,
          ease: "power4.inOut",
          stagger: { each: 0.025, from: "start" },
          overwrite: true,
        });
      });
      link.addEventListener("mouseleave", function () {
        gsap.to(letters, {
          yPercent: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: { each: 0.025 },
          overwrite: true,
        });
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var buttons = document.getElementsByClassName("back-to-top");
      for (var i = 0; i < buttons.length; i++) {
        if (window.scrollY > 20) {
          buttons[i].style.display = "flex";
        } else {
          buttons[i].style.display = "none";
        }
      }
    });

    // Scroll to the top with a 2-second duration when any button is clicked
    var buttons = document.getElementsByClassName("back-to-top");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        scrollToTop(2000); // 2 seconds duration
      });
    }

    // Function to scroll to the top with a timing-based animation
    function scrollToTop(duration) {
      var start = window.pageYOffset;
      var startTime = performance.now();

      function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var elapsedTime = currentTime - startTime;

        window.scrollTo(
          0,
          easeInOutCubic(elapsedTime, start, -start, duration)
        );

        if (elapsedTime < duration) {
          requestAnimationFrame(scrollStep);
        }
      }

      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }

      requestAnimationFrame(scrollStep);
    }

    document.querySelectorAll(".w--current").forEach((el) => {
      let innerDiv = el.querySelector("[stagger-link-text]");
      if (innerDiv) {
        innerDiv.setAttribute("stagger-link-text", "orange");
      }
    });
  }, []);

  useEffect(() => {});

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  return (
    <div className="body">
      <div className="globals">
        <div className="w-embed"></div>
        {/* <!-- ------------------------------------------------------------------ NAVIGATION------------------------------------------------------------------ --> */}

        <Navigation />

        <Loader />

        {/* <!-- ------------------------------------------------------------------ BANNER------------------------------------------------------------------ --> */}
      </div>
      <main className="page__wrap">
        <div
          id="hero"
          tr-scrollflip-element="component"
          className="teleport-component"
        >
          <section
            tr-scrollflip-scrubstart="top top"
            className="section-about-page"
          >
            <div className="container-large hero-content">
              <div className="is-track-record bg--2 radius-24">
                <div className="about-container container-small is-track-record">
                  <div className="record-div bg--4">
                    <div className="record__heading-div">
                      <h2 className="p-leading opacity-06">Projects</h2>
                    </div>
                  </div>

                  <h1 className="about-heading">
                    Empower Your Activations with <br /> &nbsp;
                    <span className="blue-text">Engagement Driven</span>
                    Technology
                  </h1>

                  {/* ----------Projectss------------- */}
                  <div className="column-50 flex-vertical is-grid is-footer-grid space-top">
                    <a className="partner-item" href="/#">
                      <img src={site2} alt="partner" />
                      <h4 className="project-heading4">
                        Emaar Properties <br />
                        <span className="project-desc">
                          Interactive LED Floor, Property Launch Event
                        </span>
                      </h4>

                      <div className="view-button">View</div>
                    </a>

                    <a className="partner-item" href="/#">
                      <img src={tehkom} alt="Tehkom" />
                      <h4 className="project-heading4">
                        COP 28
                        <br />
                        <span className="project-desc">
                          Dynamic Motion Wall, Rextos Dubai Hotel
                        </span>
                      </h4>

                      <div className="view-button">View</div>
                    </a>
                    <a className="partner-item" href="/#">
                      <img src={sitee} alt="Sitee" />
                      <h4 className="project-heading4">
                        Site <br />
                        <span className="project-desc">
                          Innovative presentations, GITEX 2023
                        </span>
                      </h4>

                      <div className="view-button">View</div>
                    </a>
                    <a className="partner-item" href="/#">
                      <img src={general} alt="General" />
                      <h4 className="project-heading4">
                        GE Health Care
                        <br />
                        <span className="project-desc">
                          Rotating Platform, Arab health 2023
                        </span>
                      </h4>

                      <div className="view-button">View</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          style={{ top: "40%" }}
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
          <img
            src={background}
            loading="eager"
            sizes="100vw"
            srcSet={`${background_500} 500w, ${background_800} 800w, ${background_1080} 1080w, ${background} 1200w`}
            alt=""
            className="gradient__image is-home-hero"
          />
        </div>
        <section className="section is-full logo-changer in-home is-8">
          <div className="related_section radius-36">
            <div className="page-spacing__medium is-related-articles">
              <NewsLetter />

              <Footer />
            </div>
          </div>
        </section>
      </main>
      <div
        data-w-id="25b693c8-060d-6dbd-c653-6e06b7aa6b3c"
        className="addifico-sory"
      >
        <div
          data-w-id="fdfe489e-a551-9649-4a12-07e994d853d5"
          className="addifico-story p-body"
        >
          <em>Infinix </em>
          <span className="opacity-05">
            - Market Insights
            <em>that make aDifference</em>
          </span>
        </div>
      </div>
      <div
        data-w-id="8b82cde6-841a-9fdc-1c1d-2e0f3243441e"
        style={{
          opacity: 0,
        }}
        className="page-loader"
      >
        <div className="loader__inner">
          <div className="loader__content-wrapper">
            <div className="column-50 is-home-loader">
              <div className="loader_changing-content left">
                <div
                  data-w-id="da1b112b-1394-6cd9-f561-dbe42e1bd39d"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="h2 text-right text-3 opacity-05 line-height-1-5"
                >
                  we
                </div>
              </div>
            </div>
            <div className="column-50 is-home-loader">
              <div className="loader_changing-content">
                <div
                  data-w-id="78bf62d3-ad4e-1ca2-a097-dfd5f0ff7a7d"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 33%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="loader_changing-inner"
                >
                  <div className="h2 text-left text-3 line-height-1-5">
                    analyze
                  </div>
                  <div className="h2 text-left text-3 line-height-1-5">
                    build
                  </div>
                  <div className="h2 text-left text-3 line-height-1-5">
                    grow
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loader-cut">
            <img
              src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650167bcb96ab5cdf6c1a8ae_Sidecut.svg"
              loading="lazy"
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                msTransform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(0, 0, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                width: "8em",
                height: "8em",
              }}
              data-w-id="38085e0b-5756-9c0c-5b33-358fa5b5c14f"
              alt=""
              className="loader__image"
            />
            <div className="loader__numbers">
              <div
                data-w-id="dceac674-3e6e-12cd-713b-12e22152d84b"
                style={{
                  opacity: 0,
                  WebkitTransform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="loader_number h3 text-left is-home"
              >
                99
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="globals">
        <div className="w-embed"></div>

        <div fs-cc="banner" className="cookie-banner">
          <div className="cookie__policy-inner">
            <div className="lottie-wrapper">
              <div
                data-w-id="4f9d4498-162d-967f-5ef7-9caefe7eee86"
                data-animation-type="lottie"
                data-src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650c0b0847b5d025005f6823_Cookie.json"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="20.02001920458794"
                data-duration="0"
              ></div>
            </div>
            <div className="cookie__text-wrapper">
              <h3 className="p-body">
                Hi! Cookies for vibes, emails by choice. Opt-in for news, ok?
              </h3>
              <div className="cookie__button-wrapper">
                <a
                  stagger-link=""
                  href="/https://www.upwork.com/freelancers/hristodikov/"
                  target="_blank"
                  className="close-button-redirect w-inline-block"
                >
                  <div
                    stagger-link-text="cookie"
                    className="p-body-normal text-leave underline-link is-cookie"
                  >
                    Leave website
                  </div>
                </a>
                <a
                  fs-cc="close"
                  stagger-link=""
                  href="/#"
                  className="close-button w-inline-block"
                >
                  <div
                    stagger-link-text=""
                    className="p-body-normal text-accent underline-link is-cookie"
                  >
                    Accept &amp; Close
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="globals">
        <div className="w-embed"></div>

        <Loader />

        <div fs-cc="banner" className="cookie-banner">
          <div className="cookie__policy-inner">
            <div className="lottie-wrapper">
              <div
                data-w-id="4f9d4498-162d-967f-5ef7-9caefe7eee86"
                data-animation-type="lottie"
                data-src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650c0b0847b5d025005f6823_Cookie.json"
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="20.02001920458794"
                data-duration="0"
              ></div>
            </div>
            <div className="cookie__text-wrapper">
              <h3 className="p-body">
                Hi! Cookies for vibes, emails by choice. Opt-in for news, ok?
              </h3>
              <div className="cookie__button-wrapper">
                <a
                  href="/#"
                  stagger-link=""
                  target="blank"
                  className="close-button-redirect w-inline-block"
                >
                  <div
                    stagger-link-text="cookie"
                    className="p-body-normal text-leave underline-link is-cookie"
                  >
                    Leave website
                  </div>
                </a>
                <a
                  fs-cc="close"
                  stagger-link=""
                  href="/#"
                  className="close-button w-inline-block"
                >
                  <div
                    stagger-link-text=""
                    className="p-body-normal text-accent underline-link is-cookie"
                  >
                    Accept &amp; Close
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
