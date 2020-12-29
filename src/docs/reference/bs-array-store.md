::: lead
**Vue MDBootstrap** provides built-in data store class for working with collection 
of entity objects locally. **BsArrayStore** is used to store collection of entity 
objects locally and your application is reponsible to manage them. **BsGrid** and 
**BsCombobox** components usually use **BsArrayStore** for data binding.
:::


## Overview

Below is basic example of how to instantiate the **BsArrayStore** class.

```js
import { BsArrayStore } from "vue-mdbootstrap";

let dsStore = new BsArrayStore(
  [
    {id: 1, name: 'Sandra Adams'},
    {id: 2, name: 'Ali Connors'},
    {id: 3, name: 'Trevor Hansen'},
    {id: 4, name: 'Tucker Smith'},
    {id: 5, name: 'Britta Holt'},
    {id: 6, name: 'Jane Smith'},
    {id: 7, name: 'John Smith'},
    {id: 8, name: 'Sandra Williams'}
  ], {
    idProperty: 'id'
  }
);
```


## API

<div class="refs-api">

-   CONSTRUCTOR DETAIL

-   <span class="text-primary font-weight-bold">BsArrayStore</span>(`Object[]` data, `Object` config)

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">data</span> : Collection of records to be assigned.

    -   <span class="text-unique font-weight-bold">config</span> : The configuration options.

</div>

<div class="refs-api">

-   INSTANCE PROPERTY

-   <span class="text-primary font-weight-bold">currentPage</span> : <em class="text-grey-500">
    Number</em> <bs-badge variant="secondary">READONLY</bs-badge> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge> 
  
    Current active page number.

-   <span class="text-primary font-weight-bold">dataItems</span> : <em class="text-grey-500">
    BsModel[] | Object[]</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The dataset in the local storage.

-   <span class="text-primary font-weight-bold">defaultFilters</span> : <em class="text-grey-500">
    IFilter[] | Object[]</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>
  
    Get/Set the default filters to be used.

-   <span class="text-primary font-weight-bold">filters</span> : <em class="text-grey-500">
    IFilter[] | Object[]</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>
  
    Get/Set the collection of filters to be used.

-   <span class="text-primary font-weight-bold">length</span> : <em class="text-grey-500">
    Number</em> <bs-badge variant="secondary">READONLY</bs-badge> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>
  
    The number of items in the active page.

-   <span class="text-primary font-weight-bold">pageSize</span> : <em class="text-grey-500">
    Number</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>
  
    Get/Set the number of items within a page.

-   <span class="text-primary font-weight-bold">sorters</span> : <em class="text-grey-500">
    ISorter[] | Object[]</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>
  
    Get/Set sorter's methods to be used when sorting the Store's dataset.

-   <span class="text-primary font-weight-bold">totalCount</span> : <em class="text-grey-500">
    Number</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The total number of items in the Store's dataset.

-   <span class="text-primary font-weight-bold">totalPages</span> : <em class="text-grey-500">
    Number</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The total number of pages.

-   <span class="text-primary font-weight-bold">loading</span> : <em class="text-grey-500">
    Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>
  
    The *BsArrayStore* state, whether it is loading dataset or not.

-   <span class="text-primary font-weight-bold">deleting</span> : <em class="text-grey-500">
    Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>
  
    The *BsArrayStore* state, whether it is deleting dataset or not.

-   <span class="text-primary font-weight-bold">hasError</span> : <em class="text-grey-500">
    Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>
  
    The *BsArrayStore* state, whether there was an error when loading/deleting dataset or not.

</div>

<div class="refs-api">

-   INSTANCE METHOD

-   <span class="text-primary font-weight-bold">addFilter</span>(`String` field, `String|Number|Boolean|Array` value, 
    `String` [operator]) : <em class="text-grey-500">Self</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Add a filter to the Store and returns itself.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">field</span> : The field name to which the filter will be applied.

    -   <span class="text-unique font-weight-bold">value</span> : The filter value.

    -   <span class="text-unique font-weight-bold">operator</span> : Filter operator to be used, valid values: `eq`, `neq`, 
        `gt`, `gte`, `lt`, `lte`, `in`, `notin`, `startwith`, `endwith`, `contains`, `fts`, `tsquery`. Default value is `eq`.

-   <span class="text-primary font-weight-bold">aggregateAvg</span>(`String` field) : <em class="text-grey-500">Number</em>

    Calculate *means* or *average* value from a field in the local storage.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">field</span> : The field name of the dataset to calculate.

-   <span class="text-primary font-weight-bold">aggregateCountBy</span>(`String` field, `Any` value) : <em class="text-grey-500">Number</em>

    Count number of items in the local storage specified by the given criteria.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">field</span> : The grouping field name criteria.

    -   <span class="text-unique font-weight-bold">value</span> : The grouping value criteria.

-   <span class="text-primary font-weight-bold">aggregateSum</span>(`String` field) : <em class="text-grey-500">Number</em>

    Calculate the SUM or total value from a field in the local storage.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">field</span> : The field name of the dataset to calculate.

-   <span class="text-primary font-weight-bold">append</span>(`BsModel|Object` item) 

    Append an item to the Store's dataset.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">item</span> : Data to append to the dataset.

