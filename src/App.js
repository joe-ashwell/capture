import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/styles/GlobalStyles";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>

        <Route path="/work">
          <OurWork />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
