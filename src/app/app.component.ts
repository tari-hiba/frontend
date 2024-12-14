import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Assurez-vous que RouterModule est importé

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #003366;">
      <div class="container">
        <a class="navbar-brand" href="#">Gestion Rendez-vous</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/inscription" routerLinkActive="active">Inscription</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/connexion" routerLinkActive="active">Connexion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/rendezvous" routerLinkActive="active">Rendez-vous</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/disponibilites" routerLinkActive="active">Disponibilités</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet> <!-- Contenu dynamique de la page ici -->
  `,
  styles: [
    `
      /* Lien actif dans la barre de navigation */
      .navbar-nav .nav-link.active {
        font-weight: bold;  /* Lien actif en gras */
        color: #ffc107 !important;  /* Jaune pour le lien actif */
      }

      /* Style pour les liens de la barre de navigation */
      .navbar-nav .nav-link {
        color: #ffffff !important;  /* Liens en blanc */
      }

      /* Style du fond de la page, couleur claire */
      body {
        background-color: #f1f1f1;  /* Fond clair pour toute l'application */
        color: #333;  /* Texte gris foncé pour tout le contenu */
        margin: 0;  /* Enlever les marges par défaut */
        padding: 0;  /* Enlever les paddings par défaut */
      }

      /* Centrer le contenu dans le body */
      .container {
        padding-top: 20px; /* Espace entre la barre de navigation et le contenu */
      }
    `,
  ],
  imports: [RouterModule]  // Assurez-vous d'importer RouterModule pour gérer les routes
})
export class AppComponent {}
