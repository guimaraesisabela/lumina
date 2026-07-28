import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Atracao {
  id: number;
  nome: string;
  tipo: 'filme' | 'show';
  tipoLabel: string;
  descricao: string;
  genero: string;
  duracao: number;
  totalEventos: number;
  imagem: string;
}

@Component({
  selector: 'app-atracoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atracoes.html',
  styleUrl: './atracoes.scss',
})
export class AtracoesComponent {
  filtroAtivo = 'todos';

  atracoes: Atracao[] = [
    {
      id: 1,
      nome: 'Blade Runner 2049',
      tipo: 'filme',
      tipoLabel: 'Filme',
      descricao: 'Ficção científica distópica ambientada em 2049, continuação do clássico.',
      genero: 'Ficção Científica',
      duracao: 164,
      totalEventos: 4,
      imagem: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=220&fit=crop',
    },
    {
      id: 2,
      nome: 'Tame Impala',
      tipo: 'show',
      tipoLabel: 'Show',
      descricao: 'Show da banda australiana de psicodelia moderna e neo-soul.',
      genero: 'Psicodélico / Indie',
      duracao: 120,
      totalEventos: 2,
      imagem: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=220&fit=crop',
    },
    {
      id: 3,
      nome: 'Everything Everywhere All at Once',
      tipo: 'filme',
      tipoLabel: 'Filme',
      descricao: 'Aventura multiversal vencedora do Oscar, intensa e emocionante.',
      genero: 'Ficção Científica / Comédia',
      duracao: 139,
      totalEventos: 6,
      imagem: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=220&fit=crop',
    },
    {
      id: 4,
      nome: 'Orquestra Sinfônica das Sombras',
      tipo: 'show',
      tipoLabel: 'Show',
      descricao: 'Concerto especial com repertório de trilhas sonoras de cinema.',
      genero: 'Clássico / Orquestral',
      duracao: 100,
      totalEventos: 3,
      imagem: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=220&fit=crop',
    },
    {
      id: 5,
      nome: 'O Mistério da Meia-Noite',
      tipo: 'filme',
      tipoLabel: 'Filme',
      descricao: 'Thriller noir ambientado nos anos 40, com fotografia deslumbrante.',
      genero: 'Noir / Thriller',
      duracao: 112,
      totalEventos: 5,
      imagem: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=220&fit=crop',
    },
    {
      id: 6,
      nome: 'Quinteto de Jazz: Ecos de Paris',
      tipo: 'show',
      tipoLabel: 'Show',
      descricao: 'Quinteto de jazz contemporâneo com influências do jazz parisiense.',
      genero: 'Jazz / Contemporâneo',
      duracao: 90,
      totalEventos: 7,
      imagem: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=220&fit=crop',
    },
  ];

  atracoesFiltradas() {
    if (this.filtroAtivo === 'todos') return this.atracoes;
    return this.atracoes.filter((a) => a.tipo === this.filtroAtivo);
  }

  setFiltro(filtro: string) {
    this.filtroAtivo = filtro;
  }
}
