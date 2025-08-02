import { Injectable } from "@angular/core";
import { DemoState } from "../../state/global/demo-global.state";
import { DemoLocalStateB } from "../../state/local/demo-local-B.state";
import { DemoServiceInterface } from "../demo-service-interface";

@Injectable({ providedIn: 'root' })
export class DemoServiceImplB implements DemoServiceInterface {
  constructor(
    public readonly globalState: DemoState,
    public readonly localState: DemoLocalStateB
  ) {}

  executeWork(): void {
    console.log('作業B実行');
    this.globalState.updateProgress();
  }

  completeWork(): void {
    this.globalState.completeWork();
    console.log('作業B完了');
  }

  cancelWork(): void {
    console.log('作業Bキャンセル');
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
