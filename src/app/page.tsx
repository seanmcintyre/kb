import "./home.css";

export default function Home() {
  return (
    <div>
      <main>
        <img className="headshot-mobile" src="/kb1.jpeg" />
        <div className="banner">
          <h1>Katelyn Burns</h1>
          <h2>
            Freelance journalist and podcaster.
          </h2>
        </div>
        <header>
          <img className="headshot" src="/kb1.jpeg" />
          <section>
            <p>
              Katelyn covers trans issues, politics, and culture in her MSNBC and Xtra columns and she's a co-host of the Cancel Me, Daddy podcast. She was previously the first ever openly trans Capitol Hill reporter in US history and she has bylines in the Washington Post, Politico, Vice, Esquire, Playboy, Teen Vogue, the San Francisco Chronicle, and many other major publications. Best known for her in-depth coverage of trans politics, she also covered the DC protests against Brett Kavanaugh's SCOTUS nomination and occasionally gets to write about her hobby, video gaming.
            </p>
          </section>
          <div className="patreon">
            <svg
              className="patreon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 436 476">
              <path d="M436 143c-.084-60.778-47.57-110.591-103.285-128.565C263.528-7.884 172.279-4.649 106.214 26.424 26.142 64.089.988 146.596.051 228.883c-.77 67.653 6.004 245.841 106.83 247.11 74.917.948 86.072-95.279 120.737-141.623 24.662-32.972 56.417-42.285 95.507-51.929C390.309 265.865 436.097 213.011 436 143Z"></path>
            </svg>
            <h4>Support me on Patreon!</h4>
          </div>
        </header>
        <section className="featured">
          <h3>Latest Features</h3>
          <div>
            <h4>
              <a href="https://www.msnbc.com/opinion/msnbc-opinion/caster-semenya-race-to-be-myself-book-rcna123388">
                Caster Semenya’s story highlights the fallacies of
                anti-trans sports bans
              </a>
            </h4>
            <div>
              <p>
                A tension between fairness and the right to
                participate is at the heart of the controversy over
                gender and sports.
              </p>
              <span>MSNBC</span>
            </div>
          </div>
          <div>
            <h4>
              <a href="https://www.vox.com/identities/22334014/trans-athletes-bills-explained">
                The massive Republican push to ban trans athletes,
                explained
              </a>
            </h4>
            <div>
              <p>
                About 30 states have introduced bills to prevent trans
                kids and women from playing sports. It’s the GOP’s
                latest attempt to force trans people into hiding.
              </p>
              <span>Vox</span>
            </div>
          </div>
          <div>
            <h4>
              <a href="https://www.them.us/story/chase-strangio-trans-rights-advocate-now-awards-2023">
                Chase Strangio Is Defending Us on All Fronts
              </a>
            </h4>
            <div>
              <p>
                The ACLU attorney discusses the rise of anti-trans
                legislation, his extra-legal advocacy, and how he gets
                it all done.
              </p>
              <span>them</span>
            </div>
          </div>
          <div>
            <h4>Feature Item Title</h4>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fugit, atque? Est veniam voluptatum expedita,
                incidunt blanditiis nesciunt dolores laudantium non
                culpa sunt dolor dolore. Voluptatibus aut esse vitae
                id ad?
              </p>
              <span>source</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
