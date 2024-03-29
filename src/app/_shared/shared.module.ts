// shared.module.ts

import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PercentageCalcPipe } from './pipe/percentage-calc.pipe';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe } from '../_pipe/filter.pipe';
import { UniquePipe } from '../_pipe/unique.pipe';
import { FilterByPropertyPipe } from '../_pipe/filter-by-property.pipe';
import { CapitalizePipe } from '../_pipe/capitalize.pipe';
import { MultiArgPipe } from '../_pipe/multi-arg.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatList, MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { UniqueValuePipe } from '../_pipe/unique-value.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ContactComponent,
    PercentageCalcPipe,
    GenericFormComponent,
    FilterPipe,
    UniquePipe,
    CapitalizePipe,
    MultiArgPipe,
    UniqueValuePipe,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PercentageCalcPipe,
    GenericFormComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FilterPipe,
    UniquePipe,
    CapitalizePipe,
    MultiArgPipe,
    UniqueValuePipe,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
  ]
})
export class SharedModule { }
