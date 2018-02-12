import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {

  artistas: any[] =[];
  constructor(public http: HttpClient) {

      console.log("servicio spotify listo");
   }

   getArtistas(){

     let url = "https://api.spotify.com/v1/search?query=metallica&type=artist&offset=0&limit=20";
     let headers = new HttpHeaders({
          'authorization':'Bearer BQDBh5_lVVERiShvgc2eUVe13NPJPQrNQhLSmVAhA_XaTmnoscS-dtPMxmh8U7-FE95snr28Zurp7MsP6U4'
     });

     return this.http.get(url, {headers})
            .map( (resp:any)=> {
                this.artistas= resp.artists.items;
                return this.artistas;
            });
              // .subscribe( res => {
              //     console.log(res);
              //
              // })

   }

}
