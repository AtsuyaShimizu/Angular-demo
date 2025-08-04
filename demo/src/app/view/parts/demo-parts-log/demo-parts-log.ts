import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DemoLog } from '../../../domain/state/global/demo-global.state';

@Component({
  selector: 'app-demo-parts-log',
  standalone: true,
  templateUrl: './demo-parts-log.html',
  styleUrls: ['./demo-parts-log.scss']
})
export class DemoPartsLog {
  @Input() log: DemoLog[] = [];
  @Output() remove_log = new EventEmitter<number>();

  remove(index: number) {
    this.remove_log.emit(index);
  }
}
