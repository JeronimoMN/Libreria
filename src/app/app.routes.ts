import { Routes } from '@angular/router';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';
import { LastBooksComponent } from './last-books/last-books.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

export const routes: Routes = [
    {path: 'main-page', component: MainPageComponent},
    {path: 'catalogo-libros', component: CatalogoLibrosComponent},
    {path: 'last-books', component: LastBooksComponent},
    {path: 'nav-bar', component: NavBarComponent},

    {path: '', redirectTo: 'main-page', pathMatch: 'full'}
];
