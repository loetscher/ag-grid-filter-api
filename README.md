# ag-grid-filter-api
Bug showcase for different default textfilter api handling between community and enterprise edition
* See https://github.com/loetscher/ag-grid-filter-api/tree/textfilter-community for a working community example
* See https://github.com/loetscher/ag-grid-filter-api/tree/textfilter-enterprise for the broken "community example" by simply adding enterprise dependencies
* See https://github.com/loetscher/ag-grid-filter-api/tree/textfilter-enterprise-fixed for the fixed version which works for the _community and the enterprise_ version

  
The Sample is based on https://ag-grid.com/angular-data-grid/filter-api/

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
This default filter-configuration breaks if ag-grid-enterprise dependency is added
