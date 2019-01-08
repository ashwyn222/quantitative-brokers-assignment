## Quantitative Brokers
## Solution to the assignment

## Step 1
To install dependencies

`npm i`

## Step 2
Host qf.json file on http://localhost:3000

`json-server --watch src/assets/qf.json`

## Step 2
To open application on http://localhost:4200 by default

`ng serve`

## Step 3
To create a development bundle

`ng build`

## Step 4
To create a production bundle

`ng build --prod`

## I have used below libraries:
json-server for nodeJS server

angular 7 as a front-end javascript framework

ag-grid for displaying tabular data. One can click on column heading to sort/unsort. Each columns also supports filter functionality.

D3 for displaying chart visualization

Angular material for main heading and tabs


PS: The assignment was too time consuming, It could be made better by having a angular service for http calls, adding infinite scroll feature with data, the chart x-axis pose a big problem because it is a date string. Some more time could be spent to manage data.
