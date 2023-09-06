import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenUrlService {
  private apiUrl = 'https://api.shrtco.de/v2/shorten';

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string): Observable<any> {
    const requestBody = { url: originalUrl };

    return this.http.post<any>(this.apiUrl, requestBody);
  }
}
