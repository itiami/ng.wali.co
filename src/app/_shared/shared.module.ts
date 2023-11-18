// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PercentageCalcPipe } from './pipe/percentage-calc.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { TutoModule } from '../modules/tuto/tuto.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ContactComponent,
    PercentageCalcPipe,
    HighlightDirective,
    GenericFormComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    TutoModule,
  ],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PercentageCalcPipe,
    HighlightDirective,
    GenericFormComponent,
    TutoModule,

  ]
})
export class SharedModule { }
