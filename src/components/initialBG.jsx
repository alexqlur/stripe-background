import React from "react";

function initialBG() {
  return (
    <div>
      <header>
        <section class="intro container-lg">
          <h2 class="common-SectionTitle">Turn your idea into a startup</h2>
          <div class="intro-copy container-lg">
            <p class="common-IntroText">
              Stripe Atlas is a powerful, safe, and easy-to-use platform for
              forming a company. By removing lengthy paperwork, legal
              complexity, and numerous fees, Stripe Atlas helps you launch your
              startup from anywhere in the world.
            </p>
          </div>
          <a
            href="https://dashboard.stripe.com/atlas/invite/az1p9r-zvopu"
            class="common-Button common-Button--default"
            data-analytics-action="start_company"
            data-analytics-source="header_cta"
            data-convert-cta="atlas_register"
          >
            Start your company
          </a>
        </section>

        <div class="common-StripeGrid anchorBottom  ">
          <div class="backgroundContainer">
            <div class="grid">
              <div class="background Helm__background--slate9"></div>
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
    </div>
  );
}

export default initialBG;
