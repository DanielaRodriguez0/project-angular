import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/authentication/login/login.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "menu",
        loadChildren: () => import('./pages/menu.routes').then((c) => c.MENU_ROUTES)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
