import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon-service.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlPokemonName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor( private activedRoute: ActivatedRoute, 
    private pokerApiService: PokemonService) {

  }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activedRoute.snapshot.params['id'];
    const pokemon = this.pokerApiService.apiGetpokemons(`${this.urlPokemon}/${id}`);
    const pokemonName = this.pokerApiService.apiGetpokemons(`${this.urlPokemonName}/${id}`);

    return forkJoin([pokemon, pokemonName]).subscribe(
      resp => {
        this.pokemon = resp;
        this.isLoading = true
      },
      error => {
        this.apiError = true
      }
    )
  }
}
