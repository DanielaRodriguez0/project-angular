import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './pages/authentication/login/login.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "**",
        redirectTo: 'login'
    }
];
/* {
    path: "",
    component: LayoutComponent,
    children: [
        {
            path: "login",
            component: LoginComponent
        }
    ]
} */
