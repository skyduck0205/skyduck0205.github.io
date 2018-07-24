import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import imgDuckLogo from 'images/logo/duck-typing-logo.svg';
import imgDuckTextJp from 'images/logo/duck-typing-text-jp.svg';
import imgDuckTextEn from 'images/logo/duck-typing-text-en.svg';
import imgAvatar from 'images/avatar.png';
import App from './views/App';
import './index.css';

const preloadImages = [
  imgDuckLogo,
  imgDuckTextJp,
  imgDuckTextEn,
  imgAvatar
];
const preloadPromise = preloadImages.map(src => new Promise(resolve => {
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => resolve();
  img.onerror = () => {
    console.error('Failed to load image:', src);
    resolve();
  }
}));

Promise.all(preloadPromise)
  .then(() => {
    ReactDOM.render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>,
      document.getElementById('root')
    )
  });
