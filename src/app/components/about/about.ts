import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}
