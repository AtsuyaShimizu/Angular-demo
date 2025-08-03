import { Injectable } from "@angular/core";
import { DemoState } from "../../state/global/demo-global.state";
import { DemoLocalStateDefault } from "../../state/local/demo-local-default.state";
import { DemoServiceInterface } from "../demo-service-interface";

@Injectable({ providedIn: 'root' })
export class DemoServiceImplDefault implements DemoServiceInterface {
  constructor(
    public readonly globalState: DemoState,
    public readonly localState: DemoLocalStateDefault
  ) {}

  executeWork(): void {
    this.globalState.addLog(this.globalState.workKind(), '実行', this.globalState.userName());
    console.log('作業未選択のため何もしない。');
  }

  completeWork(): void {
    this.globalState.addLog(this.globalState.workKind(), '完了', this.globalState.userName());
    this.globalState.completeWork();
    this.globalState.selectedUser('');
    this.globalState.selectedWork('未確認');
    console.log('作業未選択のため何もしない。');
  }

  cancelWork(): void {
    this.globalState.addLog(this.globalState.workKind(), 'キャンセル', this.globalState.userName());
    this.globalState.completeWork();
    this.globalState.selectedUser('');
    this.globalState.selectedWork('未確認');
    console.log('作業未選択のため何もしない。');
  }

  selectUser(name: string): void {
    this.globalState.selectedUser(name);
    console.log('作業者' + name + 'が選択されました。');
  }

  selectWork(kind: string): void {
    this.globalState.selectedWork(kind);
    this.globalState.addLog(kind, '選択', this.globalState.userName());
    console.log('作業' + kind + 'が選択されました。');
  }
}
