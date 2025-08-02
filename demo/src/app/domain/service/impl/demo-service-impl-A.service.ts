import { Injectable } from '@angular/core';
import { DemoState } from '../../state/global/demo-global.state';
import { DemoLocalStateA } from '../../state/local/demo-local-A.state';
import { DemoServiceInterface } from '../demo-service-interface';

/**
 * 作業A用サービス実装
 * - globalStateとlocalStateはDIにより同一インスタンスを注入
 */
@Injectable({ providedIn: 'root' })
export class DemoServiceImplA implements DemoServiceInterface {
  constructor(
    public readonly globalState: DemoState,
    public readonly localState: DemoLocalStateA
  ) {}

  executeWork(): void {
    console.log('作業A実行');
    this.globalState.updateProgress();
  }

  completeWork(): void {
    this.globalState.completeWork();
    console.log('作業A完了');
  }

  cancelWork(): void {
    console.log('作業Aキャンセル');
  }

  selectUser(name: string): void {
    this.globalState.selectedUser(name);
    console.log('ユーザ変更:', name);
  }

  selectWork(kind: string): void {
    this.globalState.selectedWork(kind);
    console.log('作業変更:', kind);
  }
}
