import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';



import { AppComponent } from './app.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { ChartDataComponent } from './chart-data/chart-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent,
    ChartDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatToolbarModule,
    MatTabsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
