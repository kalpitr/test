import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import './css/media_query.css'
import './css/dashboard_inner.css'
import './css/dashboard_custom_styles.css'
// import './css/global.css'
// import './css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/bootstrap-glyphicons.css'  

const WidgetDivs = document.querySelectorAll(".appointment-container");

// Inject our React App into each
// WidgetDivs.forEach((Div) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     Div
//   );
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
