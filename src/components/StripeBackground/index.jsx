import React from "react";

import "./stripe.css";
import "./stripes.css";
import "./textStyles.css";


export function StripeBackground () {
  return (
      <header>
        <section class="intro container-lg">
          <h2>Make Your Own Stripe Background!</h2>
          <div>
            <p>
              Stripe has a really great BG pattern that I fell in love with from the first look...

            </p>
          </div>
          {/* <a href="/#">Start your company</a> */}
        </section>

        <div class="StripeGrid anchorBottom  ">
          <div class="backgroundContainer">
            <div class="grid">
              <div class="background"></div>
            </div>
          </div>

          <div class="stripeContainer">
            <div class="grid">
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
              <div class="stripe"></div>
            </div>
          </div>
        </div>
      </header>
  );
}
