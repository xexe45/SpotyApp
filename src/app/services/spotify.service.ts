import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDPsaWIhVrl0P3NYDgHGbStTdtJ_SDwLVyGbJ9yxmLr9sgMOP7Xg3a3v3eBn5yPu9lmY821dnHIjJY45ho';

  constructor(private http: HttpClient) {
    console.log('Service Listo');
  }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers: this.headers()});

  }

  private headers() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return headers;

  }

  getAnArtist(id) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data) => data['tracks']));
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
        .pipe(map((data) => data['albums'].items));

  }

  getArtista(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map((data) => data['artists'].items));

  }
}
