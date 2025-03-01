import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';


export const MENU_ROUTES: Routes = [
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'list/:id/details',
        component: DetailsComponent
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
