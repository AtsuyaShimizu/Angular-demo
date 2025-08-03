import { Signal } from "@angular/core";

export interface DemoLocalState {
  readonly isEnableComplete  : Signal<boolean>;
  readonly isEnableCancel    : Signal<boolean>;
  readonly isEnableExecute   : Signal<boolean>;
  readonly isEnableSelectUser: Signal<boolean>;
  readonly isEnableSelectWork: Signal<boolean>;
  readonly isVisibleDialog   : Signal<boolean>;
  readonly isDisablePlus     : Signal<boolean>;
  readonly isDisableMinus    : Signal<boolean>;
  readonly isDisableDecide   : Signal<boolean>;
  readonly isDisableBack     : Signal<boolean>;
}