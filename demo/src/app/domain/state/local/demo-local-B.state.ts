import { computed, Injectable, Signal } from "@angular/core";
import { DemoState } from "../global/demo-global.state";
import { DemoLocalState } from "../demo-local-state-interface";

@Injectable({ providedIn: 'root' })
export class DemoLocalStateB implements DemoLocalState {
  // Angular の DI から同じ DemoState を注入
  constructor(private globalState: DemoState) {}

  private _isEnableComplete = computed(() => this.globalState.progress() >= 7);
  private _isEnableCancel   = computed(() => this.globalState.progress() < 7);
  private _isEnableExecute  = computed(() => this.globalState.progress() < 7);
  private _isEnableSelectUser = computed(() => false);
  private _isEnableSelectWork = computed(() => false);

  get isEnableComplete(): Signal<boolean> {
    return this._isEnableComplete;
  }
  get isEnableCancel(): Signal<boolean> {
    return this._isEnableCancel;
  }
  get isEnableExecute(): Signal<boolean> {
    return this._isEnableExecute;
  }
  get isEnableSelectUser(): Signal<boolean> {
    return this._isEnableSelectUser;
  }
  get isEnableSelectWork(): Signal<boolean> {
    return this._isEnableSelectWork;
  }
}