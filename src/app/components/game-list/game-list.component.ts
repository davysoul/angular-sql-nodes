import { Component ,OnInit} from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/models/Game';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games:any = [];
  constructor(private gamesService:GamesService){}
 ngOnInit():void{
   this.gamesService.getGames().subscribe({
     next:(data) =>{
      console.log(data);
      this.games = data;
     },
     error: err=>{
        console.log(err);
     }
   }
    
   )
 }
}
