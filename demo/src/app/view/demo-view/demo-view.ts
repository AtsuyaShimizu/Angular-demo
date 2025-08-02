import { Component, computed, effect, EventEmitter, Input, Output, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-demo-view',
  templateUrl: './demo-view.html',
  styleUrls: ['./demo-view.scss']
})
export class DemoView {
  @Input() globalState!: { workKind: Signal<string>, userName: Signal<string> };
  @Input() localState!: { isEnableComplete: Signal<boolean>, isEnableCancel: Signal<boolean> };
  @Input() userList: string[] = [];
  @Input() workList: string[] = [];

  @Output() click_complete_event = new EventEmitter<void>();
  @Output() click_cancel_event   = new EventEmitter<void>();
  @Output() click_execute_event  = new EventEmitter<void>();
  @Output() select_work          = new EventEmitter<string>();
  @Output() select_user          = new EventEmitter<string>();

  message: Signal<string> = computed(() =>
    `現在実行中の作業は${this.globalState?.workKind()}です。`
  );

  log = signal<string[]>([]);

  constructor() {
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

  onSelectUser(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.select_user.emit(value);
  }

  onSelectWork(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.select_work.emit(value);
  }
}
