import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphsService {
  constructor(private http: HttpClient) {}

  getDataSocialMedia() {
    return this.http.get('http://localhost:3000/graphs');
  }

  getUsers() {
    return this.getDataSocialMedia().pipe(
      delay(1000),
      map((data) => {
        const labels: string[] = Object.keys(data);
        const values: number[] = Object.values(data);
        return { labels, values };
      })
    );
  }
}
