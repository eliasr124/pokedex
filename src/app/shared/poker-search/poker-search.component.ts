import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poker-search',
  templateUrl: './poker-search.component.html',
  styleUrls: ['./poker-search.component.scss']
})
export class PokerSearchComponent {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }

}
