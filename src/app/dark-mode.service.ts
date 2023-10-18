import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkMode = false;
  private brightnessValue = 5;

  constructor() {}

  getDarkMode(): boolean {
    return this.darkMode;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  getBrightnessValue(): number {
    return this.brightnessValue;
  }

  setBrightnessValue(bv: number) {
    this.brightnessValue = bv;
  }
}
