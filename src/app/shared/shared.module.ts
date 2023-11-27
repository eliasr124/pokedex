import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokerHeaderComponent } from './poker-header/poker-header.component';
import { PokerSearchComponent } from './poker-search/poker-search.component';
import { PokerListComponent } from './poker-list/poker-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PokerHeaderComponent,
    PokerSearchComponent,
    PokerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PokerHeaderComponent,
    PokerSearchComponent,
    PokerListComponent
  ]
})
export class SharedModule { }
