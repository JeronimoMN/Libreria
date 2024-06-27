import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-catalogo-libros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavBarComponent, RouterLink, RouterLinkActive, MatDialogModule],
  templateUrl: './catalogo-libros.component.html',
  styleUrl: './catalogo-libros.component.css'
})
export class CatalogoLibrosComponent {

  constructor(private dialogRef: MatDialog){}

  filterForm = new FormGroup({
    'titulo': new FormControl(''),
    'autor': new FormControl(''),
    'categoria': new FormControl('')
  })

  onSubmit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '90%'; // Ancho mínimo

    dialogConfig.hasBackdrop = true;
    this.dialogRef.open(BookComponent, dialogConfig)
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
