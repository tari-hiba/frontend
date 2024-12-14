import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4" style="color: #2C5282;">Connexion</h2>
      <form class="p-4 rounded shadow-sm" style="background-color: #FFFFFF;">
        <div class="mb-3">
          <label for="email" class="form-label" style="color: #2D3748;">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Entrez votre email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label" style="color: #2D3748;">Mot de passe</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <button type="submit" class="btn w-100" style="background-color: #38A169; color: #FFFFFF;">Se connecter</button>
      </form>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 500px;
      }
      h2 {
        font-weight: bold;
      }
      label {
        font-weight: bold;
      }
    `,
  ],
})
export class ConnexionComponent {}
