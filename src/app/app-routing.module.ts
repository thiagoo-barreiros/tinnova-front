import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateVehicleComponent } from './pages/create-vehicle/create-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path:  '', redirectTo: 'dashboard', pathMatch: 'full'
},
{
  path: 'dashboard', component: DashboardComponent
},

{
  path: 'create', component: CreateVehicleComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
