import { Component } from '@angular/core';
import { Appointment, AppointmentService } from '../services/appointment.service'; // Importation du service

@Component({
  selector: 'app-rendezvous',
  standalone: true,
  imports: [],
  template: `
    <div class="container mt-5">
      <h2 class="text-center text-primary mb-4">Prendre un Rendez-vous</h2>
      <form class="bg-light p-4 rounded shadow-sm" (submit)="onSubmit()">
        <div class="mb-3">
          <label for="clientName" class="form-label">Nom du Client</label>
          <input [(ngModel)]="newAppointment.clientName" name="clientName" type="text" id="clientName" class="form-control" placeholder="Entrez votre nom">
        </div>
        <div class="mb-3">
          <label for="professional" class="form-label">Professionnel</label>
          <input [(ngModel)]="newAppointment.professional" name="professional" type="text" id="professional" class="form-control" placeholder="Entrez le nom du professionnel">
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input [(ngModel)]="newAppointment.date" name="date" type="date" id="date" class="form-control">
        </div>
        <button type="submit" class="btn btn-success w-100">Ajouter un Rendez-vous</button>
      </form>

      <div class="mt-5">
        <h3 class="text-center text-secondary mb-3">Liste des Rendez-vous</h3>
        <table class="table table-striped table-hover shadow-sm">
          <thead class="table-primary">
            <tr>
              <th>Nom du Client</th>
              <th>Professionnel</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let appointment of appointments">
              <td>{{ appointment.clientName }}</td>
              <td>{{ appointment.professional }}</td>
              <td>{{ appointment.date }}</td>
              <td>
                <button class="btn btn-outline-danger btn-sm" (click)="onDelete(appointment.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 700px;
      }
      h2, h3 {
        font-weight: bold;
      }
      form {
        background-color: #f8f9fa;
      }
      table {
        margin-top: 20px;
      }
    `,
  ],
})
export class RendezVousComponent {
  appointments: Appointment[] = []; // Liste des rendez-vous
  newAppointment: Appointment = {
    clientName: '',
    professional: '',
    date: '',
  }; // Nouveau rendez-vous

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.loadAppointments(); // Charger les rendez-vous au démarrage
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  onSubmit(): void {
    if (this.newAppointment.clientName && this.newAppointment.professional && this.newAppointment.date) {
      this.appointmentService.addAppointment(this.newAppointment).subscribe((appointment) => {
        this.appointments.push(appointment); // Ajouter à la liste
        this.newAppointment = { clientName: '', professional: '', date: '' }; // Réinitialiser le formulaire
      });
    }
  }

  onDelete(id?: number): void {
    if (id) {
      this.appointmentService.deleteAppointment(id).subscribe(() => {
        this.appointments = this.appointments.filter((appt) => appt.id !== id); // Supprimer localement
      });
    }
  }
}
