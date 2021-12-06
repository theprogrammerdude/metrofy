import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css'],
})
export class DistanceComponent implements OnInit {
  to: string = '';
  from: string = '';
  loading: boolean = false;
  stations: Array<any> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('./assets/stations.json').subscribe((data: any) => {
      // console.log(data);
      this.stations = data;

      // console.log(this.stations);
    });
  }

  calculate() {
    if (this.from != '' && this.to != '' && this.from != this.to) {
      this.loading = true;
      this.http
        .get(
          `https://delhimetroapi.herokuapp.com/metroapi/from=${this.from.toLowerCase()}&to=${this.to.toLowerCase()}`
        )
        .subscribe((data) => {
          console.log(data);
          this.loading = false;
        });
    }
  }
}
