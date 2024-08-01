import React from "react";
import styles from "./Hero.modules.css";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="/media/images/homeHero.png" alt="Home Hero" />
        <h1 className="mt-5">Invest in everythings</h1>
        <p className={`fs-5 ${styles.text}`}>
          {/* <p className="fs-5 text">  */}
          online platform to invest in stocks,derivatives,mutual funds and more
        </p>
        <button className="btn btn-primary fs-5 p-2 mb-5 size">
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
