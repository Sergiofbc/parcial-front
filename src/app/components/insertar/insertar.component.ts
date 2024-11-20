import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { ContratoDTO } from '../../DTOs/ContratoDTO';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-insertar',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {
  contrato: ContratoDTO = {
    identificador: '',
    valor: 0,
    nombre_contratante: '',
    documento_contratante: '',
    nombre_contratista: '',
    documento_contratista: '',
    fecha_inicial: new Date(),
    fecha_final: new Date()
  };

  constructor(private contratoService: ContratoService) {}

  onSubmit(): void {
    this.contratoService.insertContrato(this.contrato).subscribe(response => {
      console.log('Contrato insertado:', response);
      // Aquí puedes redirigir o mostrar un mensaje de éxito
    });
  }
}
