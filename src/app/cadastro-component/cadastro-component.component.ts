import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.scss']
})
export class CadastroComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public formulario: FormGroup;

  ngOnInit(): void {
    this.CreateForms();

  }

  public CriarUser(): void {
    console.log("FORMS: ", this.formulario.value)
  }

  public CreateForms(): void {
    this.formulario = this.formBuilder.group({
      UserName: [null],
      PassWord: [null],
      PassWordConfirm: [null],
      Email: [null],
      Phone: [null],
      FisrtName: [null],
      SecondName: [null]
    });
  }
}
