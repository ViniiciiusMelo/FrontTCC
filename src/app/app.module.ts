import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './login-component/login-component.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CadastroComponentComponent } from './cadastro-component/cadastro-component.component';
import { CollectionComponentComponent } from './collection-component/collection-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';
import { RegistroTipoComponent } from './registro-tipo/registro-tipo.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RegistroTexturaComponent } from './registro-textura/registro-textura.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RegistroMateriaisComponent } from './registro-materiais/registro-materiais.component';
import { CadastroAtivoComponent } from './cadastro-ativo/cadastro-ativo.component';
import {MatSelectModule} from '@angular/material/select';
import { RegistroModelComponent } from './registro-model/registro-model.component';
import { EscalaComponentComponent } from './escala-component/escala-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    ToolbarComponentComponent,
    UploadComponentComponent,
    CadastroComponentComponent,
    CollectionComponentComponent,
    RegistroComponent,
    RegistroTipoComponent,
    RegistroTexturaComponent,
    RegistroMateriaisComponent,
    CadastroAtivoComponent,
    RegistroModelComponent,
    EscalaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,    
    MatGridListModule,
    MatSelectModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
