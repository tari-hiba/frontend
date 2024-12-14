import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]), // Ajoutez vos routes ici
    importProvidersFrom(HttpClientModule), // Ajout du HttpClientModule pour les requêtes HTTP
  ],
}).catch((err) => console.error(err));
