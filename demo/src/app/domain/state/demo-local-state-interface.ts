import { Signal, WritableSignal } from "@angular/core";

export interface DemoLocalState {
  readonly isEnableComplete  : Signal<boolean>;
  readonly isEnableCancel    : Signal<boolean>;
  readonly isEnableExecute   : Signal<boolean>;
  readonly isEnableSelectUser: Signal<boolean>;
  readonly isEnableSelectWork: Signal<boolean>;
  readonly isVisibleDialog   : WritableSignal<boolean>;
  readonly isEnablePlus      : WritableSignal<boolean>;
  readonly isEnableMinus     : WritableSignal<boolean>;
  readonly isEnableDecide    : WritableSignal<boolean>;
  readonly isEnableBack      : WritableSignal<boolean>;
}