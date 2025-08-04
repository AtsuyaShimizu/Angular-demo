import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo-parts-dialog',
  standalone: true,
  templateUrl: './demo-parts-dialog.html',
  styleUrls: ['./demo-parts-dialog.scss']
})
export class DemoPartsDialog {
  @Input() localState: {
    isEnablePlus: boolean;
    isEnableMinus: boolean;
    isEnableDecide: boolean;
    isEnableBack: boolean;
  } = {
    isEnablePlus: true,
    isEnableMinus: true,
    isEnableDecide: true,
    isEnableBack: true,
  };

  @Output() click_decide_event = new EventEmitter<number>();
  @Output() click_back_event = new EventEmitter<void>();

  workCount = 1;

  onClickPlusBtn() {
    this.workCount++;
  }

  onClickMinusBtn() {
    if (this.workCount > 1) this.workCount--;
  }

  onClickDecideBtn() {
    this.click_decide_event.emit(this.workCount);
    this.workCount = 1;
  }

  onClickBackBtn() {
    this.click_back_event.emit();
    this.workCount = 1;
  }
}
