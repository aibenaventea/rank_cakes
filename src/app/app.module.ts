import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CakesApiService } from './services/cakes-api.service';
import { HttpClientModule } from '@angular/common/http';
import { CakeDetailsComponent } from './components/cake-details/cake-details.component';
import { CakeCreateComponent } from './components/cake-create/cake-create.component';


@NgModule({
  declarations: [
    AppComponent,
    CakeDetailsComponent,
    CakeCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CakesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
