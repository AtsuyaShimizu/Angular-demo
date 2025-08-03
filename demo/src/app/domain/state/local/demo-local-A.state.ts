import { computed, Injectable, Signal, signal } from "@angular/core";
import { DemoState } from "../global/demo-global.state";
import { DemoLocalState } from "../demo-local-state-interface";

@Injectable({ providedIn: 'root' })
export class DemoLocalStateA implements DemoLocalState {
  // Angular の DI から同じ DemoState を注入
  constructor(private globalState: DemoState) {}

  private _isEnableComplete = computed(() => this.globalState.progress() >= 10);
  private _isEnableCancel   = computed(() => this.globalState.progress() < 10);
  private _isEnableExecute  = computed(() => this.globalState.progress() < 10);
  private _isEnableSelectUser = computed(() => false);
  private _isEnableSelectWork = computed(() => false);
  private _isVisibleDialog = signal(false);
  private _isEnablePlus   = signal(true);
  private _isEnableMinus  = signal(true);
  private _isEnableDecide = signal(true);
  private _isEnableBack   = signal(true);

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
  get isVisibleDialog(): Signal<boolean> {
    return this._isVisibleDialog;
  }
  get isEnablePlus(): Signal<boolean> {
    return this._isEnablePlus;
  }
  get isEnableMinus(): Signal<boolean> {
    return this._isEnableMinus;
  }
  get isEnableDecide(): Signal<boolean> {
    return this._isEnableDecide;
  }
  get isEnableBack(): Signal<boolean> {
    return this._isEnableBack;
  }
}