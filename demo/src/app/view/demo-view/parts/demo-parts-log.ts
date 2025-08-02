import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-demo-parts-log',
  standalone: true,
  templateUrl: './demo-parts-log.html',
  styleUrls: ['./demo-parts-log.scss']
})
export class DemoPartsLog {
  log = signal<string[]>([]);
}
