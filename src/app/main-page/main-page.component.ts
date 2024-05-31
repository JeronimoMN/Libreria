import { Component } from '@angular/core';
import { LastBooksComponent } from '../last-books/last-books.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LastBooksComponent, NavBarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
