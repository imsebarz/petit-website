import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Store from "./Store";
import Footer from "./Footer";
import Arma from "./Arma";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/carrito">
            <Cart></Cart>
          </Route>
          <Route path="/arma">
            <Arma></Arma>
          </Route>
          <Route path="/contacto">
            <h1>Inofrmacion de contacyp</h1>
          </Route>
          <Route path="/acerca">
            <h1>I'm on ABOUT</h1>
          </Route>
          <Route path="/login">
            <h1>I'm on LOGIN</h1>
          </Route>
          <Route path="/tienda">
            <Store></Store>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
