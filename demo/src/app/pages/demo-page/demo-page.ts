import { Component, signal, inject } from '@angular/core';
import { DemoServiceInterface } from '../../domain/service/demo-service-interface';
import { DemoServiceImplA } from '../../domain/service/impl/demo-service-impl-A.service';
import { DemoServiceImplB } from '../../domain/service/impl/demo-service-impl-B.service';
import { DemoServiceImplDefault } from '../../domain/service/impl/demo-service-impl-default.service';
import { DemoServiceImplC } from '../../domain/service/impl/demo-service-impl-C.service';
import { DemoView } from '../../view/demo-view/demo-view';
import { DemoLog } from '../../domain/state/global/demo-global.state';

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [DemoView],
  templateUrl: './demo-page.html',
  styleUrls: ['./demo-page.scss']
})
export class DemoPage {
  workList = ['作業A', '作業B', '作業C'];
  userList = ['Aoki', 'Yamada', 'Suzuki', 'Tanaka'];

  // 「今のサービス」を保持する Signal。最初は undefined でOK。
  private currentService = signal<DemoServiceInterface | undefined>(undefined);

  // DI でサービスを注入
  private serviceDefault = inject(DemoServiceImplDefault);
  private serviceA       = inject(DemoServiceImplA);
  private serviceB       = inject(DemoServiceImplB);
  private serviceC       = inject(DemoServiceImplC);

  constructor() {
    this.currentService.set(this.serviceDefault);
    queueMicrotask(() => this.restoreCurrentService());
  }

  private restoreCurrentService() {
    const work = this.serviceDefault.globalState.workKind();
    const next = work === '作業A'
      ? this.serviceA
      : work === '作業B'
        ? this.serviceB
        : work === '作業C'
          ? this.serviceC
          : this.serviceDefault;
    this.currentService.set(next);
  }

  get globalState(): { workKind: string; userName: string; progress: number; logs: DemoLog[] } {
    const svc = this.currentService();
    return {
      workKind: svc?.globalState.workKind() ?? '',
      userName: svc?.globalState.userName() ?? '',
      progress: svc?.globalState.progress() ?? 0,
      logs: svc?.globalState.logs() ?? [],
    };
  }

  get localState(): {
    isEnableComplete: boolean;
    isEnableCancel: boolean;
    isEnableExecute: boolean;
    isEnableSelectUser: boolean;
    isEnableSelectWork: boolean;
    isVisibleDialog: boolean;
    isEnablePlus: boolean;
    isEnableMinus: boolean;
    isEnableDecide: boolean;
    isEnableBack: boolean;
  } {
    const svc = this.currentService();
    return {
      isEnableComplete: svc?.localState.isEnableComplete() ?? false,
      isEnableCancel: svc?.localState.isEnableCancel() ?? false,
      isEnableExecute: svc?.localState.isEnableExecute() ?? false,
      isEnableSelectUser: svc?.localState.isEnableSelectUser() ?? false,
      isEnableSelectWork: svc?.localState.isEnableSelectWork() ?? false,
      isVisibleDialog: svc?.localState.isVisibleDialog() ?? false,
      isEnablePlus: svc?.localState.isEnablePlus() ?? true,
      isEnableMinus: svc?.localState.isEnableMinus() ?? true,
      isEnableDecide: svc?.localState.isEnableDecide() ?? true,
      isEnableBack: svc?.localState.isEnableBack() ?? true,
    };
  }

  onComplete() {
    this.currentService()?.completeWork();
    this.currentService.set(this.serviceDefault);
  }

  onCancel() {
    this.currentService()?.cancelWork();
    this.currentService.set(this.serviceDefault);
  }

  onExecute() {
    this.currentService()?.executeWork(1);
  }

  onDecide(count: number) {
    this.currentService()?.executeWork(count);
  }

  onBack() {
    this.currentService()?.backWork();
  }

  onRemoveLog(index: number) {
    this.currentService()?.deleteLog(index);
  }

  onSelectUser(user: string) {
    const svc = this.currentService();
    svc?.selectUser(user);

    const work = svc?.globalState.workKind();
    if (!work || work === '未確認') return;

    const next = work === '作業A'
      ? this.serviceA
      : work === '作業B'
        ? this.serviceB
        : work === '作業C'
          ? this.serviceC
          : this.serviceDefault;

    if (next !== this.currentService()) {
      this.currentService.set(next);
      next.selectWork(work);
    }
  }

  onSelectWork(work: string) {
    const svc = this.currentService();
    const user = svc?.globalState.userName();
    if (!user) {
      svc?.selectWork(work);
      return;
    }

    const next = work === '作業A'
      ? this.serviceA
      : work === '作業B'
        ? this.serviceB
        : work === '作業C'
          ? this.serviceC
          : this.serviceDefault;
    this.currentService.set(next);
    next.selectWork(work);
  }
}
