import { Component, inject, Renderer2, ElementRef } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
@Component({
  selector: 'app-sticky-bar',
  templateUrl: './sticky-bar.component.html',
  styleUrls: ['./sticky-bar.component.css'],
})
export class StickyBarComponent {
  darkmodeService: DarkModeService = inject(DarkModeService);
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  isExpanded = false;

  //dark mode service functions
  getDarkMode() {
    return this.darkmodeService.getDarkMode();
  }
  toggleDarkMode() {
    this.darkmodeService.toggleDarkMode();
  }

  sliderValueChanged(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    let brightness: number = +value;

    this.darkmodeService.setBrightnessValue(brightness);
    this.setSliderBackground(brightness);
  }

  setSliderBackground(brightness: number) {
    const slider = this.el.nativeElement.querySelector('#brightness-slider');

    // Define the linear gradient background based on the brightness value
    const gradient = `linear-gradient(to right, #6083E8 ${brightness}%, #dedede ${brightness}%)`;

    // Set the background style for the slider
    this.renderer.setStyle(slider, 'background', gradient);
  }

  ngAfterViewInit() {
    this.setSliderBackground(50);
  }

  toggleBar(event: Event, arrowbutton: boolean) {
    if (arrowbutton) {
      event.stopPropagation();
      this.isExpanded = false;
    } else {
      const target = event.target as HTMLElement;

      if (target.classList.contains('collapsed')) {
        this.isExpanded = true;
      }
    }
  }
}
