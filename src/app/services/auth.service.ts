import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = `${environment.apiUrl}/api/login`;
  private _httpClient: HttpClient = inject(HttpClient);
  private tokenKey = 'authToken';

  login(user: string, password: string): Observable<any> {
    return this._httpClient.post<any>(this.loginUrl, { user, password }).pipe(
      tap((response) => {
        if (response.token) {
          console.log('Token: ', response.token);
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token)
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    if (!token) { return false;}

    const payload = JSON.parse(atob(token.split('.')[1]));

    const expirationTime = payload.exp * 1000;
    return Date.now() < expirationTime
  }
}
