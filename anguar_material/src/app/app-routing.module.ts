import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "admin",
    loadChildren: () => import("./Dashboard/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: 'customer',
    loadChildren: () => import("./Dashboard/customer/customer.module").then(m => m.CustomerModule)
  },
  {
    path: '',
    loadChildren:() =>import("./Dashboard/login/login.module").then(m=>m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
