import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { SixthPageComponent } from './sixth-page/sixth-page.component';
import { SeventhPageComponent } from './seventh-page/seventh-page.component';
import { EighthPageComponent } from './eighth-page/eighth-page.component';
import { FooterComponent } from './footer/footer.component';
import { NewJobComponent } from './new-job/new-job.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    FifthPageComponent,
    SixthPageComponent,
    SeventhPageComponent,
    EighthPageComponent,
    FooterComponent,
    NewJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
