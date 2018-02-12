import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {
  pistas: any[]=[];
  artista:any={};

  constructor(private activatedRoute: ActivatedRoute,
              public _spotify: SpotifyService) { }

  ngOnInit() {

    this.activatedRoute.params
          .map( params => params['id'])
          .subscribe( id => {
            // console.log ("pasa por el service");
            // console.log (id);
            this._spotify.getArtista(id)
                        .subscribe(artista => {
                          console.log(artista);
                          this.artista = artista;
                        });
            this._spotify.getTop(id)
                        .map((resp:any) => resp.tracks)
                        .subscribe(pistas => {
                          console.log("tendria que venir el artista");
                          console.log(pistas);
                          this.pistas = pistas;
            });
          });
  }

}
