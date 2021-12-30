import DrawerInitiator from '../utils/drawer-initiator';
import urlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initiapAppShell();
  }

  _initiapAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // Tambahkan komponen lain
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const SkipContentElement = document.querySelector('.skip-link');
    SkipContentElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
