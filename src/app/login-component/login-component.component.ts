import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private  userService: UserService ) { }

  public formulario: FormGroup;

  ngOnInit(): void {
    this.createForms();
  }

  public createForms(): void {
    this.formulario = this.formBuilder.group({
      login: [null],
      passWord: [null]
    });
  }

  public singIn(): void {
    console.log('CHAMOU LOGAR')
    this.userService.logar().subscribe(x=> console.log("REsultado LOG", x));
  }

}
