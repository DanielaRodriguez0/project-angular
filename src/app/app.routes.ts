import { Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
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
