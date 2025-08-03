import { Signal } from "@angular/core";

export interface DemoLocalState {
  readonly isEnableComplete  : Signal<boolean>;
  readonly isEnableCancel    : Signal<boolean>;
  readonly isEnableExecute   : Signal<boolean>;
  readonly isEnableSelectUser: Signal<boolean>;
  readonly isEnableSelectWork: Signal<boolean>;
  readonly isVisibleDialog: Signal<boolean>;
  readonly isEnablePlus: Signal<boolean>;
  readonly isEnableMinus: Signal<boolean>;
  readonly isEnableDecide: Signal<boolean>;
  readonly isEnableBack: Signal<boolean>;
}