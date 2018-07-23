import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Section from 'views/Section';
import './PortfolioSection.css';

const works = [
  {
    name: '104 高年級',
    tags: ['Front End', 'React'],
    link: 'https://senior.104.com.tw/',
    image: '/images/snapshots/104.jpg'
  },
  {
    name: '福利來販賣機系統',
    tags: ['Front End', 'AngularJS'],
    video: 'https://youtu.be/tLkX2NubXLk',
    image: '/images/snapshots/ivm.jpg'
  },
  {
    name: 'RiGO Taxi Management',
    tags: ['Front End', 'AngularJS', 'CoreUI'],
    link: 'https://rigotaxi.rigo-global.com/',
    snapshot: 'https://drive.google.com/open?id=1jEV-D017G3yLmXzySPQ8aqoMbFnN91wf',
    image: '/images/snapshots/rigo.jpg'
  },
  {
    name: '店小二線上客服系統',
    tags: ['Back End', 'Python', 'Django', 'MySQL', 'Apache', 'Front End', 'AngularJS'],
    snapshot: 'https://drive.google.com/open?id=1Ic9Hdtdu8-dxtJHz6M08cXWkRp905WJX',
    image: '/images/snapshots/small2.jpg'
  },
  {
    name: '人合仲介外勞管理系統',
    tags: ['Front End', 'AngularJS', 'Ionic'],
    snapshot: 'https://drive.google.com/open?id=19kZxo8KzJpsSctFawtcird6CABgTgh9k',
    image: '/images/snapshots/labor.jpg'
  },
  {
    name: 'SMT 工廠數據系統',
    tags: ['Front End', 'Angular'],
    snapshot: 'https://drive.google.com/open?id=1WW9-6CfNXt9Ad4pvzYxIS7EmL8492j87',
    image: '/images/snapshots/smt.jpg'
  },
  {
    name: 'Webduino',
    tags: ['Front End'],
    github: 'https://github.com/webduinoio/webduino',
    image: '/images/snapshots/webduino.jpg'
  },
  {
    name: 'Catpunch TV',
    tags: ['Front End', 'AngularJS', 'Back End', 'Python', 'Discourse'],
    link: 'http://t3.catpunch.co/',
    snapshot: 'https://drive.google.com/open?id=1X3IsSbVMfacpSZAW6mRLBTD_yv8jmQ1R',
    image: '/images/snapshots/catpunch.jpg'
  },
  {
    name: '文件管理系統',
    tags: ['Back End', 'Python', 'Django', 'MySQL', 'Apache'],
    snapshot: 'https://drive.google.com/open?id=1wZCatk1OVvrKFYDhgF4sOvk-2owp1ZpN',
    image: '/images/snapshots/docmanager.jpg'
  },
  {
    name: 'aBeacon',
    tags: ['Front End', 'AngularJS'],
    snapshot: 'https://drive.google.com/open?id=1Sdn1Z_LzOE0Oa6GLCxc8mJUN9n72m9tT',
    image: '/images/snapshots/abeacon.jpg'
  },
  {
    name: 'iWoT',
    tags: ['Front End', 'Angular', 'Blockly', 'Node-RED'],
    video: 'https://drive.google.com/open?id=1UskUKVzLPmFKacuTHb-xiR_I_hShTpZQ',
    github: 'https://github.com/iwotdev',
    image: '/images/snapshots/iwot.jpg'
  },
  {
    name: 'Datavan 點餐機',
    tags: ['Front End', 'AngularJS', 'Ionic', 'Cordova'],
    snapshot: 'https://drive.google.com/open?id=1FOcpY6c277_RZw3eU2DJrVtJcF28gYj2',
    image: '/images/snapshots/datavan.jpg'
  },
  {
    name: 'Fox Test',
    tags: ['Front End', 'AngularJS'],
    link: 'https://skyduck0205.github.io/foxtest/',
    github: 'https://github.com/skyduck0205/foxtest',
    image: '/images/snapshots/foxtest.jpg'
  },
  {
    name: 'This Is Not Lightning Talk',
    tags: ['Front End'],
    link: 'https://skyduck0205.github.io/this-is-not-lightning-talk/',
    github: 'https://github.com/skyduck0205/this-is-not-lightning-talk',
    image: '/images/snapshots/tinlt.jpg'
  },
  {
    name: 'Shitty Cat SVG',
    tags: ['Front End', 'Snap.svg'],
    link: 'https://skyduck0205.github.io/shitty-cat-svg/',
    github: 'https://github.com/skyduck0205/shitty-cat-svg',
    image: '/images/snapshots/cat.jpg'
  },
  {
    name: 'RxJS Draw',
    tags: ['Front End', 'RxJS'],
    link: 'https://skyduck0205.github.io/rxjs-draw/',
    github: 'https://github.com/skyduck0205/rxjs-draw',
    image: '/images/snapshots/rxjsdraw.jpg'
  },
  {
    name: 'Grid Puzzle',
    tags: ['Front End'],
    link: 'https://skyduck0205.github.io/grid-puzzle/',
    github: 'https://github.com/skyduck0205/grid-puzzle',
    image: '/images/snapshots/gridpuzzle.jpg'
  },
  {
    name: 'Let’s Form',
    tags: ['Front End', 'AngularJS', 'Back End', 'FirebaseApp'],
    link: 'https://lets-form.firebaseapp.com',
    snapshot: 'https://drive.google.com/open?id=1ceemMDGojBNUCn1rDfMpXsXW1pRnk7l0',
    image: '/images/snapshots/form.jpg'
  },
  {
    name: 'Meeting Record Genie',
    tags: ['Front End', 'Google App Script', 'Back End', 'Python', 'Django'],
    github: 'https://github.com/skyduck0205/meeting-record-genie',
    image: '/images/snapshots/mrg.jpg'
  },
  {
    name: '人生走馬燈 LifeZMD – Steve Job',
    tags: ['Front End'],
    link: 'http://thanks-steve-jobs.github.io/life/jobs.html',
    github: 'https://github.com/thanks-steve-jobs/life',
    image: '/images/snapshots/lifezmd.jpg'
  },
  {
    name: 'Holisong',
    tags: ['Front End', 'AngularJS', 'Back End', 'Python', 'Parse'],
    link: 'http://holisong.parseapp.com/',
    snapshot: 'https://drive.google.com/open?id=11SuCVVe5CSTfi86ixdRs6Mq5UbWmADQz',
    image: '/images/snapshots/holisong.jpg'
  },
  {
    name: 'Pugbot',
    tags: ['Front End', 'React'],
    link: 'https://www.pugbot.com.tw/',
    image: '/images/snapshots/pugbot.jpg'
  },
];

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
