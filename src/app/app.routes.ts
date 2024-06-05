import { Routes } from '@angular/router';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './shared/register/register.component';

export const routes: Routes = [
    { path: 'main-page', component: MainPageComponent },
    { path: 'catalogo-libros', component: CatalogoLibrosComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
