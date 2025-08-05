// src/test.ts
import { TestBed } from '@angular/core/testing';

TestBed.initTestEnvironment(
  undefined!, // Zoneを使わないため undefined（standalone component の場合）
  undefined!, // Zoneを使わないため undefined
  {
    teardown: { destroyAfterEach: true }
  }
);