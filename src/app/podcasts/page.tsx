import "./podcast.css";

import { Page } from "../components/Page";

export default function Podcasts() {
  return (
    <Page
      className="podcasts"
      title="Podcasts"
      subtitle="Cancel Me, Daddy"
      description="The pearl clutching about “cancel culture” and “censorship” has become louder and more absurd while also getting more and more play in the media. Journalists Katelyn Burns and Christine Grimaldi see this panic for what it is though: a grift. They take a closer look at these temper tantrums, dispelling myths, laughing at the most outrageous takes, and shedding light on which perspectives are actually being suppressed and left out of the conversation.">
      <main>
        {/* <header>
          <img className="upper" src="/kb/cmd.png" />
        </header> */}
        <div>
          {/* cancelmedaddy@gmail.com */}

          <h3 className="llink">
            <div className="placeholder-icon" />
            <a href="/kb/contact">
              [[Reach out for podcast guest opportunities!]]
            </a>
          </h3>

          <div className="patreon">
            <svg className="patreon" viewBox="0 0 436 476">
              <path d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"></path>
            </svg>
            <h4>Support me Cancel Me, Daddy on Patreon!</h4>
          </div>

          <div className="podcast-links">
            <h5>Listen now on</h5>
            <div>
              <a>Apple Podcasts</a>
              <a>Spotify</a>
              <a>YouTube</a>
              <a>Pocket Casts</a>
              <a>iHeartRadio</a>
              <a>AntennaPod</a>
              <a>Podcast Addict</a>
              <a>Castbox</a>
              <a>Podbean</a>
              <a>Podkicker</a>
              <a>Player FM</a>
              <a>Podcast Republic</a>
              <a>RSS Radio</a>
            </div>
          </div>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SwsIwth0h0w?si=Z1DkMjsA_CMuXmPC"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          {/* <img src="/pods.png" /> */}
          <br />

          <div className="megaphone-embed">
            <iframe
              src="https://playlist.megaphone.fm?p=MULP9171942070"
              width="100%"
              height={472}
            />
          </div>
          <br />
          <br />
          <p>
            You can find Cancel Me, Daddy wherever you listen to
            podcasts and join our community on Patreon.
          </p>
          <p>
            Our theme song was written by Daniel Peterschmidt, and
            Eden M-W designed our graphics.
          </p>
        </div>
      </main>
    </Page>
  );
}
