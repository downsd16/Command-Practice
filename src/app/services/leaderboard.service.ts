import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreItem } from './ScoreItem';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  constructor(private http: HttpClient) {}

  ngOnInit(){}

  getLeaderboard(): Observable<ScoreItem[]>{ 
    return this.http.get<ScoreItem[]>("http://localhost:7071/api/CommandLeaderboardAPI")
  }
}