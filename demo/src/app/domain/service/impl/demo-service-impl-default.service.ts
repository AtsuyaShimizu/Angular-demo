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
    console.log('作業未選択のため何もしない。');
  }

  completeWork(): void {
    this.globalState.completeWork();
    this.globalState.selectedUser('');
    this.globalState.selectedWork('未確認');
    console.log('作業未選択のため何もしない。');
  }

  cancelWork(): void {
    console.log('作業未選択のため何もしない。');
  }

  selectUser(name: string): void {
    this.globalState.selectedUser(name);
    console.log('作業者' + name + 'が選択されました。');
  }

  selectWork(kind: string): void {
    this.globalState.selectedWork(kind);
    console.log('作業' + kind + 'が選択されました。');
  }
}
