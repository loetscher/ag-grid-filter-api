# ag-grid-filter-api
Bug showcase for differnet default textfilter api handling between comunity and enterprise edition

Sample is bsed on https://ag-grid.com/angular-data-grid/filter-api/

See also https://ag-grid.com/angular-data-grid/filter-text/:

```
this.columnDefs = [
    {
        field: 'athlete',
        // Text Filter is used by default in Community version
        filter: true,
        filterParams: {
            // pass in additional parameters to the Text Filter
        },
    },
    {
        field: 'country',
        // explicitly configure column to use the Text Filter
        filter: 'agTextColumnFilter',
        filterParams: {
            // pass in additional parameters to the Text Filter
        },
    },
];
```
Especially:
```
        // Text Filter is used by default in Community version
        filter: true,
```
This filter-configuration breaks if ag-grid-enterprise dependency is added
