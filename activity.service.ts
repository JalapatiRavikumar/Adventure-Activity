import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities(): Observable<any> {
    return this.http.get('/api/activities');
  }

  bookActivity(data: any): Observable<any> {
    return this.http.post('/api/bookings', data);
  }
}
