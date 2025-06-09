"use client";

import "./nav.css";

export function Nav() {
  return (
    <nav className="nav">
      <a href="/">Home</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/podcasts">Podcasts</a>
      <a href="/engagements">Speaking Engagements</a>
      <a href="/contact">Contact</a>
      <div className="appearance" onClick={onClick} />
    </nav>
  );
}

const themes = ["lightSuper", "darkSuper", "dark", "maroon", "light"];

function onClick() {
  const themeCurrent = document.body.dataset.theme as string;
  const themeIndex = themes.indexOf(themeCurrent);

  const themeNext =
    themeIndex === themes.length - 1
      ? themes[0]
      : themes[themeIndex + 1];

  document.body.setAttribute("data-theme", themeNext);
}
