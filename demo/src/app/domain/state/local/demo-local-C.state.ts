import { computed, Injectable, Signal, signal } from '@angular/core';
import { DemoState } from '../global/demo-global.state';
import { DemoLocalState } from '../demo-local-state-interface';

@Injectable({ providedIn: 'root' })
export class DemoLocalStateC implements DemoLocalState {
  constructor(private globalState: DemoState) {}

  private _isEnableComplete = computed(() => this.globalState.progress() >= 10);
  private _isEnableCancel   = computed(() => this.globalState.progress() < 10);
  private _isEnableExecute  = computed(() => this.globalState.progress() < 10);
  private _isEnableSelectUser = computed(() => false);
  private _isEnableSelectWork = computed(() => false);

  private _isVisibleDialog = signal(false);
  private _isDisablePlus   = signal(false);
  private _isDisableMinus  = signal(false);
  private _isDisableDecide = signal(false);
  private _isDisableBack   = signal(false);

  get isEnableComplete(): Signal<boolean> { return this._isEnableComplete; }
  get isEnableCancel(): Signal<boolean> { return this._isEnableCancel; }
  get isEnableExecute(): Signal<boolean> { return this._isEnableExecute; }
  get isEnableSelectUser(): Signal<boolean> { return this._isEnableSelectUser; }
  get isEnableSelectWork(): Signal<boolean> { return this._isEnableSelectWork; }
  get isVisibleDialog(): Signal<boolean> { return this._isVisibleDialog; }
  get isDisablePlus(): Signal<boolean> { return this._isDisablePlus; }
  get isDisableMinus(): Signal<boolean> { return this._isDisableMinus; }
  get isDisableDecide(): Signal<boolean> { return this._isDisableDecide; }
  get isDisableBack(): Signal<boolean> { return this._isDisableBack; }

  setDialogVisible(flag: boolean) {
    this._isVisibleDialog.set(flag);
  }
}
