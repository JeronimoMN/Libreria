import { Routes } from '@angular/router';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { BookInventoryComponent } from './admin/book-inventory/book-inventory.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { OrderInventoryComponent } from './admin/order-inventory/order-inventory.component';
import { BookComponent } from './book/book.component';
import { MainAdminLayoutComponent } from './layouts/main-admin-layout/main-admin-layout.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'main-page', component: MainPageComponent },
    { path: 'catalogo-libros', component: CatalogoLibrosComponent },
    { path: 'book', component: BookComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent},
    { path: 'page-admin', component: MainAdminLayoutComponent, 
        children: [
            { path: 'book-inventory', component: BookInventoryComponent },
            { path: 'order-inventory', component: OrderInventoryComponent },
            { path: 'accounts', component: AccountsComponent }
        ]
    },
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
