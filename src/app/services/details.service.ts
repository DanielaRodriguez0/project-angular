import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Detail } from '../core/detail';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  private detailsUrl = `${environment.apiUrl}/anonimizacion`;
  private _httpClient: HttpClient = inject(HttpClient);
  private readonly authService: AuthService = inject(AuthService);
  token = this.authService.isAuthenticated();

  getDetailsById(id: string): Observable<{ state: Detail }> {
    console.log('Desde el servicio details: ', this.token);

    const headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    return this._httpClient.get<{ state: Detail }>(`${this.detailsUrl}/${id}`, {
      headers,
    });
  }
}
