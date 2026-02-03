import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-celebration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celebration.component.html',
  styleUrls: ['./celebration.component.scss']
})
export class CelebrationComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    confetti.default({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
