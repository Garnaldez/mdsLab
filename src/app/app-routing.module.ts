import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TeamComponent } from './componentes/team/team.component';
import { PublicationsComponent } from './componentes/publications/publications.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ResearchComponent } from './componentes/research/research.component';
import { NewsComponent } from './componentes/news/news.component';
import { OpportunitiesComponent } from './componentes/opportunities/opportunities.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
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
  {
    path: 'research',
    component: ResearchComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'opportunities',
    component: OpportunitiesComponent,
  },

];

export const routesExtraOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  scrollOffset: [0, 55],
  scrollPositionRestoration: "enabled",
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routesExtraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
