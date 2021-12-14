/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-free/js/all.js';
import 'regenerator-runtime'; /* for async await transpile */
import './views/component/appBar';
import './views/component/hamburger';
import './views/component/navBar';
import './views/component/btn-top';
import './views/component/footer';
import '../styles/main.scss';
import App from './views/app';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
