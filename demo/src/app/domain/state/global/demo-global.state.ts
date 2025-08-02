import { Injectable, signal, Signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DemoState {
  private _workKind = signal('未確認');
  private _userName = signal('');
  private _progress = signal(0);

  get workKind(): Signal<string> {
    return this._workKind;
  }
  get userName(): Signal<string> {
    return this._userName;
  }
  get progress(): Signal<number> {
    return this._progress;
  }

  updateProgress() {
    const newProgress: number = this._progress() + 1;
    this._progress.set(newProgress);
  }

  completeWork() {
    this._progress.set(0);
  }

  // Setter相当のメソッドを用意
  selectedWork(value: string): void {
    console.log(value + 'が選択されました。');
    this._workKind.set(value);
    console.log('状態管理クラスのworkKindは現在' + this._workKind)
  }

  selectedUser(value: string): void {
    console.log(value + 'が選択されました。');
    this._userName.set(value);
  }
}
