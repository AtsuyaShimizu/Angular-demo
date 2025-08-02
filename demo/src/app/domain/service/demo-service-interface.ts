import { DemoLocalState } from "../state/demo-local-state-interface";
import { DemoState } from "../state/global/demo-global.state";

export interface DemoServiceInterface {
  readonly globalState: DemoState;
  readonly localState : DemoLocalState;

  executeWork() : void;
  completeWork(): void;
  cancelWork()  : void;
  selectWork(work: string)  : void;
  selectUser(user: string)  : void;
}
