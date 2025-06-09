import { Page } from "../components/Page";
import "./contact.css";

export default function Contact() {
  return (
    <Page className="contact" title="Contact">
      <main>
        <header>
          {/* <h1>Contact</h1> */}
          {/* <h4>email (link to open user's pref email)</h4> */}
          {/* <img className="headshot" src="/portfolio.jpg" /> */}
        </header>
        <br />
        <br />
        <section>
          <h4>email - katelynburnswrites@gmail.com</h4>
          <br />
          <h4>email - cancelmedaddy@gmail.com</h4>
          <br />
          {/* (link to open user's pref email) */}
          <h4>signal - kab.80</h4>
          <br />
          <h4>
            <a href="https://bsky.app/profile/katelynburns.com">
              bluesky
            </a>
          </h4>
          <br />
          <h4>
            <a href="https://www.patreon.com/katelynburns">patreon</a>
          </h4>
          <br />
        </section>
      </main>
    </Page>
  );
}
