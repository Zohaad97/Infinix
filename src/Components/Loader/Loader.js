import animationLogo from "../assets/images/Infinix-logo-animation.gif";
const Loader = () => {
  return (
    <div className="loader-logo">
      <img
        src={animationLogo}
        loading="eager"
        alt=""
        className="loader-image"
      />
    </div>
  );
};
export default Loader;
