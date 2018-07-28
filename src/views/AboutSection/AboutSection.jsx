import React from 'react';
import { translate } from 'react-i18next';
import Section from 'views/Section';
import imgAvatar from 'images/avatar.png';
import './AboutSection.css';

function AboutSection({ t }) {
  return (
    <Section
      className="AboutSection"
      title={t('nav.about')}
      icon="fa fa-user"
      background="#ededed"
    >
      <div className="container">
        <div className="row">
          <div className="col-md left-col" data-aos="fade-left">
            <h5>{t('about.fullName')}</h5>
            <p>{t('about.suKaiYui')}</p>
            <h5>{t('about.nickname')}</h5>
            <p>SkyDuck</p>
            <h5>{t('about.birthday')}</h5>
            <p>5 Feb, 1990</p>
            <h5>{t('about.birthPlace')}</h5>
            <p>{t('about.kaohsiung')}</p>
          </div>
          <div className="avatar-col" data-aos="fade-in">
            <div className="avatar">
              <img src={imgAvatar} alt="SkyDuck's avatar"/>
            </div>
          </div>
          <div className="col-md" data-aos="fade-right">
            <h5>{t('about.phone')}</h5>
            <p>0978-270-390</p>
            <h5>{t('about.email')}</h5>
            <p><a href="mailto:skyduck0205@gmail.com">skyduck0205@gmail.com</a></p>
            <h5>Facebook</h5>
            <p>
              <a href="https://www.facebook.com/skyduck0205" target="_blank" rel="noopener noreferrer">
                skyduck0205
              </a>
            </p>
            <h5>GitHub</h5>
            <p>
              <a href="https://github.com/skyduck0205" target="_blank" rel="noopener noreferrer">
                skyduck0205
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="text-center" data-aos="fade-up">
            {t('about.aProgrammer')}<br />
            {t('about.aPartTimeDesigner')}
          </p>
          <p className="text-center" data-aos="fade-up">
            {t('about.aGamer')}<br />
            {t('about.aTraveler')}<br />
            {t('about.anAnimalLover')}<br />
            {t('about.aShyGuy')}<br />
            {t('about.aPersuader')}<br />
            {t('about.aFunnyGuy')}
          </p>
        </div>
      </div>

      <div className="text-center" data-aos="fade-up">
        <a
          className="btn btn-lg btn-primary resume-button"
          href="https://www.cakeresume.com/s--q-O9fg_VGAuBY9XvqafGeQ--/ky-su"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>{t('nav.resume')}</h5>
        </a>
      </div>
      <div className="text-center" data-aos="fade-up">
        <a
          className="btn btn-lg btn-primary resume-button"
          href="https://github.com/skyduck0205/skyduck0205.github.io/blob/src/RESUME_EN.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5>{t('nav.resume')} (En)</h5>
        </a>
      </div>
    </Section>
  );
}

export default translate()(AboutSection);
