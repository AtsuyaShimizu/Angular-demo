import { WritableSignal, effect } from '@angular/core';

export abstract class PersistentStateAuto {
  constructor(private readonly storageKey: string) {
    // サブクラスのフィールド初期化後に復元・監視を行う
    queueMicrotask(() => {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.restoreSignals(parsed);
        } catch (e) {
          console.warn(`[${this.storageKey}] Failed to parse localStorage:`, e);
        }
      }

      // 自動保存
      effect(() => this.autoSave());

      // Signal変更のログ記録
      this.setupLogging();
    });
  }

  // 保存対象の制限（null = 全Signal）
  protected getPersistedKeys(): string[] | null {
    return null;
  }

  // ログを取りたいSignalのキー（null = ログ無効）
  protected getLoggableKeys(): string[] | null {
    return null;
  }

  private isWritableSignal(candidate: unknown): candidate is WritableSignal<unknown> {
    return (
      typeof candidate === 'function' &&
      typeof (candidate as any).set === 'function' &&
      typeof (candidate as any).asReadonly === 'function'
    );
  }

  private autoSave() {
    const state: Record<string, unknown> = {};
    const persistedKeys = this.getPersistedKeys();

    for (const key of Object.keys(this)) {
      if (persistedKeys && !persistedKeys.includes(key)) continue;

      const value = (this as any)[key];
      if (this.isWritableSignal(value)) {
        state[key] = value();
      }
    }

    localStorage.setItem(this.storageKey, JSON.stringify(state));
  }

  private restoreSignals(savedState: Record<string, unknown>) {
    for (const [key, val] of Object.entries(savedState)) {
      const target = (this as any)[key];
      if (this.isWritableSignal(target)) {
        target.set(val);
      }
    }
  }

  // ✅ Signalの変更を effect で監視し、ログ出力
  private setupLogging() {
    const loggableKeys = this.getLoggableKeys();
    if (!loggableKeys) return;

    for (const key of loggableKeys) {
      const signalCandidate = (this as any)[key];
      if (this.isWritableSignal(signalCandidate)) {
        let previous = signalCandidate();
        effect(() => {
          const current = signalCandidate();
          if (previous !== current) {
            console.log(`📋 [${this.storageKey}] ${key} changed:`, previous, '→', current);
            previous = current;
          }
        });
      } else {
        console.warn(`🔍 Cannot watch key "${key}" - not a WritableSignal`);
      }
    }
  }
}
