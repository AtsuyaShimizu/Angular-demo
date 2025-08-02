import { Signal } from "@angular/core";

export interface DemoLocalState {
  readonly isEnableComplete: Signal<boolean>;
  readonly isEnableCancel: Signal<boolean>;
}