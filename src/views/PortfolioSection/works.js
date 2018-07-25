import img104 from 'images/snapshots/104.jpg';
import imgIvm from 'images/snapshots/ivm.jpg';
import imgRigo from 'images/snapshots/rigo.jpg';
import imgSmall2 from 'images/snapshots/small2.jpg';
import imgLabor from 'images/snapshots/labor.jpg';
import imgSmt from 'images/snapshots/smt.jpg';
import imgCatpunch from 'images/snapshots/catpunch.jpg';
import imgDocmanager from 'images/snapshots/docmanager.jpg';
import imgAbeacon from 'images/snapshots/abeacon.jpg';
import imgIwot from 'images/snapshots/iwot.jpg';
import imgDatavan from 'images/snapshots/datavan.jpg';
import imgFoxtest from 'images/snapshots/foxtest.jpg';
import imgTinlt from 'images/snapshots/tinlt.jpg';
import imgCat from 'images/snapshots/cat.jpg';
import imgRxjsdraw from 'images/snapshots/rxjsdraw.jpg';
import imgGridpuzzle from 'images/snapshots/gridpuzzle.jpg';
import imgForm from 'images/snapshots/form.jpg';
import imgMrg from 'images/snapshots/mrg.jpg';
import imgLifezmd from 'images/snapshots/lifezmd.jpg';
import imgHolisong from 'images/snapshots/holisong.jpg';
import imgPugbot from 'images/snapshots/pugbot.jpg';

const works = [
  {
    name: '104 高年級',
    tags: ['Front End', 'React'],
    link: 'https://senior.104.com.tw/',
    image: img104
  },
  {
    name: '福利來販賣機系統',
    tags: ['Front End', 'AngularJS'],
    video: 'https://youtu.be/tLkX2NubXLk',
    image: imgIvm
  },
  {
    name: 'RiGO Taxi Management',
    tags: ['Front End', 'AngularJS', 'CoreUI'],
    link: 'https://rigotaxi.rigo-global.com/',
    snapshot: 'https://drive.google.com/open?id=1jEV-D017G3yLmXzySPQ8aqoMbFnN91wf',
    image: imgRigo
  },
  {
    name: '店小二線上客服系統',
    tags: ['Back End', 'Python', 'Django', 'MySQL', 'Apache', 'Front End', 'AngularJS'],
    snapshot: 'https://drive.google.com/open?id=1Ic9Hdtdu8-dxtJHz6M08cXWkRp905WJX',
    image: imgSmall2
  },
  {
    name: '人合仲介外勞管理系統',
    tags: ['Front End', 'AngularJS', 'Ionic'],
    snapshot: 'https://drive.google.com/open?id=19kZxo8KzJpsSctFawtcird6CABgTgh9k',
    image: imgLabor
  },
  {
    name: 'SMT 工廠數據系統',
    tags: ['Front End', 'Angular'],
    snapshot: 'https://drive.google.com/open?id=1WW9-6CfNXt9Ad4pvzYxIS7EmL8492j87',
    image: imgSmt
  },
  {
    name: 'Catpunch TV',
    tags: ['Front End', 'AngularJS', 'Back End', 'Python', 'Discourse'],
    link: 'http://t3.catpunch.co/',
    snapshot: 'https://drive.google.com/open?id=1X3IsSbVMfacpSZAW6mRLBTD_yv8jmQ1R',
    image: imgCatpunch
  },
  {
    name: '文件管理系統',
    tags: ['Back End', 'Python', 'Django', 'MySQL', 'Apache'],
    snapshot: 'https://drive.google.com/open?id=1wZCatk1OVvrKFYDhgF4sOvk-2owp1ZpN',
    image: imgDocmanager
  },
  {
    name: 'aBeacon',
    tags: ['Front End', 'AngularJS'],
    snapshot: 'https://drive.google.com/open?id=1Sdn1Z_LzOE0Oa6GLCxc8mJUN9n72m9tT',
    image: imgAbeacon
  },
  {
    name: 'iWoT',
    tags: ['Front End', 'Angular', 'Blockly', 'Node-RED'],
    video: 'https://drive.google.com/open?id=1UskUKVzLPmFKacuTHb-xiR_I_hShTpZQ',
    github: 'https://github.com/iwotdev',
    image: imgIwot
  },
  {
    name: 'Datavan 點餐機',
    tags: ['Front End', 'AngularJS', 'Ionic', 'Cordova'],
    snapshot: 'https://drive.google.com/open?id=1FOcpY6c277_RZw3eU2DJrVtJcF28gYj2',
    image: imgDatavan
  },
  {
    name: 'Fox Test',
    tags: ['Front End', 'AngularJS'],
    link: 'https://skyduck0205.github.io/foxtest/',
    github: 'https://github.com/skyduck0205/foxtest',
    image: imgFoxtest
  },
  {
    name: 'This Is Not Lightning Talk',
    tags: ['Front End'],
    link: 'https://skyduck0205.github.io/this-is-not-lightning-talk/',
    github: 'https://github.com/skyduck0205/this-is-not-lightning-talk',
    image: imgTinlt
  },
  {
    name: 'Shitty Cat SVG',
    tags: ['Front End', 'Snap.svg'],
    link: 'https://skyduck0205.github.io/shitty-cat-svg/',
    github: 'https://github.com/skyduck0205/shitty-cat-svg',
    image: imgCat
  },
  {
    name: 'RxJS Draw',
    tags: ['Front End', 'RxJS'],
    link: 'https://skyduck0205.github.io/rxjs-draw/',
    github: 'https://github.com/skyduck0205/rxjs-draw',
    image: imgRxjsdraw
  },
  {
    name: 'Grid Puzzle',
    tags: ['Front End'],
    link: 'https://skyduck0205.github.io/grid-puzzle/',
    github: 'https://github.com/skyduck0205/grid-puzzle',
    image: imgGridpuzzle
  },
  {
    name: 'Let’s Form',
    tags: ['Front End', 'AngularJS', 'Back End', 'FirebaseApp'],
    link: 'https://lets-form.firebaseapp.com',
    snapshot: 'https://drive.google.com/open?id=1ceemMDGojBNUCn1rDfMpXsXW1pRnk7l0',
    image: imgForm
  },
  {
    name: 'Meeting Record Genie',
    tags: ['Front End', 'Google App Script', 'Back End', 'Python', 'Django'],
    github: 'https://github.com/skyduck0205/meeting-record-genie',
    image: imgMrg
  },
  {
    name: '人生走馬燈 LifeZMD – Steve Job',
    tags: ['Front End'],
    link: 'http://thanks-steve-jobs.github.io/life/jobs.html',
    github: 'https://github.com/thanks-steve-jobs/life',
    image: imgLifezmd
  },
  {
    name: 'Holisong',
    tags: ['Front End', 'AngularJS', 'Back End', 'Python', 'Parse'],
    link: 'http://holisong.parseapp.com/',
    snapshot: 'https://drive.google.com/open?id=11SuCVVe5CSTfi86ixdRs6Mq5UbWmADQz',
    image: imgHolisong
  },
  {
    name: 'Pugbot',
    tags: ['Front End', 'React'],
    link: 'https://www.pugbot.com.tw/',
    image: imgPugbot
  },
];

export default works;
