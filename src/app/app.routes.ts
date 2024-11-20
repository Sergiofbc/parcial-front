import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { InsertarComponent } from './components/insertar/insertar.component';

/// ACCEDER AL FINAL PONIENDO /explorar o /insertar ///
export const routes: Routes = [
    { path: '', component: AppComponent }, //ruta raiz
    { path: 'explorar', component: ExplorarComponent },
    { path: 'insertar', component: InsertarComponent }
];
