import React from 'react';
import { translate } from 'react-i18next';
import Section from 'views/Section';
import './SkillsSection.css';

function SkillsSection({ t }) {
  return (
    <Section
      className="SkillsSection"
      title={t('nav.skills')}
      icon="fa fa-cogs"
      background="#dddddd"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="row inner-row bg-light" data-aos="fade-left">
              <div className="col-md-4 bg-primary" data-aos="fade-right" data-aos-delay="400">
                <h5 className="mb-0">{t('skills.frontEnd')}</h5>
              </div>
              <div className="col-md">
                <h5>{t('skills.frontEndTime')}</h5>
                <ul>
                  <li>{t('skills.frontEndFrameworks')}</li>
                  <li>{t('skills.frontEndTypes')}</li>
                  <li>{t('skills.frontEndApiDesign')}</li>
                  <li>{t('skills.frontEndServices')}</li>
                  <li>{t('skills.frontEndLibraries')}</li>
                  <li>{t('skills.frontEndGa')}</li>
                  <li>{t('skills.frontEndTesting')}</li>
                  <li>{t('skills.frontEndRwd')}</li>
                  <li>{t('skills.frontEndStyles')}</li>
                  <li>{t('skills.frontEndStudies')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row inner-row bg-light" data-aos="fade-right">
              <div className="col-md">
                <h5>{t('skills.backEndTime')}</h5>
                <ul>
                  <li>{t('skills.backEndPython')}</li>
                  <li>{t('skills.backEndNode')}</li>
                  <li>{t('skills.backEndDatabase')}</li>
                </ul>
              </div>
              <div className="col-md-4 bg-primary" data-aos="fade-left" data-aos-delay="400">
                <h5 className="mb-0">{t('skills.backEnd')}</h5>
              </div>
            </div>
            <div className="row inner-row bg-light" data-aos="fade-right">
              <div className="col-md">
                <ul>
                  <li>{t('skills.othersTaskRunners')}</li>
                  <li>{t('skills.othersPackageManagers')}</li>
                  <li>{t('skills.othersGit')}</li>
                  <li>{t('skills.othersWireframe')}</li>
                  <li>{t('skills.othersPhotoshop')}</li>
                </ul>
              </div>
              <div className="col-md-4 bg-primary" data-aos="fade-left" data-aos-delay="400">
                <h5 className="mb-0">{t('skills.others')}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default translate()(SkillsSection);
