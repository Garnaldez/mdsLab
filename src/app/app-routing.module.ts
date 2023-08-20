import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TeamComponent } from './componentes/team/team.component';
import { PublicationsComponent } from './componentes/publications/publications.component';
import { ContactComponent } from './componentes/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'labMembers',
    component: TeamComponent,
  },
  {
    path: 'publications',
    component: PublicationsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

];

export const routesExtraOptions: ExtraOptions = {
  useHash: false,
  onSameUrlNavigation: "reload",
  anchorScrolling: "enabled",
  scrollOffset: [0, 55],
  scrollPositionRestoration: "enabled",
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routesExtraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
