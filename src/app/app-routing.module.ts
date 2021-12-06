import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanceComponent } from './components/distance/distance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'distance',
    pathMatch: 'full',
  },
  {
    path: 'distance',
    component: DistanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
