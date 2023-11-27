import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200';

  constructor( private http: HttpClient ) { }

  get getPokemonsList(): Observable<any> {
   return this.http.get<any>(this.url).pipe(
    tap (resp => resp ),
    tap( resp => {
      resp.results.map( (respPokemons: any) => {
        
        this.apiGetpokemons(respPokemons.url).subscribe(
          res =>respPokemons.status = res
        );
      })
    })
   );
  }

  public apiGetpokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }
}
