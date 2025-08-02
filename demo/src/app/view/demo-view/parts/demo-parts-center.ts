import { Component, EventEmitter, Input, Output, Signal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-demo-parts-center',
  standalone: true,
  templateUrl: './demo-parts-center.html',
  styleUrls: ['./demo-parts-center.scss']
})
export class DemoPartsCenter {
  @Input() globalState: { workKind: Signal<string> } = {
    workKind: signal('')
  };
  @Input() localState: {
    isEnableComplete: Signal<boolean>;
    isEnableCancel: Signal<boolean>;
    isEnableExecute: Signal<boolean>;
  } = {
    isEnableComplete: signal(false),
    isEnableCancel: signal(false),
    isEnableExecute: signal(false)
  };

  @Output() click_complete_event = new EventEmitter<void>();
  @Output() click_cancel_event   = new EventEmitter<void>();
  @Output() click_execute_event  = new EventEmitter<void>();

  message: Signal<string> = computed(() =>
    `現在実行中の作業は${this.globalState?.workKind()}です。`
  );

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
