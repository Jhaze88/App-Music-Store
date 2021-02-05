import { Component, OnInit } from "@angular/core";
import { TrackData } from "../models/userData";
import { ApiService } from "../service/api.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-applicazione",
  templateUrl: "./applicazione.component.html",
  styleUrls: ["./applicazione.component.css"],
})
export class ApplicazioneComponent implements OnInit {
  listOfTracks: Array<TrackData>;
  braniSelezionati: Array<TrackData>;
  checkSelected: boolean;

  constructor(private apiService: ApiService) {
    this.braniSelezionati = [];
    this.checkSelected = false;
  }

  ngOnInit(): void {}
  checkUncheck() {
    for (var i = 0; i < this.braniSelezionati.length; i++) {
      this.braniSelezionati[i].selected = this.checkSelected;
    }
    this.controlSelected();
  }
  controlSelected() {
    this.checkSelected = this.braniSelezionati.every((brano: any) => {
      if (this.checkSelected) {
        return brano.selected === true;
      } else {
        return false;
      }
    });
  }

  loadTracks(f: NgForm): void {
    console.log(f);
    this.apiService.getTracks(f.value.artist).subscribe((data) => {
      console.log(data);
      this.listOfTracks = data.results;
    });
  } //loadTracks
  favoriteTrack(TrackData) {
    this.braniSelezionati.push(TrackData);
  }
  delateTrack(TrackData) {
    this.braniSelezionati.splice(TrackData);
  }
  delateSingletrack(posizione: number) {
    this.braniSelezionati.splice(posizione, 1);
  }

  delateAllCheckBox() {
    this.braniSelezionati = this.braniSelezionati.filter((brano) => {
      return !brano.selected === true;
    });
  }
} //class
