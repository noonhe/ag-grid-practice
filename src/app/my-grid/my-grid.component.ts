import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { locale } from '../ag-grid-locale';
import 'ag-grid-enterprise';
import {MyTooltipComponentComponent} from './my-tooltip-component/my-tooltip-component.component'
@Component({
  selector: 'my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  gridApi;
  gridColApi;
  frameworkComponents:any;
  columnDefs = [
    {headerName: 'نام', field: 'make' , tooltipField:"make", editable:true },
    {headerName: 'مدل', field: 'model' , editable:true , cellEditor:'agSelectCellEditor', cellEditorParams: {
      values: ["Porsche", "Toyota", "Ford", "AAA", "BBB", "CCC"]
    }},
    {headerName: 'قیمت', field: 'price', editable:true }
  ];

  rowData:any;
  localeText:any;
  editType="fullRow";
  

defaultColDef={
  filter:true,
  sortable:true,
  resizable:true,
  tooltipComponent:"customTooltip"
}
  constructor(private http: HttpClient) { 
    this.localeText = locale;
    this.frameworkComponents = {customTooltip : MyTooltipComponentComponent}
  }

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/69kxz').subscribe(res=>{
      this.rowData = res;
    })
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColApi = params.columnApi;
    this.autoSizeAll()
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColApi.autoSizeColumns(allColumnIds);
  }

}
