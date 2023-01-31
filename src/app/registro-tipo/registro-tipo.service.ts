import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoModel } from 'src/Models/TipoModel';

@Injectable({
  providedIn: 'root'
})
export class RegistroTipoService {

  private readonly BACK = 'http://localhost:31394/api/tipo';

  constructor(private http: HttpClient) { }

  Inserir(tipo: TipoModel) {    
    return this.http.post(this.BACK, tipo);
  }

  ListarTipos()
  {
    return this.http.get(`${environment.API}tipo/list`);
  }

}
