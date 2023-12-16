import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/_pipe/filter.pipe';
import * as nestedJson from "src/assets/data/nestedJson.json";


@Component({
  selector: 'app-nested-json',
  templateUrl: './nested-json.component.html',
  styleUrls: ['./nested-json.component.css'],
})
export class NestedJsonComponent implements OnInit {

  searchTerm!: string;

  // import * as nestedJson from "src/assets/data/nestedJson.json";
  jsonDt = Array.from(nestedJson);

  data = [
    {
      "country": "Country1",
      "cities": [
        {
          "name": "City1",
          "postcodes": ["1000", "1001"]
        },
        {
          "name": "City2",
          "postcodes": ["2000", "2001"]
        }
      ]
    },
    {
      "country": "Country2",
      "cities": [
        {
          "name": "City3",
          "postcodes": ["3000", "3001"]
        },
        {
          "name": "City4",
          "postcodes": ["4000", "4001"]
        }
      ]
    }
  ];


  ngOnInit(): void {
  }

  selectedCountry = null;
  selectedCity = null;

  onCountryChange(): void {
    this.selectedCity = null; // Reset city selection when country changes
  }
}
