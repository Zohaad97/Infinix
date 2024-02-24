import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import ProjectList from "./Components/ProjectList/ProjectList";
import Contact from "./Components/Contact/Contact";
import ServiceDesc from "./Components/ServiceDesc/ServiceDesc";
import User from "./Components/User/User";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top when the component is mounted or when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

// import Header from "./Components/Layout/Header";
function App() {
  return (
    <>
      <ToastContainer autoClose={5000}
        hideProgressBar={true}
        closeOnClick />
      <Router >
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/serviceDesc">
            <ServiceDesc />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route exact path="/project-page">
            <ProjectPage />
          </Route>
          <Route path="/projectlist">
            <ProjectList />
          </Route>
          <Route path="/u/:name">
            <User />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
