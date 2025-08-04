import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-parts-center',
  standalone: true,
  templateUrl: './demo-parts-center.html',
  styleUrls: ['./demo-parts-center.scss']
})
export class DemoPartsCenter {
  @Input() globalState: { workKind: string; progress: number } = {
    workKind: '',
    progress: 0,
  };
  @Input() localState: {
    isEnableComplete: boolean;
    isEnableCancel: boolean;
    isEnableExecute: boolean;
  } = {
    isEnableComplete: false,
    isEnableCancel: false,
    isEnableExecute: false,
  };

  @Output() click_complete_event = new EventEmitter<void>();
  @Output() click_cancel_event   = new EventEmitter<void>();
  @Output() click_execute_event  = new EventEmitter<void>();

  get message(): string {
    return `現在実行中の作業は${this.globalState?.workKind}です。`;
  }

  get progressMessage(): string {
    return `完了数：${this.globalState?.progress}`;
  }

  onClickCompleteBtn() {
    this.click_complete_event.emit();
  }

  onClickCancelBtn() {
    this.click_cancel_event.emit();
  }

  onClickExecuteBtn() {
    this.click_execute_event.emit();
  }
}
