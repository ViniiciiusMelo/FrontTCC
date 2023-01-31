import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAtivoComponent } from './cadastro-ativo/cadastro-ativo.component';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { CollectionComponentComponent } from './collection-component/collection-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistroMateriaisComponent } from './registro-materiais/registro-materiais.component';
import { RegistroModelComponent } from './registro-model/registro-model.component';
import { RegistroTexturaComponent } from './registro-textura/registro-textura.component';
import { RegistroTipoComponent } from './registro-tipo/registro-tipo.component';
import { RegistroComponent } from './registro/registro.component';
import { UploadComponentComponent } from './upload-component/upload-component.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'home',
    component: UploadComponentComponent
  },
  {
    path: 'cadastro-user',
    component: CadastroComponentComponent
  },
  {
    path: 'cadastro-ativos',
    component: CadastroAtivoComponent
  },
  {
    path: 'collection',
    component: CollectionComponentComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'registro-tipo',
    component: RegistroTipoComponent
  },
  {
    path: 'registro-textura',
    component: RegistroTexturaComponent
  },
  {
    path: 'registro-materiais',
    component: RegistroMateriaisComponent
  },
  {
    path: 'registro-model3d',
    component: RegistroModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
