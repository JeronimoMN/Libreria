import { Routes } from '@angular/router';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';

export const routes: Routes = [
    {path: 'catalogo-libros', component: CatalogoLibrosComponent},

    {path: '', redirectTo: 'catalogo-libros', pathMatch: 'full'}
];
