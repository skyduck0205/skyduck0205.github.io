import React from 'react';
import { translate } from 'react-i18next';
import './TrailingSection.css';

function TrailingSection({ t }) {
  return (
    <div className="TrailingSection">
      <div className="container">
        <h5 className="text-center" data-aos="fade-up">{t('contact')}</h5>
        <div data-aos="fade-right">
          <i className="fa fa-phone" />
          0978-270-390
        </div>
        <div data-aos="fade-left">
          <a href="mailto:skyduck0205@gmail.com">
            <i className="fa fa-envelope" />
            skyduck0205@gmail.com
          </a>
        </div>
        <div data-aos="fade-right">
          <a href="https://github.com/skyduck0205" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt" />
            skyduck0205
          </a>
        </div>
        <div data-aos="fade-left">
          <a href="https://www.facebook.com/skyduck0205" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
            skyduck0205
          </a>
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
        <div className="text-center mt-0" data-aos="fade-up">
          <a
            className="btn btn-lg btn-primary resume-button"
            href="https://github.com/skyduck0205/skyduck0205.github.io/blob/src/RESUME_EN.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>{t('nav.resume')} (En)</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default translate()(TrailingSection);
