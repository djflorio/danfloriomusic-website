import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <p className="about__text">
        Dan is a solo artist, multi instrumentalist, producer, and&nbsp;
        <a className="about__link" href="http://www.danflorio.com" target="_blank">
          computer programmer
        </a>
        &nbsp;who writes and records music about dirt, nostalgia, dreams,
        animals, and bodies of water.
      </p>
      <p className="about__text">
        These are his favorite instruments to play:
      </p>
      <table className="about__instruments">
        <tbody>
          <tr>
            <td>
              <img
                className="about__instrument-img"
                src={require('./img/guitaricon.png')}
              />
            </td>
            <td>
              <p className="about__instrument-text">
                His father started teaching him guitar when he was 11 (when Dan was 11...not his father).
                While most of his recorded music features finger-picked acoustic guitar, he does enjoy
                going back to his high school days and wailing away on an electric now and then.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="about__instrument-img"
                src={require('./img/mandoicon.png')}
              />
            </td>
            <td>
              <p className="about__instrument-text">
                He started learning mandolin while in college. When people see this instrument
                they think it's a ukulele. When people hear it they think it's a bango.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="about__instrument-img"
                src={require('./img/ukuleleicon.png')}
              />
            </td>
            <td>
              <p className="about__instrument-text">
                The ukulele never fails to make Dan feel happy, even when he uses it on
                his typical, meloncholly, singer-singwriter-y songs.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="about__instrument-img"
                src={require('./img/pianoicon.png')}
              />
            </td>
            <td>
              <p className="about__instrument-text">
                Don't be fooled by this piano silhouette; Dan doesn't own a grand piano.
                He does like to pretend he knows how to play on an electric one however.
                It has weighted keys, at least.
              </p>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default About;