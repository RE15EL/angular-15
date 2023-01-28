import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// rutas
import { routes } from './app/main/main-routing';
// componente raiz
import { MainComponent } from './app/main/main.component';



bootstrapApplication(MainComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
  ]
})
  .catch(err => console.error(err));


