import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'home-listings';
}
