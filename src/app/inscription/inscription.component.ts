import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4">Inscription</h2>
      <form class="bg-light p-4 rounded shadow-sm">
        <div class="mb-3">
          <label for="username" class="form-label">Nom d'utilisateur</label>
          <input type="text" id="username" class="form-control" placeholder="Entrez votre nom d'utilisateur">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" placeholder="Entrez votre email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" id="password" class="form-control" placeholder="Entrez votre mot de passe">
        </div>
        <button type="submit" class="btn" style="background-color: #28a745; color: white; width: 100%;">S'inscrire</button>
      </form>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 500px;
      }
    `,
  ],
})
export class InscriptionComponent {}
