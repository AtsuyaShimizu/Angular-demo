import { Component } from '@angular/core';
import { DemoPage } from './pages/demo-page/demo-page'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    DemoPage
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'demo';
}
