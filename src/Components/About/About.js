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
import infinicx_icon from "../assets/images/infinicx icon.png";
import MaskGroup from "../assets/images/Mask-group.png";
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
import Project from "../Projects/Project";
import "../About/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    function animateText(textClass, targetClass) {
      let textElements = document.querySelectorAll(textClass);
      let targetDiv = document.querySelector(targetClass);
      let endX = targetDiv.getBoundingClientRect().left;
      let endY =
        targetDiv.getBoundingClientRect().top + targetDiv.offsetHeight / 2;
      textElements.forEach((textToMove) => {
        let startX = textToMove.getBoundingClientRect().left;
        let startY = textToMove.getBoundingClientRect().top;
        let finalY = endY - textToMove.offsetHeight / 2;
        gsap.to(textToMove, {
          x: endX - startX,
          y: finalY - startY,
          scrollTrigger: {
            trigger: ".teleport-component",
            start: "2% top",
            end: "center top",
            scrub: 0.5,
          },
        });
      });
    }
    // Just call these once
    // animateText(".move-text-1", ".target-div-1");
    // animateText(".move-text-2", ".target-div-2");
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
            <div className="page-spacing__medium test">
              <div className="container-large hero-content">
                <div className="spacing-bottom-04-px is-track-record bg--2 radius-24">
                  <div className="about-container container-small is-track-record">
                    <div className="record-div bg--4">
                      <div className="record__heading-div">
                        <h2 className="p-leading opacity-06">About</h2>
                      </div>
                    </div>
                    <div className="">
                      <h1 className="about-heading">
                        Our Winning <span className="blue-text">formula</span>{" "}
                        is
                      </h1>

                      <div className="hide-this">
                        <div className="home-cta_span">
                          <div className="span-element">
                            <img
                              src={infinicx_icon}
                              loading="lazy"
                              data-w-id="4fc866e3-082c-1bfd-b8a2-f1a19295f086"
                              alt=""
                              className="home__hero-star"
                            />
                          </div>
                        </div>
                        <div className="home-cta_span2">
                          <div className="span-element">
                            <img
                              src={MaskGroup}
                              loading="eager"
                              data-w-id="53e6f3bd-abed-3d64-d7c3-502192f03ad0"
                              sizes="100vw"
                              alt=""
                              srcset="images/Mask group.png"
                              className="home-span-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about-desc">
                      We are obsessed with making the most of technology,
                      putting it out there for people to have fun together in
                      the most exciting way possible while playing immersive
                      technologies.
                    </div>
                    <img src={group_12} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="home-bg">
              <div className="home__hero-bg">
                <img
                  src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f2e2314ae531679cb2a32f_Cut-edge-white.svg"
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
                  }}
                  alt=""
                  className="cut-edge is-home-hero"
                />
                <a
                  href="#difference"
                  className="cut-edge is-home-hero home-mobile is-link w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/650ad622817c9f1e05d281c4_white-side.svg"
                    loading="lazy"
                    alt=""
                    className="cut-edge is-home-hero home-mobile"
                  />
                </a>
              </div>
            </div> */}
          </section>
        </div>

        <section className="section is-full logo-changer is-logos">
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
                  className="separator bg--1 opacity-02 line"
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
                  className="separator bg--1 opacity-02 space-top-10 line"
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

            <div className="approach-right">
              <img src={Circle} alt="" />
            </div>
          </div>
        </section>

        <div
          style={{ top: "-20%" }}
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
        <div className="nav">
          <div className="hidden-navigation">
            <div className="nav__wrapper">
              <div className="nav_top-wrapper">
                <a
                  stagger-link=""
                  data-scroll="start"
                  data-w-id="e2c41eac-496c-f159-1a57-a056f0741e2d"
                  href="/#"
                  className="nav_top-single-closer w-inline-block"
                >
                  <img
                    src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64e87091a9432f998933e04b_Nav-close.svg"
                    loading="lazy"
                    alt=""
                    className="image-41"
                  />
                  <div
                    stagger-link-text="pale-green"
                    className="nav-top-closer letter-spacing-0-5 line-height-1 p-body is-nav-closer"
                  >
                    close
                  </div>
                </a>
                <div className="nav_top-single">
                  <div className="p-body nav__top-text letter-spacing-0-5">
                    menu
                  </div>
                </div>
              </div>
              <div className="separator-footer bg--1 opacity-01"></div>
              <div className="nav_main-wrapper">
                <div className="nav_main-top-wrapper">
                  <a
                    stagger-link=""
                    href="/Services"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Services
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/resources"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Resources
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/About"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        About
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="/contact-us"
                    className="menu-link w-inline-block"
                  >
                    <div className="nav_main-text-wrapper">
                      <div
                        stagger-link-text="white"
                        className="h3 line-height-1"
                      >
                        Contact
                      </div>
                    </div>
                    <div className="nav_main-arrow">
                      <div className="nav-arrow w-embed">
                        <svg
                          width="0.9em"
                          height="0.9em"
                          viewBox="0 0 15 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.99998 0L14.166 0V12.1668H12.166V3.41432L1.70711 13.8739L0.292847 12.4597L10.7519 2L1.99998 2V0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="nav_main-bottom-wrapper">
                  <a
                    stagger-link=""
                    href="https://www.upwork.com/freelancers/hristodikov/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      UpWork
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="https://www.fiverr.com/dikovh"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      Fiverr
                    </div>
                  </a>
                  <a
                    stagger-link=""
                    href="https://www.linkedin.com/in/hristo-dikov/"
                    className="menu-link w-inline-block"
                  >
                    <div
                      stagger-link-text=""
                      className="p-body line-height-1 nav-link-bg"
                    >
                      Linkedin
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-scroll="start"
              data-w-id="e2c41eac-496c-f159-1a57-a056f0741e62"
              className="nav-overlay-closer"
            ></div>
          </div>
        </div>

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
export default About;
