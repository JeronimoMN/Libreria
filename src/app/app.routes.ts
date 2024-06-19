import { Routes } from '@angular/router';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './shared/register/register.component';
import { MainPageAdminComponent } from './admin/main-page-admin/main-page-admin.component';
import { LoginComponent } from './shared/login/login.component';
import { BookInventoryComponent } from './admin/book-inventory/book-inventory.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { OrderInventoryComponent } from './admin/order-inventory/order-inventory.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'main-page', component: MainPageComponent },
    { path: 'catalogo-libros', component: CatalogoLibrosComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent},
    { path: 'main-page-admin', component: MainPageAdminComponent, 
        children: [
            { path: 'book-inventory', component: BookInventoryComponent },
            { path: 'order-inventory', component: OrderInventoryComponent },
            { path: 'accounts', component: AccountsComponent }
        ]
    },
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: '**', redirectTo: 'error', pathMatch: 'full' }
];
