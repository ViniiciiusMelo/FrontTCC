import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoModel } from 'src/Models/TipoModel';
import { RegistroTipoService } from './registro-tipo.service';

@Component({
  selector: 'app-registro-tipo',
  templateUrl: './registro-tipo.component.html',
  styleUrls: ['./registro-tipo.component.scss']
})

export class RegistroTipoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private registroTipo: RegistroTipoService) { }

  public formulario: FormGroup;

  ngOnInit(): void {
    this.CreateForms();
  }

  salvar() {
    var tipo: TipoModel = {
      Nome: this.formulario.value['Nome']
    }
    this.registroTipo.Inserir(tipo)
      .subscribe(scuesso => {
        console.log('SUCESSO', scuesso)
      })
  }

  CreateForms(): void {
    this.formulario = this.formBuilder.group({
      Nome: [null]
    });
  }

}
