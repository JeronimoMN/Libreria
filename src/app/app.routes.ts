import { Routes } from '@angular/router';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';
import { LastBooksComponent } from './last-books/last-books.component';

export const routes: Routes = [
    {path: 'catalogo-libros', component: CatalogoLibrosComponent},
    {path: 'last-books', component: LastBooksComponent},

    {path: '', redirectTo: 'catalogo-libros', pathMatch: 'full'}
];
