"use client";

import "./engagements.css";

import { Page } from "../components/Page";

export default function Engagements() {
  return (
    <Page
      className="engagements"
      title="Engagements"
      subtitle="Have Katelyn speak at your next event!">
      <>
        <section>
          <h4>Prior Speaking Engagements</h4>
          <h5>
            Land O' Lakes
            <span>corporate pride, event (online)</span>
          </h5>
          <h5>
            Adobe
            <span>corporate pride event</span>
          </h5>
          <h5>
            The Women's Convention
            <span>panel on trans inclusion in feminism</span>
          </h5>
          <h5>
            Creating Change
            <span>panel on LGBTQ journalism</span>
          </h5>
          <h5>
            Bloomberg
            <span>panel on LGBTQ journalism</span>
          </h5>
          <h5>
            George Mason Journalism Club
            <span>———</span>
          </h5>
          <h5>
            NPR's All Things Considered
            <span>———</span>
          </h5>
          <h5>
            numerous podcast and radio appearances
            <span>———</span>
          </h5>
        </section>
        {/* <br />
        <br />
        <br />
        <section>
          <h2>Prior Speaking Engagements</h2>
          <h4>2024</h4>
          <h4>2023</h4>
          <h4>2022</h4>
          <h4>2021</h4>
          <h4>2020</h4>
        </section> */}
      </>
    </Page>
  );
}
