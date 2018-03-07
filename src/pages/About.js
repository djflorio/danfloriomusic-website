import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './About.css';

const About = () => {

  return (
    <div className="about app__page-container">
      <p className="about__blurb">
        Dan Florio is a solo artist, multi instrumentalist, producer, and&nbsp;
        <a className="about__link" target="_blank" href="http://www.danflorio.com">
          computer programmer
        </a>&nbsp;
        who writes and records music about dirt, nostalgia, dreams, animals,
        and bodies of water. All of his music is freely available on his&nbsp;
        <a className="about__link" target="_blank" href="http://danflorio.bandcamp.com">
          Bandcamp
        </a>&nbsp;
        page and can be downloaded for whatever price you feel like paying.
        <br /><br />
        His latest EP, <Link to="/music" className="about__link">A Day Wiser</Link>,
        consists of four songs. These four songs
        consist of melodies and words. Dan could sit here and type out a description
        of the music, pretending he's not the one doing the writing, but he
        thinks your time is better spent listening to it.
        It will be over before you know it.
      </p>
      <div className="about__social">
        <a className="about__social-link" href="mailto:dflo@danflorio.com">
          Email
        </a>
        <a className="about__social-link" href="https://www.facebook.com/danfloriomusic/" target="_blank">
          Facebook
        </a>
        <a className="about__social-link" href="https://twitter.com/dflosounds" target="_blank">
          Twitter
        </a>
        <a className="about__social-link" href="http://www.danflorio.com" target="_blank">
          As a Coder
        </a>
      </div>
    </div>
  );
}

export default About;