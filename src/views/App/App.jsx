import React, { Component } from 'react';
import AOS from 'aos';
import { translate } from 'react-i18next';
import { StickyContainer } from 'react-sticky';
import ScrollToTop from 'react-scroll-up';
import AppHeader from 'views/AppHeader';
import AppFooter from 'views/AppFooter';
import AboutSection from 'views/AboutSection';
import SkillsSection from 'views/SkillsSection';
import ExperienceSection from 'views/ExperienceSection';
import PortfolioSection from 'views/PortfolioSection';
import TrailingSection from 'views/TrailingSection';
import './App.css';

class App extends Component {
  componentDidMount() {
    const spinner = document.querySelector('.loading-spinner');
    spinner.classList.add('loaded');
    setTimeout(() => document.body.removeChild(spinner), 400);
    AOS.init({ duration: 600 });
  }

  render() {
    return (
      <StickyContainer className="App">
        <ScrollToTop
          showUnder={160}
          style={{ right: 15, bottom: 40, zIndex: 600 }}
        >
          <i className="scroll-to-top fa fa-chevron-up shadow-sm" />
        </ScrollToTop>
        <AppHeader />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <TrailingSection />
        <AppFooter />
      </StickyContainer>
    );
  }
}

export default translate()(App);
