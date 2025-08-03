import { Component, EventEmitter, Input, Output, Signal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-demo-parts-center',
  standalone: true,
  templateUrl: './demo-parts-center.html',
  styleUrls: ['./demo-parts-center.scss']
})
export class DemoPartsCenter {
  @Input() globalState: { workKind: Signal<string>; progress: Signal<number> } = {
    workKind: signal(''),
    progress: signal(0)
  };
  @Input() localState: {
    isEnableComplete: Signal<boolean>;
    isEnableCancel: Signal<boolean>;
    isEnableExecute: Signal<boolean>;
    isVisibleDialog: Signal<boolean>;
    isDisablePlus: Signal<boolean>;
    isDisableMinus: Signal<boolean>;
    isDisableDecide: Signal<boolean>;
    isDisableBack: Signal<boolean>;
  } = {
    isEnableComplete: signal(false),
    isEnableCancel: signal(false),
    isEnableExecute: signal(false),
    isVisibleDialog: signal(false),
    isDisablePlus: signal(false),
    isDisableMinus: signal(false),
    isDisableDecide: signal(false),
    isDisableBack: signal(false)
  };

  @Output() click_complete_event = new EventEmitter<void>();
  @Output() click_cancel_event   = new EventEmitter<void>();
  @Output() click_execute_event  = new EventEmitter<void>();
  @Output() click_decide_event   = new EventEmitter<number>();
  @Output() click_back_event     = new EventEmitter<void>();

  message: Signal<string> = computed(() =>
    `現在実行中の作業は${this.globalState?.workKind()}です。`
  );

  progressMessage: Signal<string> = computed(() =>
    `完了数：${this.globalState?.progress()}`
  );

  workCount = 1;

  onClickCompleteBtn() {
    this.click_complete_event.emit();
  }

  onClickCancelBtn() {
    this.click_cancel_event.emit();
  }

  onClickExecuteBtn() {
    this.click_execute_event.emit();
  }

  onClickPlusBtn() {
    this.workCount++;
  }

  onClickMinusBtn() {
    if (this.workCount > 1) this.workCount--;
  }

  onClickDecideBtn() {
    this.click_decide_event.emit(this.workCount);
    this.workCount = 1;
  }

  onClickBackBtn() {
    this.click_back_event.emit();
    this.workCount = 1;
  }
}
