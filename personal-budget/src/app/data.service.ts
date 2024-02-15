import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Import Observable for using HTTP requests
import { Datasource } from './datasource';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  private dataSource1: any = [];

  private dataSource: Datasource = {
    datasets: [
      {
        data: [],
        backgroundColor: ["#ffcd56", "#ff6384", "#36a2eb", "#fd6b19", "#83FF33", "#F633FF", "#FF3333"],
      }
    ],

    labels: []
  };

  private apiUrl: string = "http://localhost:3000/budget";

  constructor(private http: HttpClient) {}

  // Fetch data from the backend API and return an Observable
  fetchDataFromBackend(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Set the data source
  setDataSource(data: Datasource): void {
    this.dataSource = data;
  }

  // Set the dataSource1
  setDataSource1(data: any[]): void {
    this.dataSource1 = data;
  }

  // Get the data source
  getDataSource(): Datasource {
    return this.dataSource;
  }

  // Get the dataSource1
  getDataSource1(): any[] {
    return this.dataSource1;
  }
}
