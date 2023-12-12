import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TutoRoutingModule } from './tuto-routing.module';
import { CounterButtonsComponent } from './input-output/counter-buttons/counter-buttons.component';
import { CounterComponent } from './input-output/counter/counter.component';
import { CounterOutputComponent } from './input-output/counter-output/counter-output.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { PopupComponent } from './popup/popup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupContentComponent } from './popup-content/popup-content.component';
import { NformsComponent } from './nforms/nforms.component';
import { NgLifeCycleHooks } from './ng-lifecycle-hooks/ng-life';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
    PopupComponent,
    PopupContentComponent,
    NformsComponent,
    NgLifeCycleHooks,
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    TutoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    
  ],
  exports: [
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent,
  ],
  providers: [
    MatSnackBar,
  ]
})
export class TutoModule { }
