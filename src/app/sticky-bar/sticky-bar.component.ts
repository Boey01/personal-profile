import { Component, inject } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.css'],
})
export class StickyBarComponent {
  darkmodeService: DarkModeService = inject(DarkModeService);

  getDarkMode() {
    return this.darkmodeService.getDarkMode();
  }
  toggleDarkMode() {
    this.darkmodeService.toggleDarkMode();
  }
}
