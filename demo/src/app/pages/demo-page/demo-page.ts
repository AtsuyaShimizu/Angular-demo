import {
  Component,
  effect,
  runInInjectionContext,
  signal,
  Signal,
  inject,
  EnvironmentInjector
} from '@angular/core';
import { DemoServiceInterface } from '../../domain/service/demo-service-interface';
import { DemoServiceImplA } from '../../domain/service/impl/demo-service-impl-A.service';
import { DemoServiceImplB } from '../../domain/service/impl/demo-service-impl-B.service';
import { DemoServiceImplDefault } from '../../domain/service/impl/demo-service-impl-default.service';
import { DemoView } from '../../view/demo-view/demo-view';

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [DemoView],
  templateUrl: './demo-page.html',
  styleUrls: ['./demo-page.scss']
})
export class DemoPage {
  workList = ['作業A', '作業B'];
  userList = ['Aoki', 'Yamada', 'Suzuki', 'Tanaka'];

  // 子に渡す中継シグナル
  globalState = {
    workKind: signal(''),
    userName: signal('')
  };
  localState = {
    isEnableComplete:   signal(false),
    isEnableCancel:     signal(false),
    isEnableExecute:    signal(false),
    isEnableSelectUser: signal(false),
    isEnableSelectWork: signal(false)
  };

  // 「今のサービス」を保持する Signal。最初は undefined でOK。
  private currentService = signal<DemoServiceInterface | undefined>(undefined);

  // DI でサービスを注入
  private serviceDefault = inject(DemoServiceImplDefault);
  private serviceA       = inject(DemoServiceImplA);
  private serviceB       = inject(DemoServiceImplB);
  private injector       = inject(EnvironmentInjector);

  constructor() {
    this.currentService.set(this.serviceDefault);

    runInInjectionContext(this.injector, () => {
      effect(() => {
        const svc = this.currentService();
        if (!svc) return;
        this.globalState.workKind.set( svc.globalState.workKind() );
        this.globalState.userName .set( svc.globalState.userName() );
        this.localState.isEnableComplete  .set( svc.localState.isEnableComplete() );
        this.localState.isEnableCancel    .set( svc.localState.isEnableCancel() );
        this.localState.isEnableExecute   .set( svc.localState.isEnableExecute() );
        this.localState.isEnableSelectUser.set( svc.localState.isEnableSelectUser() );
        this.localState.isEnableSelectWork.set( svc.localState.isEnableSelectWork() );
      });
    });
  }

  onComplete() {
    this.currentService()?.completeWork();
  }

  onCancel() {
    this.currentService()?.cancelWork();
  }

  onExecute() {
    this.currentService()?.executeWork();
  }

  onSelectUser(user: string) {
    this.currentService()?.selectUser(user);
  }

  onSelectWork(work: string) {
    // サービス切替
    const next = work === '作業A'
      ? this.serviceA
      : work === '作業B'
        ? this.serviceB
        : this.serviceDefault;
    this.currentService.set(next);
    next.selectWork(work);
  }
}
