import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaterialModel } from 'src/Models/MaterialModel';
import { RegistroMateriaisService } from './registro-materiais.service';

@Component({
  selector: 'app-registro-materiais',
  templateUrl: './registro-materiais.component.html',
  styleUrls: ['./registro-materiais.component.scss']
})
export class RegistroMateriaisComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private registroMateriaisService: RegistroMateriaisService) { }

  public formulario: FormGroup;

  ngOnInit(): void {
    this.CreateForms();
  }

  CreateForms(): void {
    this.formulario = this.formBuilder.group({
      Name: [null],
      Descricacao: [null]
    });
  }

  salvar() {
    var material: MaterialModel = {
      Name: this.formulario.value['Name'],
      Descricao: this.formulario.value['Descricacao']
    };

    this.registroMateriaisService.Inserir(material).subscribe(x => x);
  }
}
