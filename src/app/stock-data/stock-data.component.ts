import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.scss']
})
export class StockDataComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  public columnDefs: any;
  public rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.columnDefs = [
      {headerName: 'Time', field: 'time',  },
      {headerName: 'Symbol', field: 'symbol' },
      {headerName: 'Bid', field: 'bid'},
      {headerName: 'Ask', field: 'ask' },
      {headerName: 'Bsize', field: 'bsize' },
      {headerName: 'ASize', field: 'asize' }
    ];
  }

  onFirstDataRendered(params:any) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    //Getting data from nodejs server.
    this.http
      .get(
        'http://localhost:3000/stockData'
      )
      .subscribe(data => {
        this.rowData = data;
      });
  }



}
