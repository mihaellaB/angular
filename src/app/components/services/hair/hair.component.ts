import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isEmpty} from 'lodash';
import {HairVm} from './hair.vm';
@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.scss']
})
export class HairComponent implements OnInit, OnChanges {
  form: FormGroup;
  dateFormat: string;

  constructor(private fb: FormBuilder,
              private hairVm: HairVm
  ) {
    this.dateFormat = 'dd.mm.yy';
    this.form = hairVm.createHairDetailsForm();

  }

  ngOnInit() {

  }

  ngOnChanges(changed) {
    if (changed.details && !isEmpty(changed.details.currentValue)) {
      if (this.form) {
        this.form.patchValue(changed.details.currentValue);
      }
    }
  }

}

