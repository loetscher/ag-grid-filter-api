import { Component } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AgGridAngular } from "@ag-grid-community/angular";
// NOTE: Angular CLI does not support component CSS imports: angular-cli/issues/23273
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "./styles.css";
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  IDateFilterParams,
  ModuleRegistry,
  SideBarDef,
  createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
]);
import { IOlympicData } from "./interfaces";

@Component({
  selector: "my-app",
  standalone: true,
  imports: [AgGridAngular, HttpClientModule],
  template: `<div class="example-wrapper">
    <div>
      <div class="button-group">
        <button
          (click)="restoreFromHardCoded()"
          [title]="getFilterValue()">
          Set Custom Filter Model for 'Athlete'
        </button>
        <button (click)="clearFilters()">Reset Filters</button>
      </div>
    </div>

    <ag-grid-angular
      style="width: 100%; height: 100%;"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [rowData]="rowData" 
      class="ag-theme-quartz"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  </div>`,
})
export class AppComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: ColDef[] = [
    //{ field: "athlete", filter: "agTextColumnFilter" },
    { field: "athlete", filter: true },
    { field: "age", filter: "agNumberColumnFilter", maxWidth: 100 },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
  };
  public rowData!: IOlympicData[];

  public getFilterValue(): string{
    return "Michael P";
  }

  constructor(private http: HttpClient) {}

  clearFilters() {
    this.gridApi.setFilterModel(null);
  }

  restoreFromHardCoded() {
    let hardcodedFilter = {
      athlete: { type: "startsWith", filter: this.getFilterValue() }
    };
    this.gridApi.setFilterModel(hardcodedFilter);
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<IOlympicData[]>("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe((data) => (this.rowData = data));
  }
}
