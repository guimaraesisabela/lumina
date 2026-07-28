import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Espaco {
  id: number;
  nome: string;
  tipo: 'cinema' | 'palco' | 'multiuso';
  tipoLabel: string;
  descricao: string;
  capacidade: number;
  eventosNoMes: number;
  status: 'ativo' | 'inativo' | 'em-manutencao';
  statusLabel: string;
  imagem: string;
}

@Component({
  selector: 'app-espacos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './espacos.html',
  styleUrl: './espacos.scss',
})
export class EspacosComponent {
  filtroAtivo = 'todos';

  espacos: Espaco[] = [
    {
      id: 1,
      nome: 'Sala Noir',
      tipo: 'cinema',
      tipoLabel: 'Cinema',
      descricao: 'Sala de cinema com telão 4K e som surround imersivo.',
      capacidade: 80,
      eventosNoMes: 12,
      status: 'ativo',
      statusLabel: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=200&fit=crop',
    },
    {
      id: 2,
      nome: 'Palco Central',
      tipo: 'palco',
      tipoLabel: 'Palco',
      descricao: 'Palco principal para shows e apresentações ao vivo com estrutura completa.',
      capacidade: 200,
      eventosNoMes: 6,
      status: 'ativo',
      statusLabel: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=200&fit=crop',
    },
    {
      id: 3,
      nome: 'Espaço Multiuso',
      tipo: 'multiuso',
      tipoLabel: 'Multiuso',
      descricao: 'Ambiente versátil adaptável para diferentes tipos de eventos culturais.',
      capacidade: 120,
      eventosNoMes: 3,
      status: 'em-manutencao',
      statusLabel: 'Em manutenção',
      imagem: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=200&fit=crop',
    },
    {
      id: 4,
      nome: 'Sala Cine Arte',
      tipo: 'cinema',
      tipoLabel: 'Cinema',
      descricao: 'Sala intimista dedicada ao cinema de arte e filmes independentes.',
      capacidade: 40,
      eventosNoMes: 8,
      status: 'ativo',
      statusLabel: 'Ativo',
      imagem: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=200&fit=crop',
    },
  ];

  espacosFiltrados() {
    if (this.filtroAtivo === 'todos') return this.espacos;
    return this.espacos.filter((e) => e.tipo === this.filtroAtivo);
  }

  setFiltro(filtro: string) {
    this.filtroAtivo = filtro;
  }
}
