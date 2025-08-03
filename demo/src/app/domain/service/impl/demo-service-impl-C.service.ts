import { Injectable } from '@angular/core';
import { DemoState } from '../../state/global/demo-global.state';
import { DemoLocalStateC } from '../../state/local/demo-local-C.state';
import { DemoServiceInterface } from '../demo-service-interface';

@Injectable({ providedIn: 'root' })
export class DemoServiceImplC implements DemoServiceInterface {
  constructor(
    public readonly globalState: DemoState,
    public readonly localState: DemoLocalStateC
  ) {}

  executeWork(count: number): void {
    if (!this.localState.isVisibleDialog()) {
      this.localState.setDialogVisible(true);
      return;
    }
    console.log('作業C実行');
    this.globalState.updateProgress(count);
    this.globalState.addLog(
      this.globalState.workKind(),
      '実行',
      this.globalState.userName(),
      count
    );
    this.localState.setDialogVisible(false);
  }

  completeWork(): void {
    this.globalState.addLog(this.globalState.workKind(), '完了', this.globalState.userName());
    this.globalState.completeWork();
    this.globalState.selectedUser('');
    this.globalState.selectedWork('未確認');
    console.log('作業C完了');
  }

  cancelWork(): void {
    this.globalState.addLog(this.globalState.workKind(), 'キャンセル', this.globalState.userName());
    this.globalState.completeWork();
    this.globalState.selectedUser('');
    this.globalState.selectedWork('未確認');
    console.log('作業Cキャンセル');
  }

  selectUser(name: string): void {
    this.globalState.selectedUser(name);
    console.log('ユーザ変更:', name);
  }

  selectWork(kind: string): void {
    this.globalState.selectedWork(kind);
    this.globalState.addLog(kind, '選択', this.globalState.userName());
    console.log('作業変更:', kind);
  }

  deleteLog(index: number): void {
    this.globalState.deleteLog(index);
  }

  backWork(): void {
    this.localState.setDialogVisible(false);
  }
}
