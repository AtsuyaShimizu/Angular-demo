import { Component, EventEmitter, Input, Output, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-demo-parts-select',
  standalone: true,
  templateUrl: './demo-parts-select.html',
  styleUrls: ['./demo-parts-select.scss']
})
export class DemoPartsSelect {
  @Input() globalState: { workKind: Signal<string>; userName: Signal<string> } = {
    workKind: signal(''),
    userName: signal('')
  };
  @Input() localState: {
    isEnableSelectUser: Signal<boolean>;
    isEnableSelectWork: Signal<boolean>;
  } = {
    isEnableSelectUser: signal(false),
    isEnableSelectWork: signal(false)
  };
  @Input() userList: string[] = [];
  @Input() workList: string[] = [];

  @Output() select_user = new EventEmitter<string>();
  @Output() select_work = new EventEmitter<string>();

  onSelectUser(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.select_user.emit(value);
  }

  onSelectWork(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.select_work.emit(value);
  }
}

