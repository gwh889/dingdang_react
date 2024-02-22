import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, HashRouter } from "react-router-dom";

import { renderRoutes } from "./router/utils.js";
import routerConfig from "./router/router.js";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      {/* 修改为函数式渲染 */}
      {renderRoutes(routerConfig)}
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
