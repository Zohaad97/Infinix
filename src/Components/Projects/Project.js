import site2 from "../assets/images/site2.png";
import tehkom from "../assets/images/tehkom.png";
import sitee from "../assets/images/sitee.png";
import general from "../assets/images/general.png";
const Project = () => {
  return (
    <div className="page-spacing__large is-track-record bg--2 radius-24">
      <div className="container-small is-track-record">
        <div className="record-div bg--4">
          <img
            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb532cc6cfc5af6123a385_frame-top-right-outside.svg"
            loading="lazy"
            alt=""
            className="cut-edge top-right-outside is-record is-hidden-on-desktop"
          />
          <img
            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb532cc6cfc5af6123a385_frame-top-right-outside.svg"
            loading="lazy"
            alt=""
            className="cut-edge top-right-outside is-record"
          />
          <img
            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb539f0f9044a1a9b1bb8a_frame-top-left-outside.svg"
            loading="lazy"
            alt=""
            className="cut-edge top-left-outside"
          />
          <div className="record__heading-div">
            <h2 className="p-leading opacity-06">Projects</h2>
          </div>
        </div>
        <h2 className="project-heading">
          Elevate Your Business
          <span className="project-span">with Actionable Technologies</span>
        </h2>

        <div className="column-50 flex-vertical is-grid is-footer-grid ">
          <a className="partner-item" href="/#">
            <img src={site2} alt="partner" />
            <h4 className="project-heading4">
              SITE <br />
              GITEX 2023
            </h4>

            <div className="view-button">View</div>
            <div className="description">Interactive LED</div>
          </a>

          <a className="partner-item" href="/#">
            <img src={tehkom} alt="Tehkom" />
            <h4 className="project-heading4">
              TAHAKOM
              <br />
              GITEX 2023
            </h4>

            <div className="view-button">View</div>
            <div className="description">Interactive LED</div>
          </a>
          <a className="partner-item" href="/#">
            <img src={sitee} alt="Sitee" />
            <h4 className="project-heading4">
              Site <br />
              GITEX 2023
            </h4>

            <div className="view-button">View</div>
            <div className="description">Interactive LED</div>
          </a>
          <a className="partner-item" href="/#">
            <img src={general} alt="General" />
            <h4 className="project-heading4">
              GE, General Electric
              <br />
              Arab health 2023
            </h4>

            <div className="view-button">View</div>
            <div className="description">Interactive LED</div>
          </a>
        </div>
        <div
          data-w-id="451fff9d-1313-535d-71de-411304f891a0"
          className="logos-expander bg--4"
        >
          <img
            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb59905eb38b96ebae57ed_bottom-left-ouside.svg"
            loading="lazy"
            alt=""
            className="cut-edge top-only"
          />
          <img
            src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb59905eb38b96ebae57ed_bottom-left-ouside.svg"
            loading="lazy"
            alt=""
            className="cut-edge bottom-left-outside"
          />
          <div
            data-w-id="2f6abd90-5562-7b73-88e4-b9bcc1cdd38d"
            className="whyus__expand is-logos"
          >
            <div className="whyus__vertical bg-accent"></div>
            <div className="whyus__horizontal is-horizontal bg-accent"></div>
          </div>
          <div className="p-body opacity-08 lighter line-height-1">
            View all
          </div>
        </div>
      </div>
      <a
        href="#why-us"
        data-w-id="9f1c2ce4-4767-9e2e-207a-07f0144976af"
        className="edge-cut__side-right is-records w-inline-block"
      >
        <img
          src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64f5f5c17591e40f7e4c9e91_New-side-cut.svg"
          loading="lazy"
          alt=""
          className="cut-edge records"
        />
        <img
          src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64eb54a1ae5e8c4c700b121b_Arrow-bottom.svg"
          loading="lazy"
          alt=""
          className="records-arrow"
        />
      </a>
    </div>
  );
};

export default Project;
