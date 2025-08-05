import { computed, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { DemoState } from "../global/demo-global.state";
import { DemoLocalState } from "../demo-local-state-interface";
import { PersistentStateAuto } from "../utils/persistent-state-auto";

@Injectable({ providedIn: 'root' })
export class DemoLocalStateB extends PersistentStateAuto implements DemoLocalState {
  // Angular の DI から同じ DemoState を注入
  constructor(private globalState: DemoState) {
    super('demo-local-state-B');
  }

  private _isEnableComplete = computed(() => this.globalState.progress() >= 7);
  private _isEnableCancel   = computed(() => this.globalState.progress() < 7);
  private _isEnableExecute  = computed(() => this.globalState.progress() < 7);
  private _isEnableSelectUser = computed(() => false);
  private _isEnableSelectWork = computed(() => false);
  private _isVisibleDialog: WritableSignal<boolean> = signal(false);
  private _isEnablePlus:   WritableSignal<boolean> = signal(true);
  private _isEnableMinus:  WritableSignal<boolean> = signal(true);
  private _isEnableDecide: WritableSignal<boolean> = signal(true);
  private _isEnableBack:   WritableSignal<boolean> = signal(true);

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
  get isVisibleDialog(): WritableSignal<boolean> {
    return this._isVisibleDialog;
  }
  get isEnablePlus(): WritableSignal<boolean> {
    return this._isEnablePlus;
  }
  get isEnableMinus(): WritableSignal<boolean> {
    return this._isEnableMinus;
  }
  get isEnableDecide(): WritableSignal<boolean> {
    return this._isEnableDecide;
  }
  get isEnableBack(): WritableSignal<boolean> {
    return this._isEnableBack;
  }
}