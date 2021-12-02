import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path: 'flights',
    loadChildren: () =>
   
      loadRemoteModule({
        type: 'module',
        remoteEntry: URL,
        exposedModule: './Module'
      })
      .then(m => m.FlightsModule)

      // Script (<= ng 12):
      // loadRemoteModule({
      //   type: 'script',
      //   remoteEntry: URL,
      //   remoteName: 'mfe1',
      //   exposedModule: './Module'
      // })
      // .then(m => m.FlightsModule)

      // Static:
      // import('mfe1/Module').then(m => m.FlightsModule)
  },

  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },

  {
    path: '**',
    component: NotFoundComponent
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

