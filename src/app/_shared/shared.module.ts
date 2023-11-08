// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PercentageCalcPipe } from './pipe/percentage-calc.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ContactComponent,
    PercentageCalcPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PercentageCalcPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }
