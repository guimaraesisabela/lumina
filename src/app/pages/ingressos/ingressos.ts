import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Ingresso {
  id: number;
  nomeComprador: string;
  emailComprador: string;
  eventoNome: string;
  espaco: string;
  dataEvento: string;
  valor: string;
  status: 'ativo' | 'cancelado';
  compradoEm: string;
}

@Component({
  selector: 'app-ingressos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingressos.html',
  styleUrl: './ingressos.scss',
})
export class IngressosComponent {
  filtroAtivo = 'todos';
  searchTerm = '';

  ingressos: Ingresso[] = [
    { id: 1, nomeComprador: 'Ana Lima', emailComprador: 'ana@email.com', eventoNome: 'O Mistério da Meia-Noite', espaco: 'Sala Noir', dataEvento: 'Sáb, 24 Out • 21:00', valor: '45,00', status: 'ativo', compradoEm: '20 Out, 14:32' },
    { id: 2, nomeComprador: 'Bruno Souza', emailComprador: 'bruno@email.com', eventoNome: 'Quinteto de Jazz', espaco: 'Palco Central', dataEvento: 'Hoje • 19:30', valor: '85,00', status: 'ativo', compradoEm: '18 Out, 09:15' },
    { id: 3, nomeComprador: 'Carla Mendes', emailComprador: 'carla@email.com', eventoNome: 'Maratona Sci-Fi', espaco: 'Sala Noir', dataEvento: 'Ontem, 21 Out', valor: '60,00', status: 'cancelado', compradoEm: '15 Out, 16:45' },
    { id: 4, nomeComprador: 'Diego Ferreira', emailComprador: 'diego@email.com', eventoNome: 'Sinfonia das Sombras', espaco: 'Palco Central', dataEvento: 'Dom, 25 Out • 18:00', valor: '70,00', status: 'ativo', compradoEm: '21 Out, 11:00' },
    { id: 5, nomeComprador: 'Elena Costa', emailComprador: 'elena@email.com', eventoNome: 'O Mistério da Meia-Noite', espaco: 'Sala Noir', dataEvento: 'Sáb, 24 Out • 21:00', valor: '45,00', status: 'ativo', compradoEm: '19 Out, 18:20' },
    { id: 6, nomeComprador: 'Felipe Ramos', emailComprador: 'felipe@email.com', eventoNome: 'Quinteto de Jazz', espaco: 'Palco Central', dataEvento: 'Hoje • 19:30', valor: '85,00', status: 'cancelado', compradoEm: '17 Out, 13:10' },
  ];

  ingressosFiltrados() {
    let lista = this.ingressos;
    if (this.filtroAtivo !== 'todos') lista = lista.filter(i => i.status === this.filtroAtivo);
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      lista = lista.filter(i => i.nomeComprador.toLowerCase().includes(term) || i.eventoNome.toLowerCase().includes(term));
    }
    return lista;
  }

  setFiltro(filtro: string) { this.filtroAtivo = filtro; }

  get totalVendidos() { return this.ingressos.length; }
  get totalAtivos() { return this.ingressos.filter(i => i.status === 'ativo').length; }
  get totalCancelados() { return this.ingressos.filter(i => i.status === 'cancelado').length; }
  get receitaTotal() {
    return this.ingressos
      .filter(i => i.status === 'ativo')
      .reduce((acc, i) => acc + parseFloat(i.valor.replace(',', '.')), 0)
      .toFixed(2).replace('.', ',');
  }
}
