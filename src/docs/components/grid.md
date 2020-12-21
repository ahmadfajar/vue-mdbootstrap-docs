:::lead
**BsGrid** is a component for displaying tabular data. Features include pagination, 
sorting, searching, filtering and row selection. 
:::


## Overview

The standard **BsGrid** will by default render your data as simple rows. **BsGrid** 
supports data binding to local and remote sets of data by using `BsArrayStore` or
`BsStore`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source0" 
               pageable 
               row-hover 
               sortable>
        <bs-grid-column field="name" 
                        label="Dessert (100g serving)" 
                        min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" 
                        label="Calories" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="fat" 
                        label="Fat (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="carbs" 
                        label="Carbs (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="protein" 
                        label="Protein (g)" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="iron" 
                        label="Iron (%)" 
                        width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      source0: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false, // default is TRUE
        remotePaging: false, // default is TRUE
        remoteSort: false,   // default is TRUE
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/deserts.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.source0.destroy();
    this.source0 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Paging

By default, paging in the Grid UI is disabled. To enable the paging functionality  
of the Grid, define the `pageable` property explicitly. You can also customize the 
paging capabilities by defining the value of `pageable` property as object.

In order for paging to work properly:
* If `pageable` value is `true`, then define the number of records for the Grid to 
  display on each page in the data source.
* Define the total number of records in the dataset.
* If `remotePaging` value is `true`, then the backend must handle correctly the 
  number of records to display.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source1" 
               :pageable="pagination" 
               row-hover>
        <bs-grid-column field="name" 
                        label="Dessert (100g serving)" 
                        min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" 
                        label="Calories" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="fat" 
                        label="Fat (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="carbs" 
                        label="Carbs (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="protein" 
                        label="Protein (g)" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="iron" 
                        label="Iron (%)" 
                        width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      pagination: {
        messages: {
          display: 'Displaying: {0}-{1} of {2} items',
        },
        pageSize: 5,
        paging: [5, 10, 15, 25, [-1, 'All']]
      },
      source1: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/deserts.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.source1.destroy();
    this.source1 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Row Numbering

The Grid UI has built-in feature to display the row number. This can be achieve by 
registering the column and explicitly set the `row-numbering` property. And when
using custom cell rendering feature, use `<bs-grid-cell-numbering>` inside `datarow`
slots to properly display the row number in a cell.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source2" 
               pageable 
               row-hover>
        <bs-grid-column label="#" 
                        text-align="right" 
                        width="50" 
                        row-numbering></bs-grid-column>
        <bs-grid-column field="name" 
                        label="Dessert (100g serving)" 
                        min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" 
                        label="Calories" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="fat" 
                        label="Fat (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="carbs" 
                        label="Carbs (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="protein" 
                        label="Protein (g)" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="iron" 
                        label="Iron (%)" 
                        width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      source2: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/deserts.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.source2.destroy();
    this.source2 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Sorting

By default, sorting in the Grid is disabled. To enable the sorting functionality 
of the Grid, explicitly set the `sortable` property. To enhance the performance 
of the Grid, apply the sorting operations on the server by setting the `remoteSort` 
option in the data source to `true`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source3" 
               pageable 
               row-hover 
               sortable>
        <bs-grid-column :sortable="false" 
                        field="name" 
                        label="Dessert (100g serving)" 
                        min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" 
                        label="Calories" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="fat" 
                        label="Fat (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="carbs" 
                        label="Carbs (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="protein" 
                        label="Protein (g)" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="iron" 
                        label="Iron (%)" 
                        width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      source3: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/deserts.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.source3.destroy();
    this.source3 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Filtering

By default, the filtering functionality of the Grid is disabled. To control filtering 
in the Grid, use the `filterable` property on the `<bs-grid>`. Additionally, you can 
customize which column has its filter functionality enabled by setting the `filterable` 
property to `false` on the `<bs-grid-column>`. 

