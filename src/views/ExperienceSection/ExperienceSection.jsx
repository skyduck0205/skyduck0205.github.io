import React from 'react';
import { translate } from 'react-i18next';
import Section from 'views/Section';
import './ExperienceSection.css';

function ExperienceSection({ t }) {
  return (
    <Section
      className="ExperienceSection"
      title={t('nav.experience')}
      icon="fa fa-id-card"
    >
      <div className="container timeline-container">
        <div className="timeline d-none d-md-block" data-aos="slide-up"></div>
        <div className="row">
          <div className="col text-col left-col" data-aos="fade-right" data-aos-delay="400">
            <h5>{t('experience.foxconnTitle')}</h5>
            <p className="text-primary">{t('experience.foxconn')}</p>
            <p>{t('experience.foxconnExperience')}</p>
          </div>
          <div>
            <i className="fa fa-briefcase" data-aos="zoom-in" />
          </div>
          <div className="col time-col" data-aos="fade-left">
            <h5 className="time-flag">Jan 2014 - Present</h5>
          </div>
        </div>
        <div className="row">
          <div className="col time-col left-col" data-aos="fade-right">
            <h5 className="time-flag">Nov 2012 - Oct 2013</h5>
          </div>
          <div>
            <i className="fa fa-ship" data-aos="zoom-in" />
          </div>
          <div className="col text-col" data-aos="fade-left" data-aos-delay="400">
            <h5>{t('experience.cgaTitle')}</h5>
            <p className="text-primary">{t('experience.cga')}</p>
            <p>{t('experience.cgaExperience')}</p>
          </div>
        </div>
        <div className="row">
          <div className="col text-col left-col" data-aos="fade-right" data-aos-delay="400">
            <h5>{t('experience.nthuTitle')}</h5>
            <p className="text-primary">{t('experience.nthu')}</p>
            <p>{t('experience.nthuExperience')}</p>
          </div>
          <div>
            <i className="fa fa-graduation-cap" data-aos="zoom-in" />
          </div>
          <div className="col time-col" data-aos="fade-left">
            <h5 className="time-flag">Sep 2008 - Jul 2012</h5>
          </div>
        </div>
      </div>

    </Section>
  );
}

export default translate()(ExperienceSection);
