import '@fortawesome/fontawesome-free/js/all.js';
import 'regenerator-runtime'; /* for async await transpile */
import './views/component/appBar';
import './views/component/hamburger';
import './views/component/navBar';
import './views/component/hero-element';
import './views/component/top-menu';
import './views/component/banner-promo';
import './views/component/btn-top';
import '../styles/main.scss';
import './list-resto.js';
import App from './views/app';

const app = new App({
    button: document.querySelector('.hamburger'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('body'),
});
