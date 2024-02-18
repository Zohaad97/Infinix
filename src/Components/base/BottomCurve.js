const BottomCurve = ({ topOnly = false }) => {
  return (<svg className={`cut-edge ${topOnly ? 'top-only' : 'bottom-left-outside'}`} xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.81898e-06 39C21.5391 39 39 21.539 39 -6.81898e-06L39 39L6.81898e-06 39Z" fill="#262D29"/>
  </svg>)
}

export default BottomCurve