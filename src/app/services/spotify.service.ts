import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {


  artistas: any[] = [];
  urlSpotify: string = 'https://api.spotify.com/v1/';
  private token: string = 'BQD1M547Ypi4hYld5xsqPEyAHo7Tx2jO7cSOpWWQYQ4UL_BuTsDvfDrq4Y61Qirjb9txVAaE9Yi_hKTq1HA';

  constructor(public http: HttpClient) {

    console.log("servicio spotify listo");
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({

      // PONER EL Bearer!!!
      'authorization': 'Bearer ' + this.token
    });
    return headers;

  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;
    let headers = this.getHeaders();
    // let artista =this.getHeaders();
    return this.http.get(url, {headers});
                // .map(
                  // (data)=>{
                //   console.log("datos que vienen del artista desde el servicio");
                  // console.log(data);
                // })
  }

  getArtista(id: string) {

    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();
    //en el servicio va solo peticion. Despues el subscribe lo hace el component
    return this.http.get(url, { headers })

  }

    getArtistas(termino: string) {

    let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
      .map((resp: any) => {
        this.artistas = resp.artists.items;
        return this.artistas;
      });



  }

}
