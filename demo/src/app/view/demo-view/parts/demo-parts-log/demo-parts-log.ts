import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { DemoLog } from '../../../../domain/state/global/demo-global.state';

@Component({
  selector: 'app-demo-parts-log',
  standalone: true,
  templateUrl: './demo-parts-log.html',
  styleUrls: ['./demo-parts-log.scss']
})
export class DemoPartsLog {
  @Input() log: Signal<DemoLog[]> = signal([]);
  @Output() remove_log = new EventEmitter<number>();

  remove(index: number) {
    this.remove_log.emit(index);
  }
}
