import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { ContratoDTO } from '../../DTOs/ContratoDTO';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-explorar',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './explorar.component.html',
  styleUrls: ['./explorar.component.css']
})
export class ExplorarComponent implements OnInit {
  contratos: ContratoDTO[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.getContratos().subscribe((data: ContratoDTO[]) => {
      this.contratos = data;
    });
  }
}