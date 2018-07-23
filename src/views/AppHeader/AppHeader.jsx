import React, { Component } from 'react';
import { translate } from 'react-i18next';
import AOS from 'aos';
import { Sticky } from 'react-sticky';
import scrollToElement from 'scroll-to-element';
import i18n from 'i18n';
import './AppHeader.css';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActived: false
    };
    this.onTogglerClick = this.onTogglerClick.bind(this);
    this.onNavItemClick = this.onNavItemClick.bind(this);
    this.onLocaleClick = this.onLocaleClick.bind(this);
  }

  onTogglerClick() {
    this.setState(pre => ({ menuActived: !pre.menuActived }));
  }

  onNavItemClick(event) {
    const target = event.currentTarget.dataset.target;
    scrollToElement(target, {
      duration: 500,
      offset: -60,
    });
    if (this.state.menuActived) {
      this.setState({ menuActived: false });
    }
  }

  onLocaleClick(event) {
    const lang = event.currentTarget.dataset.lang;
    i18n.changeLanguage(lang);
    AOS.refreshHard();
    if (this.state.menuActived) {
      this.setState({ menuActived: false });
    }
  }

  render() {
    const t = this.props.t;

    const togglerClass = [
      'menu-toggler',
      'd-md-none',
      this.state.menuActived ? 'active' : ''
    ].join(' ');

    const menuClass = [
      'shadow-sm',
      this.state.menuActived ? 'active' : ''
    ].join(' ');

    const isMobileSize = window.innerWidth < 768;

    return (
      <header className="AppHeader">
        <div className="intro bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="logo"
                  src="/images/logo/duck-typing-logo.svg"
                  alt="A cute duck made by AA texts"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-anchor=".AppHeader"
                />
              </div>
              <div className="col-md-8">
                <img
                  className="logo-text logo-text-sm"
                  src="/images/logo/duck-typing-text-jp.svg"
                  alt="A Japanese text of duck typing"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="1200"
                  data-aos-anchor=".AppHeader"
                />
                <img
                  className="logo-text"
                  src="/images/logo/duck-typing-text-en.svg"
                  alt="An English text of duck typing"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="800"
                  data-aos-anchor=".AppHeader"
                />
              </div>
            </div>
          </div>
        </div>
        <Sticky topOffset={400} disableCompensation={isMobileSize}>
          {({ style }) => (
            <nav className={menuClass} style={isMobileSize ? {} : style}>
              <div className="container-fluid">
              <button className={togglerClass} onClick={this.onTogglerClick}>
                <span />
                <span />
                <span />
              </button>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={this.onNavItemClick}
                      data-target=".App"
                    >
                      {t('nav.home')}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={this.onNavItemClick}
                      data-target=".AboutSection"
                    >
                      {t('nav.about')}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={this.onNavItemClick}
                      data-target=".SkillsSection"
                    >
                      {t('nav.skills')}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={this.onNavItemClick}
                      data-target=".ExperienceSection"
                    >
                      {t('nav.experience')}
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-link nav-link"
                      onClick={this.onNavItemClick}
                      data-target=".PortfolioSection"
                    >
                      {t('nav.portfolio')}
                    </button>
                  </li>
                  <li className="nav-item locale-items">
                    <button
                      className="btn btn-link locale-button"
                      onClick={this.onLocaleClick}
                      data-lang="zh-TW"
                    >
                      中
                    </button>
                    <span className="text-primary">/</span>
                    <button
                      className="btn btn-link locale-button"
                      onClick={this.onLocaleClick}
                      data-lang="en-US"
                    >
                      EN
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </Sticky>
      </header>
    );
  }
}

export default translate()(AppHeader);
