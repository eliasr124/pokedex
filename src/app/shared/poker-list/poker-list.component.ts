import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon-service.service';

@Component({
  selector: 'app-poker-list',
  templateUrl: './poker-list.component.html',
  styleUrls: ['./poker-list.component.scss']
})
export class PokerListComponent implements OnInit{

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor( private pokemonService: PokemonService) {}
  
  ngOnInit(): void {
    this.getPokemonsList();
  }
  
  public getPokemonsList() {
    
    this.pokemonService.getPokemonsList.subscribe(
      resp => {
        this.setAllPokemons = resp.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
      
    ) 
  }

  public getsearchValue(value: string) {
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });

    this.getAllPokemons = filter;
    
  }

}
