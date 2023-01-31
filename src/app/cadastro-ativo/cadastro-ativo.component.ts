import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoModel } from 'src/Models/TipoModel';
import { RegistroTipoService } from '../registro-tipo/registro-tipo.service';

@Component({
  selector: 'app-cadastro-ativo',
  templateUrl: './cadastro-ativo.component.html',
  styleUrls: ['./cadastro-ativo.component.scss']
})
export class CadastroAtivoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private tipoService: RegistroTipoService) { }

  public formulario: FormGroup;
  public listaTipos:any [];

  ngOnInit(): void {
    this.CreateForms();
    this.BuscarListaTipos();
  }

  CreateForms(): void {
    this.formulario = this.formBuilder.group({
      Name: [null],
      Descricacao: [null]
    });
  }

  BuscarListaTipos() {
    this.tipoService.ListarTipos()
      .subscribe( x=> {
        this.listaTipos = x as any
        console.log(this.listaTipos)
      });
  }
}
