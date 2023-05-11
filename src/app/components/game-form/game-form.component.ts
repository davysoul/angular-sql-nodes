import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  formAddGame! :FormGroup;
  game!:Game;
  constructor(private fb:FormBuilder,private gamesService:GamesService){
   

  }
  ngOnInit(): void {
    this.formAddGame = this.fb.group({
      title:new FormControl('',
            Validators.required),
      description:new FormControl('',
                               [Validators.required,
                                Validators.minLength(4)]),
      image:new FormControl('',Validators.required) 

    })
  }
  handleAddGame(){
    this.game = this.formAddGame.value;
    console.log(this.game);
    this.gamesService.saveGame(this.game).subscribe({
      next:(data)=>{
       console.log(data) ;
       alert("The game was added successfully");
       this.formAddGame.reset();
      },
      error(err) {
          console.log(err);
      },
    })
  }
}
