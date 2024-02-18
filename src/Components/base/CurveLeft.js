const CurveLeft = ({ hideOnDesktop = false }) => {
  return (<svg className={`cut-edge top-right-outside is-record ${hideOnDesktop ? "is-hidden-on-desktop" : ""}`} xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M39 0C17.4609 1.88301e-06 -1.883e-06 17.461 0 39L-3.40949e-06 3.40949e-06L39 0Z" fill="#262D29" />
  </svg>)
}

export default CurveLeft