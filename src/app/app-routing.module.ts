import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ds2019Component } from './immigration-documents/ds2019/ds2019.component';
import { I20Component } from './immigration-documents/i20/i20.component';
import { I94Component } from './immigration-documents/i94/i94.component';
import { PassportComponent } from './immigration-documents/passport/passport.component';
import { SponsoredStudentsComponent } from './immigration-documents/sponsored-students/sponsored-students.component';
import { VisaComponent } from './immigration-documents/visa/visa.component';
import { VisaStampComponent } from './immigration-documents/visa-stamp/visa-stamp.component';

const routes: Routes = [
  {
    path: 'ds2019',
    component: Ds2019Component
  },
  {
    path: 'i20',
    component: I20Component
  },
  {
    path: 'i94',
    component: I94Component
  },
  {
    path: 'passport',
    component: PassportComponent
  },
  {
    path: 'sponsoredstudents',
    component: SponsoredStudentsComponent
  },
  {
    path: 'visa',
    component: VisaComponent
  },
  {
    path: 'visa-stamp',
    component: VisaStampComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
