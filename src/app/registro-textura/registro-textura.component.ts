import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TexturaModel } from 'src/Models/TexturaModel';
import { RegistroTexturaService } from './registro-textura.service';

@Component({
  selector: 'app-registro-textura',
  templateUrl: './registro-textura.component.html',
  styleUrls: ['./registro-textura.component.scss']
})

export class RegistroTexturaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private texturaService: RegistroTexturaService,
    public dialog: MatDialog) { }

  public formulario: FormGroup;

  ngOnInit(): void {
    this.CreateForms();
  }

  salvar() {

    // var recebe  = this.dialog.open(,  {
    //   height: '400px',
    //   width: '600px',
    // });

    var textura: TexturaModel = {
      Name: this.formulario.value['Name'],
      Descricacao: this.formulario.value['Descricacao']
    };

    this.texturaService.Inserir(textura).subscribe(x=>x);
  }

  CreateForms(): void {
    this.formulario = this.formBuilder.group({
      Name: [null],
      Descricacao: [null]
    });
  }
}
