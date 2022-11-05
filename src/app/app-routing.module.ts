import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './editar/categoria/categoria.component';

/*const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];*/

const routes: Routes = [{
  path: '', redirectTo: 'login', pathMatch: 'full'
},
{
  path: 'home', component: HomeComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'cadastro', component: CadastroComponent
},
{
  path: 'editar-categoria/:id', component: CategoriaComponent
},
{
  path: 'home/:id', component: HomeComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