And to enhance the performance of the Grid, apply the filter operations on the server 
by setting the `remoteFilter` option in the data source to `true`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="stateSources0" 
               :filterable="{minlength: 2, operator: 'contains'}" 
               pageable 
               row-hover 
               sortable>
        <bs-grid-column text-align="right" 
                        width="50" 
                        row-numbering></bs-grid-column>
        <bs-grid-column field="value" 
                        label="ID" 
                        width="75"></bs-grid-column>
        <bs-grid-column field="text" 
                        label="State Name" 
                        min-width="150"></bs-grid-column>
        <bs-grid-column field="country" 
                        label="Country ID" 
                        width="125"></bs-grid-column>
        <bs-grid-column :filterable="false" 
                        field="description" 
                        label="Comments" 
                        min-width="150"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      stateSources0: new BsStore({
        idProperty: 'value',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'text', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/states.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.stateSources0.destroy();
    this.stateSources0 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Search Panel

There are situations when you would like to enable the end user to search inside 
the grid cells for a given value. The Grid UI supports such searching by adding 
a search field inside the grid toolbar. Additionally, it is possible to customize
which field to search using `field` property and the filter operator to be used
using `operator` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="stateSources1" 
               pageable 
               row-hover 
               sortable>
        <bs-grid-toolbar slot="toolbar">
          <div class="row justify-content-end">
            <div class="col-lg-6">
              <bs-grid-tool-search field="text" 
                                   operator="contains"></bs-grid-tool-search>
            </div>
          </div>
        </bs-grid-toolbar>
        <bs-grid-column text-align="right" 
                        width="50" 
                        row-numbering></bs-grid-column>
        <bs-grid-column field="value" 
                        label="ID" 
                        width="75"></bs-grid-column>
        <bs-grid-column field="text" 
                        label="State Name" 
                        min-width="150"></bs-grid-column>
        <bs-grid-column field="country" 
                        label="Country ID" 
                        width="125"></bs-grid-column>
        <bs-grid-column :filterable="false" 
                        field="description" 
                        label="Comments" 
                        min-width="150"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      stateSources1: new BsStore({
        idProperty: 'value',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'text', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/states.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.stateSources1.destroy();
    this.stateSources1 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


## Custom Rendering Support

### Custom Cell Rendering

To enable the Grid cell rendering functionality, use the `datarow` slots and 
explicitly defined the component to render the cell using `<bs-grid-cell>` 
component.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source4" 
               row-hover 
               sortable>
        <bs-grid-column field="name" 
                        label="Dessert (100g serving)" 
                        min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" 
                        label="Calories" 
                        width="120" 
                        text-align="center"></bs-grid-column>
        <bs-grid-column field="fat" 
                        label="Fat (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="carbs" 
                        label="Carbs (g)" 
                        width="100"></bs-grid-column>
        <bs-grid-column field="protein" 
                        label="Protein (g)" 
                        width="120"></bs-grid-column>
        <bs-grid-column field="iron" 
                        label="Iron (%)" 
                        width="100" 
                        text-align="center"></bs-grid-column>
        <bs-grid-column label="Action" 
                        width="100" 
                        text-align="center"></bs-grid-column>
        
        <template v-slot:datarow="{ columns, item, index }">
          <bs-grid-cell :column="columns[0]" 
                        :item="item" 
                        :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[1]" 
                        :item="item" 
                        :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[2]" 
                        :item="item" 
                        :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[3]" 
                        :item="item" 
                        :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[4]" 
                        :item="item" 
                        :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[5]" 
                        :item="item" 
                        :index="index" 
                        :class="{'bg-warning': item.iron > 15}">
            {{ item.iron }}%
          </bs-grid-cell>
          <bs-grid-cell :column="columns[6]" 
                        :item="item" 
                        :index="index">
            <bs-button icon="pen" 
                       mode="icon" 
                       size="sm" 
                       color="secondary" 
                       flat 
                       @click="btnClick(item, 'Edit Item')"></bs-button>
            <bs-button icon="trash-alt" 
                       mode="icon" 
                       size="sm" 
                       color="danger" 
                       flat 
                       @click="btnClick(item, 'Delete Item')"></bs-button>
          </bs-grid-cell>
        </template>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      source4: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/deserts.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.source4.destroy();
    this.source4 = null;
  },
  methods: {
    btnClick(item, title) {
      this.$notification.info('Current item: ' + item.name, title);
    }
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::


### Multi Column Header

To enable multi-column header of the Grid use the `columnheader` slots. 

In order to correctly display the Grid rows on multi-column header:
* Use `rowspan` and `colspan` property to define the row spanning and 
  column spanning.
* Sets the `cell-data` property to `false` on the joined column to 
  ignore the joined column when rendering the Grid rows.
* Sets the `order` property value to correctly order the columns when 
  rendering the Grid rows.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source5" 
               :flip-on-small-screen="false" 
               bordered 
               row-hover 
               sortable>
        <template v-slot:columnheader>
          <bs-grid-rowhead>
            <bs-grid-column field="name" 
                            label="Dessert (100g serving)" 
                            min-width="175" 
                            rowspan="2"></bs-grid-column>
            <bs-grid-column field="calories" 
                            label="Calories" 
                            width="100" 
                            rowspan="2" 
                            text-align="center"></bs-grid-column>
            <bs-grid-column :cell-data="false" 
                            label="Join Column" 
                            colspan="3" 
                            header-align="center" 
                            order="6"></bs-grid-column>
            <bs-grid-column field="iron" 
                            label="Iron (%)" 
                            width="100" 
                            rowspan="2" 
                            text-align="center" 
                            order="5"></bs-grid-column>
          </bs-grid-rowhead>
          <bs-grid-rowhead>
            <bs-grid-column field="fat" 
                            label="Fat (g)" 
                            width="100" 
                            text-align="right" 
                            order="2"></bs-grid-column>
            <bs-grid-column field="carbs" 
                            label="Carbs (g)" 
                            width="100" 
                            text-align="right" 
                            order="3"></bs-grid-column>
            <bs-grid-column field="protein" 
                            label="Protein (g)" 
                            width="120" 
                            text-align="right" 
                            order="4" 
                            class="border-right"></bs-grid-column>
          </bs-grid-rowhead>
        </template>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      source5: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/deserts.json'
        }
      }),
    }
  },
  beforeDestroy() {
    this.source5.destroy();
    this.source5 = null;
  }
}
</script>

