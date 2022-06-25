import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassportComponent } from './immigration-documents/passport/passport.component';
import { VisaComponent } from './immigration-documents/visa/visa.component';
import { VisaStampComponent } from './immigration-documents/visa-stamp/visa-stamp.component';
import { Ds2019Component } from './immigration-documents/ds2019/ds2019.component';
import { I20Component } from './immigration-documents/i20/i20.component';
import { I94Component } from './immigration-documents/i94/i94.component';
import { SponsoredStudentsComponent } from './immigration-documents/sponsored-students/sponsored-students.component';
import { EyesComponent } from './other-requirements/biometrics/eyes/eyes.component';
import { FingerprintsComponent } from './other-requirements/biometrics/fingerprints/fingerprints.component';
import { FaceScanComponent } from './other-requirements/biometrics/face-scan/face-scan.component';
import { DnaComponent } from './other-requirements/dna/dna.component';

@NgModule({
  declarations: [
    AppComponent,
    PassportComponent,
    VisaComponent,
    VisaStampComponent,
    Ds2019Component,
    I20Component,
    I94Component,
    SponsoredStudentsComponent,
    EyesComponent,
    FingerprintsComponent,
    FaceScanComponent,
    DnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
