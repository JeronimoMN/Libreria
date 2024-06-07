import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-catalogo-libros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavBarComponent],
  templateUrl: './catalogo-libros.component.html',
  styleUrl: './catalogo-libros.component.css'
})
export class CatalogoLibrosComponent {

  filterForm = new FormGroup({
    'titulo': new FormControl(''),
    'autor': new FormControl(''),
    'categoria': new FormControl('')
  })

  onSubmit(){
    console.log(this.filterForm.value)
  }


  books = [
    { titulo: 'Libro 1', autor: 'Autor 1', categoria: 'Categoría 1' },
    { titulo: 'Libro 2', autor: 'Autor 2', categoria: 'Categoría 2' },
    { titulo: 'Libro 1', autor: 'Autor 1', categoria: 'Categoría 1' },
    { titulo: 'Libro 2', autor: 'Autor 2', categoria: 'Categoría 2' },
    { titulo: 'Libro 1', autor: 'Autor 1', categoria: 'Categoría 1' },
    { titulo: 'Libro 2', autor: 'Autor 2', categoria: 'Categoría 2' },
    { titulo: 'Libro 1', autor: 'Autor 1', categoria: 'Categoría 1' },
    { titulo: 'Libro 2', autor: 'Autor 2', categoria: 'Categoría 2' },
    { titulo: 'Libro 1', autor: 'Autor 1', categoria: 'Categoría 1' },
    { titulo: 'Libro 2', autor: 'Autor 2', categoria: 'Categoría 2' },
    { titulo: 'Libro 1', autor: 'Autor 1', categoria: 'Categoría 1' },
    { titulo: 'Libro 2', autor: 'Autor 2', categoria: 'Categoría 2' },

  ]



}
