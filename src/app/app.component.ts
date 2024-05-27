import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from './block/block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [],
  imports: [BlockComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Composant';
}
