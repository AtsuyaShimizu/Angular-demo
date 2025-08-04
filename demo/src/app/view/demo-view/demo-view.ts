import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';
import { DemoLog } from '../../domain/state/global/demo-global.state';
import { DemoPartsSelect } from '../parts/demo-parts-select/demo-parts-select';
import { DemoPartsCenter } from '../parts/demo-parts-center/demo-parts-center';
import { DemoPartsLog } from '../parts/demo-parts-log/demo-parts-log';
import { DemoPartsDialog } from '../parts/demo-parts-dialog/demo-parts-dialog';

@Component({
  selector: 'app-demo-view',
  standalone: true,
  imports: [DemoPartsSelect, DemoPartsCenter, DemoPartsLog, DemoPartsDialog],
  templateUrl: './demo-view.html',
  styleUrls: ['./demo-view.scss']
})
export class DemoView {
  @Input() globalState: {
    workKind: Signal<string>;
    userName: Signal<string>;
    progress: Signal<number>;
    logs: Signal<DemoLog[]>;
  } = {
    workKind: signal(''),
    userName: signal(''),
    progress: signal(0),
    logs: signal([]),
  };
  @Input() localState: {
    isEnableComplete: Signal<boolean>;
    isEnableCancel: Signal<boolean>;
    isEnableExecute: Signal<boolean>;
    isEnableSelectUser: Signal<boolean>;
    isEnableSelectWork: Signal<boolean>;
    isVisibleDialog: Signal<boolean>;
    isEnablePlus: Signal<boolean>;
    isEnableMinus: Signal<boolean>;
    isEnableDecide: Signal<boolean>;
    isEnableBack: Signal<boolean>;
  } = {
    isEnableComplete: signal(false),
    isEnableCancel: signal(false),
    isEnableExecute: signal(false),
    isEnableSelectUser: signal(false),
    isEnableSelectWork: signal(false),
    isVisibleDialog: signal(false),
    isEnablePlus: signal(true),
    isEnableMinus: signal(true),
    isEnableDecide: signal(true),
    isEnableBack: signal(true)
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
  @Output() remove_log           = new EventEmitter<number>();

}
