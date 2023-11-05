import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css'],
})
export class TopSectionComponent implements OnInit {
  ngOnInit() {
    const card = document.querySelector('.card');

    if (card) {
      card.classList.add('slide-in');
    }

    function toggleCardFlip() {
      if (card) {
        card.classList.toggle('is-flipped');
      }
    }

    setTimeout(() => {
      toggleCardFlip();
    }, 1000);

    setTimeout(() => {
      if (card) {
        card.classList.remove('slide-in');
      }
    }, 0);

    // card flip on click
    if (card) {
      card.addEventListener('click', toggleCardFlip);
    }
  }
}
