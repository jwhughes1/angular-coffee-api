import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeTableComponent } from './coffee-table-component/coffee-table.component';
import { CoffeeEffects } from './app-state-v2/store/effects';
import { reducer } from './app-state-v2/store/reducer';
import { HttpClientModule } from '@angular/common/http';
import {CoffeeService } from './app-state-v2/services/item-component-service';
import { ReactiveFormsModule } from '@angular/forms';
import { ResizeComponentComponent } from './resize-component/resize-component.component'

@NgModule({
  declarations: [
    AppComponent,
    CoffeeTableComponent,
    ResizeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    StoreModule.forRoot({coffee:reducer}),
    EffectsModule.forRoot([CoffeeEffects]),
    HttpClientModule,
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
