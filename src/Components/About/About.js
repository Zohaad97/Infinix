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
import NewsLetter from "../NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
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

  useEffect(() => { });

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


        <Navigation />


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
              <div className="container-large about-content">
                <div className="spacing-bottom-04-px is-track-record bg--2 radius-24">
                  <div className="about-container container-small is-track-record">
                    <div className="record-div bg--4">
                      <div className="record__heading-div">
                        <h2 className="p-leading opacity-06">About</h2>
                      </div>
                    </div>

                    <h1 className="about-heading">
                      Our Winning <span className="blue-text">formula</span> is
                    </h1>

                    <div className="about-desc">
                      We are obsessed with making the most of technology,
                      putting it out there for people to have fun together in
                      the most exciting way possible while playing immersive
                      technologies.
                    </div>
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

                  </div>
                </div>
              </div>
            </div>
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

            <div className="approach-right">
              <img src={Circle} alt="" />
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
          style={{ top: "40%",position: 'absolute' }}
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
    </div>
  );
};
export default About;
