/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }
  console.log('Your browser not supported Service Worker');
};

export default swRegister;
