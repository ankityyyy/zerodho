import React from "react";
import "../../index.css";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="/media/images/largestBroker.svg" alt="largestBroker" />
        </div>
        <div className="col-6 ">
          <h1>Largest stock broker in india</h1>
          <p>
            2+ million zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Stock & IPOs</li>
                <li>Commodity derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Direct mutual funds</li>
                <li>Currency derivatives</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="/media/images/pressLogos.png"
            alt="pressLogos"
            className="mt-3 presslogo-width"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
