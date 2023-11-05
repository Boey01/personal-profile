import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css'],
})
export class TopSectionComponent implements OnInit {
  ngOnInit() {
    const card = document.querySelector('.flip-card');
    const cardInner = document.querySelector('.flip-card-inner');

    // Function to toggle the card flip
    function toggleCardFlip() {
      if (card) {
        card.classList.toggle('card-flipped');
      }
    }

    // Flip the card on load after 0.5 seconds
    setTimeout(() => {
      toggleCardFlip();
    }, 500);

    // Flip the card on click
    if (card) {
      card.addEventListener('click', toggleCardFlip);
    }
  }
}
