import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsService.resultado;
  }

  constructor(private gifsService: GifsService) { }
}
