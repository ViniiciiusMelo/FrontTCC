import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MaterialModel } from 'src/Models/MaterialModel';

@Injectable({
  providedIn: 'root'
})
export class RegistroMateriaisService {

  constructor(private http: HttpClient) { }

  Inserir(materialModel: MaterialModel) {
    return this.http.post(`${environment.API}materiais`, materialModel);
   }

   public Listar()
   {
    return this.http.get(`${environment.API}materiais/listar`);
   }
}
