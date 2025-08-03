import { Injectable, signal, Signal } from '@angular/core';

export interface DemoLog {
  work: string;
  action: string;
  user: string;
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class DemoState {
  private _workKind = signal('未確認');
  private _userName = signal('');
  private _progress = signal(0);
  private _logs = signal<DemoLog[]>([]);

  get workKind(): Signal<string> {
    return this._workKind;
  }
  get userName(): Signal<string> {
    return this._userName;
  }
  get progress(): Signal<number> {
    return this._progress;
  }

  get logs(): Signal<DemoLog[]> {
    return this._logs;
  }

  updateProgress() {
    const newProgress: number = this._progress() + 1;
    this._progress.set(newProgress);
  }

  completeWork() {
    this._progress.set(0);
  }

  addLog(work: string, action: string, user: string) {
    const entry: DemoLog = {
      work,
      action,
      user,
      timestamp: this.getTimestamp()
    };
    const newLogs = [...this._logs(), entry];
    if (newLogs.length > 20) newLogs.shift();
    this._logs.set(newLogs);
  }

  clearLog() {
    this._logs.set([]);
  }

  deleteLog(index: number) {
    const newLogs = [...this._logs()];
    newLogs.splice(index, 1);
    this._logs.set(newLogs);
  }

  private getTimestamp(): string {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    return `${yyyy}/${mm}/${dd}/${hh}:${min}`;
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
