import {
  Component,
  effect,
  runInInjectionContext,
  signal,
  inject,
  EnvironmentInjector
} from '@angular/core';
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

  // 子に渡す値
  globalState = {
    workKind: '',
    userName: '',
    progress: 0,
    logs: [] as DemoLog[],
  };
  localState = {
    isEnableComplete:   false,
    isEnableCancel:     false,
    isEnableExecute:    false,
    isEnableSelectUser: false,
    isEnableSelectWork: false,
    isVisibleDialog:    false,
    isEnablePlus:       true,
    isEnableMinus:      true,
    isEnableDecide:     true,
    isEnableBack:       true,
  };

  // 「今のサービス」を保持する Signal。最初は undefined でOK。
  private currentService = signal<DemoServiceInterface | undefined>(undefined);

  // DI でサービスを注入
  private serviceDefault = inject(DemoServiceImplDefault);
  private serviceA       = inject(DemoServiceImplA);
  private serviceB       = inject(DemoServiceImplB);
  private serviceC       = inject(DemoServiceImplC);
  private injector       = inject(EnvironmentInjector);

  constructor() {
    this.currentService.set(this.serviceDefault);

    runInInjectionContext(this.injector, () => {
      effect(() => {
        const svc = this.currentService();
        if (!svc) return;
        this.globalState.workKind          = svc.globalState.workKind();
        this.globalState.userName          = svc.globalState.userName();
        this.globalState.progress          = svc.globalState.progress();
        this.globalState.logs              = svc.globalState.logs();
        this.localState.isEnableComplete   = svc.localState.isEnableComplete();
        this.localState.isEnableCancel     = svc.localState.isEnableCancel();
        this.localState.isEnableExecute    = svc.localState.isEnableExecute();
        this.localState.isEnableSelectUser = svc.localState.isEnableSelectUser();
        this.localState.isEnableSelectWork = svc.localState.isEnableSelectWork();
        this.localState.isVisibleDialog    = svc.localState.isVisibleDialog();
        this.localState.isEnablePlus       = svc.localState.isEnablePlus();
        this.localState.isEnableMinus      = svc.localState.isEnableMinus();
        this.localState.isEnableDecide     = svc.localState.isEnableDecide();
        this.localState.isEnableBack       = svc.localState.isEnableBack();
      });
    });
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
