import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Membre } from "../Models/Membre";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'any',
})
export class MembreService {
  private apiURL = 'http://localhost:8080/membres';

  constructor(private http: HttpClient) {}

  getAllMembres(): Observable<Membre[]> {
    return this.http.get<Membre[]>(this.apiURL);
  }

  getMembreById(idMbr: number): Observable<Membre> {
    return this.http.get<Membre>(`${this.apiURL}/${idMbr}`);
  }

  createMembre(membre: Membre): Observable<Membre> {
    return this.http.post<Membre>(this.apiURL, membre);
  }

  saveMembre(membre: Membre): Observable<any> {
    return this.http.post<Membre>(this.apiURL, membre);
  }

  updateMembre(membre: Membre): Observable<Membre> {
    return this.http.put<Membre>(`${this.apiURL}/${membre.idMbr}`, membre);
  }

  deleteDomaineById(idMbr: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${idMbr}`);
  }
}