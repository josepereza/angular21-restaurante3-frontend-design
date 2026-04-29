import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  menuItems = [
    { name: 'Paella Valenciana', description: 'Auténtica paella con mariscos frescos y azafrán', price: '$28.00', image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&q=80', category: 'Principal' },
    { name: 'Salmón a la Parrilla', description: 'Salmón fresco con vegetales de temporada', price: '$24.00', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80', category: 'Principal' },
    { name: 'Ensalada César', description: 'Lechuga romana, pollo, crutones y aderezo césar', price: '$16.00', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', category: 'Entrada' },
    { name: 'Risotto de Hongos', description: 'Risotto cremoso con hongos silvestres', price: '$22.00', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80', category: 'Principal' },
    { name: 'Tiramisú', description: 'Postre italiano clásico con café y mascarpone', price: '$12.00', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', category: 'Postre' },
    { name: 'Carpaccio de Res', description: 'Finas láminas de res con aceite de oliva y parmesano', price: '$18.00', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae397?w=400&q=80', category: 'Entrada' }
  ];
}
