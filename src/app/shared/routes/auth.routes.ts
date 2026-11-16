import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { errorRoutingModule } from '../../components/error/error.route';

export const authen: Routes = [

  {
    path: '', children: [
      ...errorRoutingModule.routes,
    ]
  },
]
@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AuthenticationsRoutingModule { }



