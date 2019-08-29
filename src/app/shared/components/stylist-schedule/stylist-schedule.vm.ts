import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {forEach} from 'lodash';

export class StylistScheduleForm {
  stylistSchedule = {};

  constructor(options: { [p: string]: any } = {}) {
    this.setValues(options);
  }

  setValues(options = {}) {
    forEach(this, (val, key) => {
      this[key] = options[key] ? options[key] : this[key];
    });
  }
}

@Injectable()
export class StylistScheduleVm {
  formOptions: any;

  constructor(private fb: FormBuilder) {
    this.formOptions = ({
      lastName: '',
      firstName: '',
      hairStylistName: '',
      phone: '',
      email: ''
    });
  }

  create(): StylistScheduleForm {
    return new StylistScheduleForm();
  }

  createFormGroup(): FormGroup {
    const stylistSchedule = this.create();
    stylistSchedule.setValues(this.formOptions);

    return this.fb.group(stylistSchedule);
  }
}
