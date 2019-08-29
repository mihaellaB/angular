import {assign, isEmpty, reduce} from 'lodash';

export class StylistScheduleGroup {
  lastName = '';
  firstName = '';
  hairStylistName = '';
  phone = '';
  email = '';

  constructor(res?: any, props?: any) {
    if (!res || isEmpty(res)) {
      return;
    }

    if (props) {
      const stylistScheduleGroup = reduce(props, function (memo, value, key) {
        memo[key] = res[props[key]];
        return memo;
      }, {});

      assign(this, stylistScheduleGroup);
    } else {
      assign(this, res);
    }
  }
}
