import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart-data',
  templateUrl: './chart-data.component.html',
  styleUrls: ['./chart-data.component.scss']
})
export class ChartDataComponent implements OnInit {
  //These 2 values needs to be fetched from json/csv and need not be hardcoded
  symbols = ["UBM3", "ZBM3", "ZFM3", "ZNM3", "ZTM3"];
  view: any[] = [1300, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Bid & Ask Value';
  autoScale = false;
  timeline = true;
  yScaleMin = 161;
  yScaleMax = 164;

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };
  
  multi:any;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.onChange(this.symbols[0]);
  }

  // Called on first load and also on symbol selection
  onChange(sym: string) {
    //This http call should be placed in a separate service, Observable/subscribe mechanism has been used below
    this.http
      .get(
        'http://localhost:3000/stockData?symbol='+sym
      )
      .subscribe(data => {
        var d:any = data;
        this.multi = [{
          "name": "Ask",
          "series":[]
        },{
          "name": "Bid",
          "series":[]
        }];

        //Did not understood how to get data for chart, hence iterated over it to change it in proper format
        for(let i=0; i < d.length; i++){
          this.multi[0].series.push({
            "name": new Date(d[i].time),
            "value": d[i].ask
          });
          this.multi[1].series.push({
            "name": new Date(d[i].time),
            "value": d[i].bid
          });
        }

        this.updateYDomain(sym);
        
        this.cdr.detectChanges();
      });
  }


  //Called after symbol is changed
  //Setting min and max values for Y domain
  updateYDomain(sym: string) {    
    switch(sym){
      case "UBM3":
        this.yScaleMin = 161;
        this.yScaleMax = 164;
        break;
      case "ZBM3":
        this.yScaleMin = 146;
        this.yScaleMax = 149;
        break;
      case "ZFM3":
        this.yScaleMin = 122;
        this.yScaleMax = 125;
        break;
      case "ZNM3":
        this.yScaleMin = 131;
        this.yScaleMax = 134;
        break;
      case "ZTM3":
        this.yScaleMin = 109;
        this.yScaleMax = 112;
        break;
      default:
        this.yScaleMin = 100;
        this.yScaleMax = 164;
    }
  }
}

