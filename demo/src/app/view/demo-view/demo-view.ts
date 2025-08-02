import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { DemoPartsSelect } from './parts/demo-parts-select';
import { DemoPartsCenter } from './parts/demo-parts-center';
import { DemoPartsLog } from './parts/demo-parts-log';

@Component({
  selector: 'app-demo-view',
  standalone: true,
  imports: [DemoPartsSelect, DemoPartsCenter, DemoPartsLog],
  templateUrl: './demo-view.html',
  styleUrls: ['./demo-view.scss']
})
export class DemoView {
  @Input() globalState: { workKind: Signal<string>; userName: Signal<string> } = {
    workKind: signal(''),
    userName: signal('')
  };
  @Input() localState: {
    isEnableComplete: Signal<boolean>;
    isEnableCancel: Signal<boolean>;
    isEnableExecute: Signal<boolean>;
    isEnableSelectUser: Signal<boolean>;
    isEnableSelectWork: Signal<boolean>;
  } = {
    isEnableComplete: signal(false),
    isEnableCancel: signal(false),
    isEnableExecute: signal(false),
    isEnableSelectUser: signal(false),
    isEnableSelectWork: signal(false)
  };
  @Input() userList: string[] = [];
  @Input() workList: string[] = [];

  @Output() click_complete_event = new EventEmitter<void>();
  @Output() click_cancel_event   = new EventEmitter<void>();
  @Output() click_execute_event  = new EventEmitter<void>();
  @Output() select_work          = new EventEmitter<string>();
  @Output() select_user          = new EventEmitter<string>();

}
