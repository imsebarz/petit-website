import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import "./App.scss";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Store from "./Store";
import Footer from "./Components/Footer";
import Arma from "./Arma";
import Contacto from "./Contacto";
import NoMatch from "./NoMatch";
import Ofrecemos from "./Ofrecemos";
import Dirigimos from "./Dirigimos";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <Router>
      <ScrollToTop>
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
              <Contacto></Contacto>
            </Route>
            <Route path="/aboutus/ofrecemos">
              <Ofrecemos></Ofrecemos>
            </Route>
            <Route path="/aboutus/dirigimos">
              <Dirigimos></Dirigimos>
            </Route>
            <Route path="/login">
              <h1>I'm on LOGIN</h1>
            </Route>
            <Route path="/tienda">
              <Store></Store>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
