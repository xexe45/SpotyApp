import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any[] = [];

  loading: boolean;

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

   }


  ngOnInit() {
  }

  getArtista(id) {
    this.loading = true;
    this.spotify.getAnArtist(id)
      .subscribe(data => {
        this.artista = data;
        console.log(this.artista);
        this.loading = false;
      });

  }

  getTopTracks(id) {

    this.spotify.getTopTracks(id)
      .subscribe( data => {
        console.log(data);
        this.topTracks = data;
      });
  }

}
