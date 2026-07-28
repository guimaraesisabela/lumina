import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
})
export class RelatoriosComponent {
  eventosMaisPopulares = [
    { nome: 'Quinteto de Jazz: Ecos de Paris', espaco: 'Palco Central', vendidos: 120, capacidade: 120 },
    { nome: 'Maratona Sci-Fi: Neon Dreams', espaco: 'Sala Noir', vendidos: 245, capacidade: 250 },
    { nome: 'Sinfonia das Sombras', espaco: 'Palco Central', vendidos: 160, capacidade: 200 },
    { nome: 'O Mistério da Meia-Noite', espaco: 'Sala Noir', vendidos: 45, capacidade: 80 },
    { nome: 'Blade Runner 2049', espaco: 'Sala Cine Arte', vendidos: 35, capacidade: 40 },
  ];

  receitaPorTipo = [
    { label: 'Shows ao vivo', valor: '52.400', pct: 60, cor: 'red' },
    { label: 'Sessões de cinema', valor: '26.200', pct: 30, cor: 'gold' },
    { label: 'Eventos especiais', valor: '8.820', pct: 10, cor: 'blue' },
  ];

  ocupacaoPorEspaco = [
    { nome: 'Palco Central', ocupacao: 85, tipo: 'palco' },
    { nome: 'Sala Noir', ocupacao: 72, tipo: 'cinema' },
    { nome: 'Sala Cine Arte', ocupacao: 68, tipo: 'cinema' },
    { nome: 'Espaço Multiuso', ocupacao: 40, tipo: 'multiuso' },
  ];
}
