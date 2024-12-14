import { Component } from '@angular/core';

@Component({
  selector: 'app-disponibilites',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h2 class="text-center mb-4" style="color: #2C5282;">Gérer les Disponibilités</h2>
      <form class="p-4 rounded shadow-sm" style="background-color: #FFFFFF;">
        <div class="mb-3">
          <label for="date" class="form-label" style="color: #2D3748;">Date</label>
          <input type="date" id="date" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="start-time" class="form-label" style="color: #2D3748;">Heure de début</label>
          <input type="time" id="start-time" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="end-time" class="form-label" style="color: #2D3748;">Heure de fin</label>
          <input type="time" id="end-time" class="form-control" />
        </div>
        <button type="submit" class="btn w-100" style="background-color: #38A169; color: #FFFFFF;">Ajouter Disponibilité</button>
      </form>

      <h3 class="mt-5" style="color: #2C5282;">Liste des Disponibilités</h3>
      <ul class="list-group mt-3">
        <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let dispo of disponibilites">
          <span>
            <strong>Date:</strong> {{ dispo.date }} <br />
            <strong>Heure:</strong> {{ dispo.startTime }} - {{ dispo.endTime }}
          </span>
          <button class="btn btn-danger btn-sm" (click)="supprimerDisponibilite(dispo)">Supprimer</button>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 600px;
      }
      h2, h3 {
        font-weight: bold;
      }
      label {
        font-weight: bold;
      }
      .list-group-item {
        background-color: #F7FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 5px;
      }
      .btn-danger {
        background-color: #E53E3E;
        color: #FFFFFF;
      }
    `,
  ],
})
export class DisponibiliteComponent {
  disponibilites = [
    { date: '2024-12-14', startTime: '09:00', endTime: '12:00' },
    { date: '2024-12-15', startTime: '14:00', endTime: '16:00' },
  ];

  supprimerDisponibilite(dispo: any) {
    this.disponibilites = this.disponibilites.filter((d) => d !== dispo);
  }
}
