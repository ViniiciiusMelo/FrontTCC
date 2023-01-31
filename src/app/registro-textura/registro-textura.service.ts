import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TexturaModel } from 'src/Models/TexturaModel';

@Injectable({
  providedIn: 'root'
})
export class RegistroTexturaService {



  constructor(private http: HttpClient) { }

  Inserir(texturaModel: TexturaModel) {
    return this.http.post(`${environment.API}textura`, texturaModel);
  }

  Listar() {
    return this.http.get(`${environment.API}textura/Listar`);
  }
}
