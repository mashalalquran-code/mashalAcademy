import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'dashboards',
    children: [
      {
        path: 'admin',
        loadComponent: () =>
          import('./admin/admin').then((m) => m.Admin),
        data: {
          parentTitle: 'pageHeader.dashboards',
          subParentTitle: '',
          childTitle: 'pageHeader.admin',
        },
        title: 'Mashalify - Admin',
      },
       {
        path: 'finance',
        loadComponent: () =>
          import('./finance/finance').then((m) => m.Finance),
        data: {
          parentTitle: 'pageHeader.dashboards',
          subParentTitle: '',
          childTitle: 'pageHeader.finance',
        },
        title: 'Mashalify - Finance',
      },
       {
        path: 'HR',
        loadComponent: () =>
          import('./HR/HR').then((m) => m.HR),
        data: {
          parentTitle: 'pageHeader.dashboards',
          subParentTitle: '',
          childTitle: 'pageHeader.HR',
        },
        title: 'Mashalify - HR',
      },
       {
        path: 'manager',
        loadComponent: () =>
          import('./manager/manager').then((m) => m.Manager),
        data: {
          parentTitle: 'pageHeader.dashboards',
          subParentTitle: '',
          childTitle: 'pageHeader.manager',
        },
        title: 'Mashalify - Manager',
      },
       {
        path: 'students',
        loadComponent: () =>
          import('./students/students').then((m) => m.Students),
        data: {
          parentTitle: 'pageHeader.dashboards',
          subParentTitle: '',
          childTitle: 'pageHeader.students',
        },
        title: 'Mashalify - Students',
      },
       {
        path: 'teachers',
        loadComponent: () =>
          import('./teachers/teachers').then((m) => m.Teachers),
        data: {
          parentTitle: 'pageHeader.dashboards',
          subParentTitle: '',
          childTitle: 'pageHeader.teachers',
        },
        title: 'Mashalify - Teachers',
      },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}