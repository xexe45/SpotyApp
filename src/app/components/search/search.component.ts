import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = false;
   }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this._spotifyService.getArtista(termino)
      .subscribe( (data: any) => {
        this.artistas = data;
        console.log(data);
        this.loading = false;
      });
  }

}
