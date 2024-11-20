import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContratoDTO} from "../DTOs/ContratoDTO";

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
    constructor(private http: HttpClient) {}

    public getContratos() {
        return this.http.get<ContratoDTO[]>('http://localhost:8081/api/contratos');
    }

    public insertContrato(contrato: ContratoDTO) {
        return this.http.post('http://localhost:8081/api/contratos', contrato);
    }
}
