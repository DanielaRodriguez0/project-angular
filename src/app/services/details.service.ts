import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Detail } from '../core/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private detailsUrl = `${environment.apiUrl}/v1/rest/anonimizacion`;
  private _httpClient: HttpClient = inject(HttpClient);
  token = 'eyJhbGciOiJIUzIIkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwTUxNjIzOTAyMn0.zF6BNAm1MEDDSGh-tV8D1gi_QXf0Itf4BEQxxE'

  getDetailsById(id: string): Observable<{state: Detail}> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${this.token}` }); 
    return this._httpClient.get<{state: Detail}>(`${this.detailsUrl}/${id}`, {headers} )
  }
}
