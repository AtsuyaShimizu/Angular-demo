import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { DemoPartsSelect } from './parts/demo-parts-select/demo-parts-select';
import { DemoPartsCenter } from './parts/demo-parts-center/demo-parts-center';
import { DemoPartsLog } from './parts/demo-parts-log/demo-parts-log';

@Component({
  selector: 'app-demo-view',
  standalone: true,
  imports: [DemoPartsSelect, DemoPartsCenter, DemoPartsLog],
  templateUrl: './demo-view.html',
  styleUrls: ['./demo-view.scss']
})
export class DemoView {
  @Input() globalState: {
    workKind: Signal<string>;
    userName: Signal<string>;
    progress: Signal<number>;
  } = {
    workKind: signal(''),
    userName: signal(''),
    progress: signal(0),
  };
  @Input() localState: {
    isEnableComplete: Signal<boolean>;
    isEnableCancel: Signal<boolean>;
    isEnableExecute: Signal<boolean>;
    isEnableSelectUser: Signal<boolean>;
    isEnableSelectWork: Signal<boolean>;
    isVisibleDialog: Signal<boolean>;
    isDisablePlus: Signal<boolean>;
    isDisableMinus: Signal<boolean>;
    isDisableDecide: Signal<boolean>;
    isDisableBack: Signal<boolean>;
  } = {
    isEnableComplete: signal(false),
    isEnableCancel: signal(false),
    isEnableExecute: signal(false),
    isEnableSelectUser: signal(false),
    isEnableSelectWork: signal(false),
    isVisibleDialog: signal(false),
    isDisablePlus: signal(false),
    isDisableMinus: signal(false),
    isDisableDecide: signal(false),
    isDisableBack: signal(false)
  };
  @Input() userList: string[] = [];
  @Input() workList: string[] = [];

  @Output() click_complete_event = new EventEmitter<void>();
  @Output() click_cancel_event   = new EventEmitter<void>();
  @Output() click_execute_event  = new EventEmitter<void>();
  @Output() click_decide_event   = new EventEmitter<number>();
  @Output() click_back_event     = new EventEmitter<void>();
  @Output() select_work          = new EventEmitter<string>();
  @Output() select_user          = new EventEmitter<string>();

}
