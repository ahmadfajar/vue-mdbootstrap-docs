:::lead
**BsGrid** is a component for displaying tabular data. Features include pagination, 
sorting, searching, filtering and row selection. 
:::


## Overview

The standard **BsGrid** will by default render your data as simple rows.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source0" pageable row-hover sortable>
        <bs-grid-column field="name" label="Dessert (100g serving)" min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" label="Calories" width="120"></bs-grid-column>
        <bs-grid-column field="fat" label="Fat (g)" width="100"></bs-grid-column>
        <bs-grid-column field="carbs" label="Carbs (g)" width="100"></bs-grid-column>
        <bs-grid-column field="protein" label="Protein (g)" width="120"></bs-grid-column>
        <bs-grid-column field="iron" label="Iron (%)" width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

export default {
  data() {
    return {
      source0: new BsStore({
        idProperty: 'name',
        dataProperty: 'data',
        totalProperty: 'total',
        pageSize: 10,
        remoteFilter: false,
        remotePaging: false,
        remoteSort: false,
        sorts: [{property: 'name', direction: 'asc'}],
        restProxy: {
          browse: './data/deserts.json'
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


## Pagination

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source1" :pageable="pagination" row-hover>
        <bs-grid-column field="name" label="Dessert (100g serving)" min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" label="Calories" width="120"></bs-grid-column>
        <bs-grid-column field="fat" label="Fat (g)" width="100"></bs-grid-column>
        <bs-grid-column field="carbs" label="Carbs (g)" width="100"></bs-grid-column>
        <bs-grid-column field="protein" label="Protein (g)" width="120"></bs-grid-column>
        <bs-grid-column field="iron" label="Iron (%)" width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/deserts.json'
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

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source2" pageable row-hover>
        <bs-grid-column label="#" text-align="right" width="50" row-numbering></bs-grid-column>
        <bs-grid-column field="name" label="Dessert (100g serving)" min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" label="Calories" width="120"></bs-grid-column>
        <bs-grid-column field="fat" label="Fat (g)" width="100"></bs-grid-column>
        <bs-grid-column field="carbs" label="Carbs (g)" width="100"></bs-grid-column>
        <bs-grid-column field="protein" label="Protein (g)" width="120"></bs-grid-column>
        <bs-grid-column field="iron" label="Iron (%)" width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/deserts.json'
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

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source3" pageable row-hover sortable>
        <bs-grid-column :sortable="false" field="name" label="Dessert (100g serving)" min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" label="Calories" width="120"></bs-grid-column>
        <bs-grid-column field="fat" label="Fat (g)" width="100"></bs-grid-column>
        <bs-grid-column field="carbs" label="Carbs (g)" width="100"></bs-grid-column>
        <bs-grid-column field="protein" label="Protein (g)" width="120"></bs-grid-column>
        <bs-grid-column field="iron" label="Iron (%)" width="100"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/deserts.json'
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

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="stateSources0" :filterable="{minlength: 2, operator: 'contains'}" pageable row-hover sortable>
        <bs-grid-column text-align="right" width="50" row-numbering></bs-grid-column>
        <bs-grid-column field="value" label="ID" width="75"></bs-grid-column>
        <bs-grid-column field="text" label="State Name" min-width="150"></bs-grid-column>
        <bs-grid-column field="country" label="Country ID" width="125"></bs-grid-column>
        <bs-grid-column :filterable="false" field="description" label="Comments" min-width="150"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/states.json'
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


### Custom Filter

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="stateSources1" pageable row-hover sortable>
        <bs-grid-toolbar slot="toolbar">
          <div class="row justify-content-end">
            <div class="col-lg-6">
              <bs-grid-tool-search field="text" operator="contains" placeholder="Search..."></bs-grid-tool-search>
            </div>
          </div>
        </bs-grid-toolbar>
        <bs-grid-column text-align="right" width="50" row-numbering></bs-grid-column>
        <bs-grid-column field="value" label="ID" width="75"></bs-grid-column>
        <bs-grid-column field="text" label="State Name" min-width="150"></bs-grid-column>
        <bs-grid-column field="country" label="Country ID" width="125"></bs-grid-column>
        <bs-grid-column field="description" label="Comments" min-width="150" :filterable="false"></bs-grid-column>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/states.json'
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


## Custom Renderer Support

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source4" pageable row-hover sortable>
        <bs-grid-column field="name" label="Dessert (100g serving)" min-width="175"></bs-grid-column>
        <bs-grid-column field="calories" label="Calories" width="120" text-align="center"></bs-grid-column>
        <bs-grid-column field="fat" label="Fat (g)" width="100"></bs-grid-column>
        <bs-grid-column field="carbs" label="Carbs (g)" width="100"></bs-grid-column>
        <bs-grid-column field="protein" label="Protein (g)" width="120"></bs-grid-column>
        <bs-grid-column field="iron" label="Iron (%)" width="100" text-align="center"></bs-grid-column>
        <bs-grid-column label="Action" width="100" text-align="center"></bs-grid-column>
        
        <template v-slot:datarow="{ columns, item, index }">
          <bs-grid-cell :column="columns[0]" :item="item" :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[1]" :item="item" :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[2]" :item="item" :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[3]" :item="item" :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[4]" :item="item" :index="index"></bs-grid-cell>
          <bs-grid-cell :column="columns[5]" :item="item" :index="index" :class="{'bg-warning': item.iron > 15}">
            {{ item.iron }}%
          </bs-grid-cell>
          <bs-grid-cell :column="columns[6]" :item="item" :index="index">
            <bs-button icon="pen" mode="icon" size="sm" color="secondary" flat @click="btnClick(item, 'Edit Item')"></bs-button>
            <bs-button icon="trash-alt" mode="icon" size="sm" color="danger" flat @click="btnClick(item, 'Delete Item')"></bs-button>
          </bs-grid-cell>
        </template>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/deserts.json'
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

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <bs-card shadow>
      <bs-grid :data-source="source5" :flip-on-small-screen="false" bordered pageable row-hover sortable>
        <template v-slot:columnheader>
          <bs-grid-rowhead>
            <bs-grid-column field="name" label="Dessert (100g serving)" min-width="175" rowspan="2"></bs-grid-column>
            <bs-grid-column field="calories" label="Calories" width="100" rowspan="2" text-align="center"></bs-grid-column>
            <bs-grid-column :cell-data="false" label="Join Column" colspan="3" header-align="center" order="6"></bs-grid-column>
            <bs-grid-column field="iron" label="Iron (%)" width="100" rowspan="2" text-align="center" order="5"></bs-grid-column>
          </bs-grid-rowhead>
          <bs-grid-rowhead>
            <bs-grid-column field="fat" label="Fat (g)" width="100" text-align="right" order="2"></bs-grid-column>
            <bs-grid-column field="carbs" label="Carbs (g)" width="100" text-align="right" order="3"></bs-grid-column>
            <bs-grid-column field="protein" label="Protein (g)" width="120" text-align="right" order="4" class="border-right"></bs-grid-column>
          </bs-grid-rowhead>
        </template>
      </bs-grid>
    </bs-card>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

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
          browse: './data/deserts.json'
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


## Component Reference

### BsGrid - `<bs-grid>`

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

**[2]** When `pageable` is defined as object, the properties are:

<div class="cmp-property">

| Property | Type     | Description |
|----------|----------|-------------|
| messages | `Object` | Enable or disable row selection mode. |
| pageSize | `Number` | Display Grid footer at bottom. |
| paging   | `Array`  | Enable or disable column sort. |

</div>


#### Slots

<div class="cmp-property">

| Name    | Description  |
|---------|--------------|
| default | Contents for registering columns. |
| columnheader | Contents for custom columns header. |
| datarow | Contents for Grid rows. |
| emptyMessage | Contents for empty dataset message. |
| gridfooter | Contents for custom Grid footer. |
| toolbar | Contents for Grid toolbar. |

</div>


### BsGridColumn - `<bs-grid-column>`

#### Properties


<script src="./script/grid.js"></script>
