import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  mensajeError: string;

  constructor(private _spotifyService: SpotifyService) {

    this.loading = true;
    this.error = false;

    this._spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
        this.mensajeError = errorServicio.error.error.message;
        this.error = true;
        this.loading = false;
      });

  }

  ngOnInit() {
  }

}
