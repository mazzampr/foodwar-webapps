import DrawerInitiator from "../utils/drawer-initiator";

class App {
    constructor({ button, drawer, content }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;

        this._initiapAppShell();
    }

    _initiapAppShell() {
        DrawerInitiator.init( {
            button: this._button,
            drawer: this._drawer,
            content: this._content,
        });

        // Tambahkan komponen lain
    }
}

export default App;