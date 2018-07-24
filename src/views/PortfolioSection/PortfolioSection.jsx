import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Section from 'views/Section';
import works from './works';
import './PortfolioSection.css';

class PortfolioSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.renderWorkCard = this.renderWorkCard.bind(this);
  }

  onMouseEnter(event) {
    event.stopPropagation();
    const index = parseInt(event.currentTarget.dataset.index, 10);
    this.setState({ selected: index });
  }

  renderWorkCard(work, index) {
    let itemPerRow;
    if (window.innerWidth < 768) {
      itemPerRow = 1;
    } else if (window.innerWidth < 992)   {
      itemPerRow = 3
    } else {
      itemPerRow = 4;
    }
    const delay = (index % itemPerRow) * 100;
    return (
      <div
        key={work.name}
        data-index={index}
        className="work-card col-lg-3 col-md-4"
        onMouseEnter={this.onMouseEnter}
        onClick={this.onMouseEnter}
        data-aos="fade-up-left"
        data-aos-delay={delay}
      >
        <div className="work-card-bg" style={{ backgroundImage: `url(${work.image})` }} />
        {this.state.selected === index &&
          <div className="work-card-content" data-aos="fade-in" data-aos-duration="400">
            <h5>{work.name}</h5>
            <div className="work-links">
              {work.link && (
                <a className="work-link" href={work.link} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-link" />
                </a>
              )}
              {work.video && (
                <a className="work-link" href={work.video} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-video" />
                </a>
              )}
              {work.snapshot && (
                <a className="work-link" href={work.snapshot} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-images" />
                </a>
              )}
              {work.github && (
                <a className="work-link" href={work.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" />
                </a>
              )}
            </div>
            <div className="work-tags">
              {work.tags.map(tag => (
                <span key={tag} className="badge badge-secondary">{tag}</span>
              ))}
            </div>
          </div>
        }
      </div>
    )
  }

  render() {
    const { t } = this.props;

    return (
      <Section
        className="PortfolioSection"
        title={t('nav.portfolio')}
        icon="fa fa-briefcase"
        background="#3b3b3b"
      >
        <div className="row">
          {works.map((work, index) => (
            this.renderWorkCard(work, index)
          ))}
        </div>
      </Section>
    );
  }
}

export default translate()(PortfolioSection);
