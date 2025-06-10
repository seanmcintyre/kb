import { Page } from "../components/Page";
import "./contact.css";

export default function Contact() {
  return (
    <Page
      className="contact"
      title="Contact"
      // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores accusantium sint sit? Ex eaque et id repudiandae sed soluta!"
    >
      <main>
        <section>
          {/* <h5>kab.80<span>signal</span></h5> */}
          <div>
            <div className="placeholder-icon" />
            <h5>
              {/* (link to open user's pref email) */}
              katelynburnswrites@gmail.com
              <span>email</span>
            </h5>
          </div>
          <div>
            <div className="placeholder-icon" />
            <h5>
              cancelmedaddy@gmail.com
              <span>email</span>
            </h5>
          </div>
          <div>
            <div className="placeholder-icon" />
            <h5>
              @katelynburns.com
              <span>bluesky</span>
            </h5>
          </div>
          <div>
            <div className="placeholder-icon" />
            <h5>
              @katelynburns
              <span>patreon</span>
            </h5>
          </div>
          <br />
        </section>
      </main>
    </Page>
  );
}
