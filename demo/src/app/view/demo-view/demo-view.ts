import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    workKind: string;
    userName: string;
    progress: number;
    logs: DemoLog[];
  } = {
    workKind: '',
    userName: '',
    progress: 0,
    logs: [],
  };
  @Input() localState: {
    isEnableComplete: boolean;
    isEnableCancel: boolean;
    isEnableExecute: boolean;
    isEnableSelectUser: boolean;
    isEnableSelectWork: boolean;
    isVisibleDialog: boolean;
    isEnablePlus: boolean;
    isEnableMinus: boolean;
    isEnableDecide: boolean;
    isEnableBack: boolean;
  } = {
    isEnableComplete: false,
    isEnableCancel: false,
    isEnableExecute: false,
    isEnableSelectUser: false,
    isEnableSelectWork: false,
    isVisibleDialog: false,
    isEnablePlus: true,
    isEnableMinus: true,
    isEnableDecide: true,
    isEnableBack: true,
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
