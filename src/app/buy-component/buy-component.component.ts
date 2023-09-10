import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-buy-component',
  templateUrl: './buy-component.component.html',
  styleUrls: ['./buy-component.component.scss']
})
export class BuyComponentComponent implements OnInit {
  inputField1='';
  selectedCountry!: string;
  countries!: any[]; // Array to store the list of countries and currencies

  constructor(private http: HttpClient) {
    // Fetch the JSON data from the assets folder
    this.http.get<any[]>('/assets/countries.json').subscribe(data => {
      this.countries = data;
    });
  }
  ngOnInit(): void {
  }
  activeTab: string = 'buy'; // Initialize the active tab to 'buy'
  selectedCurrency: string = 'USD';
  amount: number = 0;
  exchangeRate: number = 1.2; // Example exchange rate

  buy(): void {
    // Implement the buy logic here
  }
}