<style lang="scss">
.my-demo-wrapper {
  padding: 24px;
}
</style>
```
:::

:::warning
Grid with multi column header can't be displayed correctly on small screen device.
To fix this situation, sets the `flip-on-small-screen` property to `false`.
:::


## Component Reference

### BsGrid - `<bs-grid>`

The Grid main component.

#### Properties

<div class="cmp-property">

| Property    | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| bordered    | `Boolean` | `false` | Enable or disable column border. |
| data-source | `BsStore`/`BsArrayStore` |  | Sets Grid data source. |
| filterable  | `Boolean`/`Object`  | `false` | Enable or disable Grid filtering. **[1]** |
| flip-on-small-screen | `Boolean`  | `true` | Flip Grid component on small screen. |
| height    | `Number`/`String` |   | Sets Grid to a fixed height. |  
| loading   | `Object`  | `{"type": "spinner", "color": "primary"}` | Loading progress indicator. |
| pageable  | `Boolean`/`Object` | `false` | Enable or disable pagination. **[2]** |
| row-hover | `Boolean` | `false` | Enable or disable row hover. |
| row-selection | `Boolean`/`Object` | `false` | Enable or disable row selection mode. |
| show-footer   | `Boolean` | `false` | Display or hide Grid column footer. |
| sortable  | `Boolean`/`Object` | `false` | Enable or disable column sort. |

</div>
<br>

**[1]** When `filterable` is defined as object, the properties are:

<div class="cmp-property">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| operator  | `String`  | `'eq'`  | The operator to be used when filtering the dataset. Valid values are: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `notin`, `startswith`, `endswith`, `contains`, `fts`. <br/> **Note**:<br/> `fts` operator is not fully supported by `BsArrayStore` and `BsStore` yet. <br/> When using `remoteFilter`, you have to implement these operators in the backend. |
| minlength | `Number`  | `1`     | Minimum character to start filtering. |
| logic     | `String`  | `'and'` | Logic to implement when multiple column filter is occured. Valid values are: `and`, `or`. |
| immediate | `Boolean` | `false` | If `true` then immediately start filtering when finish typing, otherwise start filtering when `ENTER` is pressed or event `onBlur` is triggered. |
| placeholder | `Boolean` | `true` | Enable or disable placeholder on input filter. |

</div>
<br>

**[2]** When `pageable` is defined as object, the properties are:

* <span class="text-primary font-weight-bold">messages</span>: `Object` 

  Configure the pagination text messages. The object properties are:

  * <span class="text-primary font-weight-bold">display</span>: `String` 

    Sets the displayed items pattern format. The default value is `'{0}-{1} of {2} items'`.

  * <span class="text-primary font-weight-bold">empty</span>: `String` 

    Sets the empty message when no data to be displayed.

  * <span class="text-primary font-weight-bold">pager</span>: `String` 
    Sets the text placed after paging combobox.

* <span class="text-primary font-weight-bold">pageSize</span>: `Number` 

  Number of items per-page. When empty, value from `BsStore` or `BsArrayStore` will be used.

* <span class="text-primary font-weight-bold">paging</span>: `Array` 

  Sets the paging combobox list values.


#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for registering columns. |
| datarow | Contents for Grid rows. |
| columnheader | Contents for custom columns header. |
| emptyMessage | Contents for empty dataset message. |
| gridfooter | Contents for custom Grid footer. |
| toolbar | Contents for Grid toolbar. |

</div>
<br>

### BsGridColumn - `<bs-grid-column>`

The component for registering Grid columns and to render the column header.

#### Properties

<div class="cmp-property">

| Property    | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| aggregate   | `String`/`Function` |  | Aggregate function to pass to the column footer. When `String` is passed, valid values are: `sum`, `avg`. |
| cell-data   | `Boolean` | `true` | Render this column in the Grid rows. |
| column-cls  | `String`  |  | Column css class name. |
| data-align  | `String`  |  | Cell data alignment, valid values: `left`, `right`, `center`, and `justify`. |
| data-style  | `Object`  |  | Cell data css styles. |
| field       | `String`  |  | The field name in the data source. |
| filterable  | `Boolean`/`Object` | `true` | Enable or disable column filtering. **[1]** |
| footer-cls  | `String`  |  | Sets column footer css class name. |
| footer-text | `String`  |  | Sets column footer text. |
| formatter   | `Function`|  | Cell data formatter function. |
| formatter-options | `String`/`Object`/`Array` |  | Value to pass to the second parameter in the formatter function. |
| header-align | `String` |  | Column header alignment, valid values: `left`, `right`, `center`, and `justify`. |
| header-style | `Object` |  | Column header css styles. |
| label     | `String` |  | Column header label. |
| min-width | `Number`/`String` | `100` | Sets the column minimum width. |
| order     | `Number`/`String`  |  | Grid rows column order. |
| row-numbering | `Boolean` | `false`  | Render this column as Grid row numbering. |  
| sortable   | `Boolean` | `true` | Enable or disable column sorter. |
| text-align | `String`  |  | Column header and cell data alignment, valid values: `left`, `right`, `center`, and `justify`. |
| width      | `Number`/`String` |  | Sets the column width. |

</div>
<br>

**[1]** When `filterable` is defined as object, the properties are:

<div class="cmp-property">

| Property | Type      | Default | Description |
|----------|-----------|---------|-------------|
| button   | `Boolean` | `false` | Show or hide action button to start the filtering operation. |
| enabled  | `Boolean` | `true`  | Enable or disable the column filtering. |
| field    | `String`  |  | Default is the field name registered by the column. | 
| operator | `String`  | `'eq'`  | The operator to be used when filtering the dataset. Valid values are: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `in`, `notin`, `startswith`, `endswith`, `contains`, `fts`. <br/> **Note**:<br/> `fts` operator is not fully supported by `BsArrayStore` and `BsStore` yet. <br/> When using `remoteFilter`, you have to implement these operators in the backend. |
| placeholder | `Boolean` | `true` | Show or hide placeholder on input field. |

</div>
<br>

### BsGridCell - `<bs-grid-cell>`

The component for rendering the Grid cell data. This component is used in custom cell data rendering.

#### Properties

<div class="cmp-property">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| column   | `Object` |  | The column object for this Cell. |
| item     | `Object` |  | The row item object for this Cell. |
| index    | `Number`/`String` |  | The row index position. |

</div>


#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for cell data. |

</div>
<br>

### BsGridCellNumbering - `<bs-grid-cell-numbering>`

The component for rendering the Grid row numbering cell. This component is used in custom cell data rendering.

#### Properties

<div class="cmp-property">

| Property | Type     | Default | Description |
|----------|----------|---------|-------------|
| column   | `Object` |  | The column object for this Cell. |
| item     | `Object` |  | The row item object for this Cell. |
| index    | `Number`/`String` |  | The row index position. |

</div>
<br>

### BsGridToolSearch - `<bs-grid-tool-search>`

The component to display search field in the Grid toolbar slots.

#### Properties

<div class="cmp-property">

| Property  | Type      | Default | Description |
|-----------|-----------|---------|-------------|
| autofocus | `Boolean` | `false` | Sets search field autofocus. |
| dark-mode | `Boolean` | `false` | Enable or disable dark background on search field. It is usefull when `<bs-grid-toolbar>` background color is other than `light-grey`, `light`, `white`, or light color. |
| field     | `String`  |  | The field name in the data source to apply the filtering. |
| inner-cls | `String`  |  | Css class name to apply to the search field. |
| logic     | `String`  | `'AND'` | The filtering logic. |
| minlength | `Number`/`String` | `3` | Minimum characters to start filtering. |
| name      | `String`  |  | Sets `<input>` element `name` attribute. |
| operator  | `String`  | `'contains'` | The filtering operation to apply. Valid values are: `eq`, `neq`, `startwith`, `endwith`, `contains`, `fts`. |
| placeholder | `String`| `'Search...'` | The field placeholder. |

</div>


<script src="./script/grid.js"></script>
