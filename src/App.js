import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Projects from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import ServiceDesc from "./Components/ServiceDesc/ServiceDesc";
import User from "./Components/User/User";

// import Header from "./Components/Layout/Header";
function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route path="/projects">
            <Projects />
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
          <Route path="/u/:name">
            <User />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
