import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistroMateriaisService } from '../registro-materiais/registro-materiais.service';
import { RegistroTexturaService } from '../registro-textura/registro-textura.service';

@Component({
  selector: 'app-registro-model',
  templateUrl: './registro-model.component.html',
  styleUrls: ['./registro-model.component.scss']
})
export class RegistroModelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private materiaisService: RegistroMateriaisService, private texturaService: RegistroTexturaService) { }

  public formulario: FormGroup;
  public materiais: any = [];
  public texturas: any = [];

  ngOnInit(): void {
    this.CreateForms();
    this.listarMateriais();
    this.listarTexturas();
  }

  CreateForms(): void {
    this.formulario = this.formBuilder.group({
      Nome: [null],
      Descricao: [null],
      Materiais: [null],
      Texturas: [null],
      EscalaAtivo: [null]
    });
  }

  salvar() { }

  listarMateriais() {
    this.materiaisService.Listar().subscribe(x => {
      this.materiais = x
      console.log(this.materiais);
    })
  }

  listarTexturas() {
    this.texturaService.Listar().subscribe(x => {
      this.texturas = x
      console.log(this.texturas);
    })
  }
}
