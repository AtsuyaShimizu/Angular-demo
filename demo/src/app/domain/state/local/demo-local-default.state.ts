import { Injectable, signal, WritableSignal } from "@angular/core";
import { DemoState } from "../global/demo-global.state";
import { DemoLocalState } from "../demo-local-state-interface";
import { PersistentStateAuto } from "../utils/persistent-state-auto";

@Injectable({ providedIn: 'root' })
export class DemoLocalStateDefault extends PersistentStateAuto implements DemoLocalState {
  // Angular の DI から同じ DemoState を注入
  constructor(private globalState: DemoState) {
    super('demo-local-state-default');
  }

  private _isEnableComplete:   WritableSignal<boolean> = signal(false);
  private _isEnableCancel:     WritableSignal<boolean> = signal(false);
  private _isEnableExecute:    WritableSignal<boolean> = signal(false);
  private _isEnableSelectUser: WritableSignal<boolean> = signal(true);
  private _isEnableSelectWork: WritableSignal<boolean> = signal(true);
  private _isVisibleDialog:    WritableSignal<boolean> = signal(false);
  private _isEnablePlus:       WritableSignal<boolean> = signal(true);
  private _isEnableMinus:      WritableSignal<boolean> = signal(true);
  private _isEnableDecide:     WritableSignal<boolean> = signal(true);
  private _isEnableBack:       WritableSignal<boolean> = signal(true);

  get isEnableComplete(): WritableSignal<boolean> {
    return this._isEnableComplete;
  }
  get isEnableCancel(): WritableSignal<boolean> {
    return this._isEnableCancel;
  }
  get isEnableExecute(): WritableSignal<boolean> {
    return this._isEnableExecute;
  }
  get isEnableSelectUser(): WritableSignal<boolean> {
    return this._isEnableSelectUser;
  }
  get isEnableSelectWork(): WritableSignal<boolean> {
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