import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  @Input() formConfig: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.createFormGroup();
  }

  createFormGroup() {
    let group: any;
    this.formConfig.forEach((field: any) => {
      group[field.name] = ['', field.validators];
    });
    return this.fb.group(group);
  }

  onSubmit() {
    this.formSubmit.emit(this.formGroup.value);
  }
}