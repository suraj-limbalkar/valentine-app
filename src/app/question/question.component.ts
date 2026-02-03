import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @ViewChild('noButton') noButton!: ElementRef;

  constructor(private router: Router) {}

  onYesClick() {
    this.router.navigate(['/celebration']);
  }

  onNoHover(event: MouseEvent) {
    if (!this.noButton) return;

    const button = this.noButton.nativeElement;
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);

    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }
}
