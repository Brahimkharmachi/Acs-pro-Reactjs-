import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Componnent/Homes/Home";
import BasicExample from "./Componnent/Headers/Header";
import Entreprises from "./Componnent/Pages/Entreprise/Entreprise";
import Footer from "./Componnent/Footers/Footer";
import ConseilEtConception from "./Componnent/Pages/Offre/ConseilEtConception/ConseilEtConception";
import Installations from "./Componnent/Pages/Offre/Installation/Installation";
import Maintenance from "./Componnent/Pages/Offre/Maintenance/Maintenance";
import Contact from "./Componnent/Pages/Contact/Contact";

export default function App() {
  return (
    <Router>
      <BasicExample />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/entreprise">
          <Entreprises />
        </Route>

        <Route path="/conseil-et-conception">
          <ConseilEtConception />
        </Route>

        <Route path="/installation">
          <Installations />
        </Route>

        <Route path="/maintenance">
          <Maintenance />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
