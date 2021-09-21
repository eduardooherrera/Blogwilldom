import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalComponent } from './pages/local/local.component';
import { RemoteComponent } from './pages/remote/remote.component';

const routes: Routes = [
    {
        path: '',
        component: LocalComponent,
        pathMatch: 'full'
    },
    {
        path: 'remote',
        component: RemoteComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({

    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {}