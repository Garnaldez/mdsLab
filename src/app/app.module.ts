import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { TeamComponent } from './componentes/team/team.component';
import { TeamCardComponent } from './componentes/team/team-card/team-card.component';
import { MatCardModule } from '@angular/material/card';
import { PublicationsComponent } from './componentes/publications/publications.component';
import { PublicationYearComponent } from './componentes/publications/publication-year/publication-year.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContactComponent } from './componentes/contact/contact.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PublicationComponent } from './componentes/publications/publication-year/publication/publication.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PicsubheaderComponent } from './componentes/picsubheader/picsubheader.component';
import { ResearchComponent } from './componentes/research/research.component';
import { NewsComponent } from './componentes/news/news.component'
import { LabnewComponent } from './componentes/news/labnew/labnew.component';
import { OpportunitiesComponent } from './componentes/opportunities/opportunities.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    TeamCardComponent,
    PublicationsComponent,
    PublicationYearComponent,
    ContactComponent,
    PublicationComponent,
    PicsubheaderComponent,
    ResearchComponent,
    NewsComponent,
    LabnewComponent,
    OpportunitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
