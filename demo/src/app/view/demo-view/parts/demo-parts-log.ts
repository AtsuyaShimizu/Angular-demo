import { Component, inject } from '@angular/core';
import { DemoState } from '../../../domain/state/global/demo-global.state';

@Component({
  selector: 'app-demo-parts-log',
  standalone: true,
  templateUrl: './demo-parts-log.html',
  styleUrls: ['./demo-parts-log.scss']
})
export class DemoPartsLog {
  private demoState = inject(DemoState);
  log = this.demoState.logs;
}
