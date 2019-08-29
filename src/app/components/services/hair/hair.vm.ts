import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {forEach, isEmpty} from 'lodash';
import {StylistScheduleGroup} from '../../../shared/components/stylist-schedule/stylist-schedule.model';
import {stylistScheduleMap} from '../../../shared/components/stylist-schedule/stylist-schedule.map';


export class HairForm {

  stylistSchedule: StylistScheduleGroup = null;


  constructor(options: { [p: string]: any } = {}) {
    this.setValues(options);

    this.stylistSchedule = isEmpty(options) || options.hasOwnProperty('stylistSchedule')
      ? new StylistScheduleGroup(options.stylistSchedule)
      : new StylistScheduleGroup(options, stylistScheduleMap);
  }

  setValues(options = {}) {
    forEach(this, (val, key) => {
      this[key] = options[key] ? options[key] : this[key];
    });
  }
}

@Injectable()
export class HairVm {
  formGroupOptions: { [key: string]: any };

  constructor(private fb: FormBuilder) {
  }

  createHairDetails(options?): HairForm {
    return new HairForm(options);
  }

  createHairDetailsForm(): FormGroup {
    const form = this.createHairDetails();
    form.setValues(this.formGroupOptions);

    return this.fb.group(form);
  }
}
