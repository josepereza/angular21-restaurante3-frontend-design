import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {}
