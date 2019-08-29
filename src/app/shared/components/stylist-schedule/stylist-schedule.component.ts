import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ControlContainer, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-stylist-schedule',
  templateUrl: './stylist-schedule.component.html',
  styleUrls: ['./stylist-schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StylistScheduleComponent implements OnInit, OnDestroy {
  @Input() dateFormat: string;

  private alive = true;
  private parentForm: FormGroup;

  constructor(public controlContainer: ControlContainer) {
  }

  ngOnInit() {
    this.parentForm = this.controlContainer.control.parent as FormGroup;
  }


  ngOnDestroy() {
    this.alive = false;
  }
}
