import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appointment {
  id?: number; // Optionnel si l'ID est généré par le backend
  clientName: string;
  professional: string;
  date: string;
}

@Injectable({
  providedIn: 'root', // Service accessible globalement
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/appointments'; // URL du backend

  constructor(private http: HttpClient) {}

  // Méthode pour ajouter un rendez-vous
  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.apiUrl, appointment);
  }

  // Méthode pour récupérer tous les rendez-vous
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiUrl);
  }

  // Méthode pour supprimer un rendez-vous par ID
  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
