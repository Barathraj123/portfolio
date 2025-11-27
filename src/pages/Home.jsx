import React from 'react';

function Home() {
  return (
    <section id="home" className="home-hero">
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Full-stack Developer</p>
        <h1>Hey, I'm <span className="accent">Barath</span>.</h1>
        <p className="home-hero__lead">
          I build fast, delightful web experiences with modern JavaScript and thoughtful design.
        </p>
        <a className="cta" href="#projects">View Projects</a>
      </div>
    </section>
  );
}

export default Home;
