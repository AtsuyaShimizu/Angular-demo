import { Injectable, signal, Signal } from "@angular/core";
import { DemoState } from "../global/demo-global.state";
import { DemoLocalState } from "../demo-local-state-interface";

@Injectable({ providedIn: 'root' })
export class DemoLocalStateDefault implements DemoLocalState {
  // Angular の DI から同じ DemoState を注入
  constructor(private globalState: DemoState) {}

  private _isEnableComplete = signal(false);
  private _isEnableCancel   = signal(false);

  get isEnableComplete(): Signal<boolean> {
    return this._isEnableComplete;
  }
  get isEnableCancel(): Signal<boolean> {
    return this._isEnableCancel;
  }
}