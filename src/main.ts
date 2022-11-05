import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  /* FICA OBSERVANDO SEMPRE QUE A PAGINA E RECARREGADA */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
window.addEventListener('beforeunload', function() {
  localStorage.removeItem('token');

}, false);