-   <span class="text-primary font-weight-bold">assignData</span>(`BsModel[]|BsModel|Object[]|Object` data, `Boolean` [silent]) 

    Replace the dataset with new data.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">data</span> : The new data to be assigned.

    -   <span class="text-unique font-weight-bold">silent</span> : Append the data silently 
        and don't trigger data conversion. Default is `false`. *(optional)*

-   <span class="text-primary font-weight-bold">clearData</span>() <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Clear all data items in the local storage.

-   <span class="text-primary font-weight-bold">destroy</span>() <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Clear and destroy all data items in the local storage.

-   <span class="text-primary font-weight-bold">find</span>(`String` property, `Any` value, 
    `Number` [startIndex]) : <em class="text-grey-500">BsModel | Object</em> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Finds the first matching Item in the local storage by a specific field value and returns 
    the item that match the criteria.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">property</span> : The field name to test.

    -   <span class="text-unique font-weight-bold">value</span> : The value to match.

    -   <span class="text-unique font-weight-bold">startIndex</span> : The index to start searching at. 
        Default value is `0`. *(optional)*

-   <span class="text-primary font-weight-bold">findBy</span>(`Function` predicate) : <em class="text-grey-500">
    BsModel | Object</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Finds the first matching Item in the local storage by function's predicate. If the predicate 
    returns true, it is considered a match.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">predicate</span> : The callback function: 
        *(`Object` item, `Number` index) => boolean*.

-   <span class="text-primary font-weight-bold">findIndex</span>(`String` property, `Any` value, 
    `Number` [startIndex]) : <em class="text-grey-500">Number</em> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Finds the index of the first matching Item in the local storage by a specific field value and 
    returns the index of first match element, otherwise -1.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">property</span> : The field name to test.

    -   <span class="text-unique font-weight-bold">value</span> : The value to match.

    -   <span class="text-unique font-weight-bold">startIndex</span> : The index to start searching at.
        Default value is `0`. *(optional)*

-   <span class="text-primary font-weight-bold">isEmpty</span>() : <em class="text-grey-500">
    Boolean</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Check if the data in the Store is empty or not.

-   <span class="text-primary font-weight-bold">load</span>(`Object[]|Object` [data]) : <em class="text-grey-500">Promise</em>

    Load data from the given record(s).

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">data</span> : The record(s) to be assigned. *(optional)*

-   <span class="text-primary font-weight-bold">localFilter</span>() : <em class="text-grey-500">
    BsModel[] | Object[]</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Filter the dataset locally and returns the filtered dataset.

-   <span class="text-primary font-weight-bold">localSort</span>() : <em class="text-grey-500">
    BsModel[] | Object[]</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Sort the dataset locally and returns the sorted dataset.

-   <span class="text-primary font-weight-bold">nextPage</span>() : <em class="text-grey-500">
    Self</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Sets the next page to load by the Store and returns itself.

-   <span class="text-primary font-weight-bold">page</span>(`Number` value) : <em class="text-grey-500">
    Self</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Sets the current active page and returns itself.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">value</span> : The page number to set.

-   <span class="text-primary font-weight-bold">previousPage</span>() : <em class="text-grey-500">
    Self</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Sets the previous page to load by the Store and returns itself.

-   <span class="text-primary font-weight-bold">queryParams</span>() : <em class="text-grey-500">
    Object</em> <bs-badge variant="info">inherit: AbstractStore</bs-badge>

    Get current query parameter's configuration.

-   <span class="text-primary font-weight-bold">remove</span>(`BsModel|BsModel[]|Object|Object[]` items) <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Removes the specified item(s) from the local storage.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">items</span> : The Model instance or array of model instances to be removed.

-   <span class="text-primary font-weight-bold">removeAt</span>(`Number` index, `Number` [count]) <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Removes the model instance(s) at the given index from the local storage.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">index</span> : The index position.

    -   <span class="text-unique font-weight-bold">count</span> : The number of items to delete, default is `1`. *(optional)*

-   <span class="text-primary font-weight-bold">resetState</span>() <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Resets the *BsArrayStore* state back to their initial states, ie. `loading`, `deleting`, `hasError`.

-   <span class="text-primary font-weight-bold">setFilterLogic</span>(`String` logic) : <em class="text-grey-500">
    Self</em> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Define the filter logic to be used when filtering the Store's dataset and returns itself.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">logic</span> : The filter logic to apply, valid values: `AND`, `OR`.

-   <span class="text-primary font-weight-bold">setFilters</span>(`IFilter[]|IFilter` filters, 
    `Boolean` [includeDefault]) : <em class="text-grey-500">Self</em> <bs-badge variant="info">
    inherit: AbstractStore</bs-badge>

    Replace old filters and apply new filters to the Store's dataset and returns itself.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">filters</span> : The filters to apply.

    -   <span class="text-unique font-weight-bold">includeDefault</span> : Include default filters or not, 
        default is `false`. *(optional)*

-   <span class="text-primary font-weight-bold">sort</span>(`String|ISorter[]` criteria, 
    `String` [direction]) : <em class="text-grey-500">BsModel[]</em>

    Sorts the dataset by the given field or *ISorter* criteria.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">criteria</span> : The field for 
        sorting or *ISorter* objects.

    -   <span class="text-unique font-weight-bold">direction</span> : The sort direction, 
        valid values: `asc`, `desc`. Default is `asc`. *(optional)*

</div>
