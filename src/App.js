import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/styles/GlobalStyles";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
import { Switch, Route, useLocation } from "react-router-dom";
// We need to import this, then wrap the app with this component so that framer motion knows when components are removed or added to the React tree.
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location, location.pathname);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Exitbeforeenter is needed as otherwise the transitions occur at the same time and you cant see the one fading in. */}
      <AnimatePresence exitBeforeEnter>
        {/* Need to add the location as a prop and pass it in to switch so that Framer motion knows when the page has changed by looking at the key */}
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          {/* The :id basically means anything after the the /work/ will take you to the movide detail page 
            It has to be ':id' i tried random characters and it didn't work.
        */}
          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
