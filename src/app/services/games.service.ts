import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Game } from 'src/models/Game';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  AP_URI = 'http://localhost:3000/api';
  constructor(private http:HttpClient) { }

  getGames():Observable<Array<Game>>{
   return this.http.get<Array<Game>>(`${this.AP_URI}/games`)
  }
  getGame(id:string):Observable<Game>{
    return this.http.get<Game>(`${this.AP_URI}/games/${id}`)
  }
  public saveGame(game:Game):Observable<Game>{
    console.log(": "+ JSON.stringify(game) );
    console.log(this.http.post<Game>(`${this.AP_URI}/games`,game))
    return this.http.post<Game>(`${this.AP_URI}/games`,game)
  }
  public deleteGame(id:number){
    return this.http.delete(`${this.AP_URI}/games/${id}`);
  }
  public updateGame(id:number,updatedGame:Game){
    return this.http.put(`${this.AP_URI}/games/${id}`,updatedGame);
  }
}
