import React from "react";
import { UseGlobalContext } from "./AppProvider";
import phone from "./images/phone.svg";
const Hero = () => {
  const { closeSubLinks } = UseGlobalContext();
  return (
    <section className="hero-container" onMouseOver={closeSubLinks}>
      <div className="content-container">
        <article className="stripe-info">
          <h1>payment infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button>Start now</button>
        </article>
        <article className="phone-container">
          <img src={phone} alt="phone" className="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
