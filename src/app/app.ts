import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Menu } from './components/menu/menu';
import { Reservation } from './components/reservation/reservation';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Menu, Reservation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
