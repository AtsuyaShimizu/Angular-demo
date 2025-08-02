import { computed, Injectable, Signal } from "@angular/core";
import { DemoState } from "../global/demo-global.state";
import { DemoLocalState } from "../demo-local-state-interface";

@Injectable({ providedIn: 'root' })
export class DemoLocalStateA implements DemoLocalState {
  // Angular の DI から同じ DemoState を注入
  constructor(private globalState: DemoState) {}

  private _isEnableComplete = computed(() => this.globalState.progress() >= 10);
  private _isEnableCancel   = computed(() => this.globalState.progress() < 10);

  get isEnableComplete(): Signal<boolean> {
    return this._isEnableComplete;
  }
  get isEnableCancel(): Signal<boolean> {
    return this._isEnableCancel;
  }
}