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
          <img className="upper" src="/cmd.png" />
        </header> */}
        <div>
          {/* cancelmedaddy@gmail.com */}
          <p>Reach out for podcast guest opportunities!</p>
          <div>
            <span>podcast patreon feature</span>
          </div>
          <div className="podcast-links">
            <h5>Listen now on</h5>
            <div>
              <a>Apple Podcasts</a>
              <a>Spotify</a>
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
