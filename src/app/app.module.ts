import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildIdListComponent } from './build-id-list/build-id-list.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestDetailsDataComponent } from './test-details/test-details-data/test-details-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildListComponent,
    BuildIdListComponent,
    TestDetailsComponent,
    TestDetailsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
