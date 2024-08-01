import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Router, Routers, BrowserRouter } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routers>
      <Router path="/" elements={<HomePage />} />
    </Routers>
  </BrowserRouter>
);
