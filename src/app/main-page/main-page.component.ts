import { Component } from '@angular/core';
import { LastBooksComponent } from '../last-books/last-books.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CatalogoLibrosComponent } from '../catalogo-libros/catalogo-libros.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, LastBooksComponent, NavBarComponent, CatalogoLibrosComponent, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  bookForm = new FormGroup({
    'titulo': new FormControl('', [Validators.required]),
    'autor': new FormControl('', [Validators.required])
  })

  onSubmit() {
    console.log(this.bookForm.value)
  }
}
