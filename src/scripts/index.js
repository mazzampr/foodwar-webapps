/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import './views/component/appBar';
import './views/component/hamburger';
import './views/component/navBar';
import './views/component/btn-top';
import './views/component/footer';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
  swRegister();
});
