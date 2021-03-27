import logo from "./logo.svg";
// import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "../src/screens/login";
import Admin from "../src/screens/admin";
import Navbar from "../src/layouts/navbar";
import Edit from "./screens/editCategory";
import Product from "./screens/products";
import EditProduct from "./screens/editProduct";
import Users from "./screens/Users";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import ReactDOM from "react-dom";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Login {...props} login={loggedIn} set={setLoggedIn} />
        </Route>
        <Route path="/admin" exact component={Admin} />
        <Route path="/edit-category/:id" exact component={Edit} />
        <Route path="/products" exact component={Product} />
        <Route path="/edit-product/:id" exact component={EditProduct} />
        <Route path="/users" exact component={Users} />
      </div>
    </Router>
  );
}

export default App;
