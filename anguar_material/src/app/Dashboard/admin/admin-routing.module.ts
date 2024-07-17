import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {
    path: "",
    component:LayoutComponent
  },

  {
    path: "create",
    component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
