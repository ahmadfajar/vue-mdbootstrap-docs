:::lead
**BsCombobox** is a select field component which is used for collecting user provided 
information from a list of options.
:::


## Overview

**BsCombobox** component mimics the HTML5 `<select>` element. This means that you can add 
attributes like `required`, `readonly`, `disabled`, or `multiple` and it will react to 
them to give the best experience. You can also use `v-model` directive to create two-way 
data bindings on the `value` property as in `v-model="employee"`. This is useful to 
control or maintain the `value` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="employee0" :data-source="peopleSrc">
        <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
      </bs-combobox>
    </div>
    <div class="form-group">
      <bs-combobox :value="employee1" :data-source="peopleSrc" readonly>
        <label class="col-md-3 col-xl-2 col-form-label">State Readonly</label>
      </bs-combobox>
    </div>
    <div class="form-group">
      <bs-combobox :value="employee2" :data-source="peopleSrc" disabled>
        <label class="col-md-3 col-xl-2 col-form-label">State Disabled</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsArrayStore} from "vue-mdbootstrap";

export default {
  data() {
    return {
      employee0: null,
      employee1: 2,
      employee2: 3,
      peopleSrc: {
        proxy: new BsArrayStore([
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
        ),
        schema: {displayField: 'name', valueField: 'id'}
      },
    }
  },
  beforeDestroy() {
    this.peopleSrc.proxy.destroy();
    this.peopleSrc = null;
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
Do not use the `value` property when using `v-model`.
:::


## Clearable

Define the `clear-button` property explicitly, so that the field value can be cleared easily.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="employee3" :data-source="peopleSrc" clear-button>
        <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsArrayStore} from "vue-mdbootstrap";

export default {
  data() {
    return {
      employee3: null,
      peopleSrc: {
        proxy: new BsArrayStore([
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
        ),
        schema: {displayField: 'name', valueField: 'id'}
      },
    }
  },
  beforeDestroy() {
    this.peopleSrc.proxy.destroy();
    this.peopleSrc = null;
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


## Multiple Select Support

Define the `multiple` property explicitly to enable multiple selection mode.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="states0" 
                   :data-source="statesUS" 
                   placeholder="Select some States" 
                   clear-button
                   multiple>
        <label class="col-md-3 col-xl-2 col-form-label">US States</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      states0: [],
      statesUS: {
        proxy: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            remoteFilter: false,
            filters: [{property: 'country', value: 'US', operator: 'eq'}],
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/states.json'
            }
        })
      }
    }
  },
  beforeDestroy() {
    this.statesUS.proxy.destroy();
    this.statesUS = null;
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


### Controlling Checkbox Color Style and Position

In multiple selection mode, the checkbox color can be changed via `check-option-color` 
property. Any of the [MDBootstrap colors](#/reference/colors) variants can be used for
this property value. You can also change the checkbox position via `check-option-position` 
property. Valid values for this property are: `left`, `right`. If these property is not 
defined, then default value will be used.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="states1" 
                   :data-source="statesCA" 
                   check-option-color="primary" 
                   check-option-position="right" 
                   placeholder="Select some States"
                   clear-button
                   multiple>
        <label class="col-md-3 col-xl-2 col-form-label">Canada States</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      states1: [],
      statesCA: {
        proxy: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            remoteFilter: false,
            filters: [{property: 'country', value: 'CA', operator: 'eq'}],
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/states.json'
            }
        })
      }
    }
  },
  beforeDestroy() {
    this.statesCA.proxy.destroy();
    this.statesCA = null;
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


## Images or Avatars Support

The ListBox supports displaying images or avatars. Use `show-image` property to enable this
option and define the value of property `imageField` in the data source. By default, the 
value of property `imageField` is set to `image`.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="employee4" 
                   :data-source="peopleSrc" 
                   circle-image
                   show-image>
        <label class="col-md-3 col-xl-2 col-form-label">First Employee</label>
      </bs-combobox>
    </div>
    <div class="form-group">
      <bs-combobox v-model="employee5" 
                   :data-source="peopleSrc" 
                   rounded-image 
                   show-image>
        <label class="col-md-3 col-xl-2 col-form-label">Second Employee</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsArrayStore} from "vue-mdbootstrap";

export default {
  data() {
    return {
      employee4: null,
      employee5: null,
      peopleSrc: {
        proxy: new BsArrayStore([
              {id: 1, name: 'Sandra Adams', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/1.jpg'},
              {id: 2, name: 'Ali Connors', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg'},
              {id: 3, name: 'Trevor Hansen', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg'},
              {id: 4, name: 'Tucker Smith', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg'},
              {id: 5, name: 'Britta Holt', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/5.jpg'},
              {id: 6, name: 'Jane Smith', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg'},
              {id: 7, name: 'John Smith', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg'},
              {id: 8, name: 'Sandra Williams', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg'}
            ], {
              idProperty: 'id'
            }
        ),
        schema: {displayField: 'name', valueField: 'id', imageField: 'avatar'}
      },
    }
  },
  beforeDestroy() {
    this.peopleSrc.proxy.destroy();
    this.peopleSrc = null;
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


### Controlling Image Size

The size of images can be controlled via `image-size` property. Sets this property
to the desired numbers of pixels and the image will displayed according to the value.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="employee6" 
                   :data-source="peopleSrc" 
                   image-size="32"
                   rounded-image
                   show-image>
        <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsArrayStore} from "vue-mdbootstrap";

export default {
  data() {
    return {
      employee6: null,
      peopleSrc: {
        proxy: new BsArrayStore([
              {id: 1, name: 'Sandra Adams', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/1.jpg'},
              {id: 2, name: 'Ali Connors', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg'},
              {id: 3, name: 'Trevor Hansen', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg'},
              {id: 4, name: 'Tucker Smith', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg'},
              {id: 5, name: 'Britta Holt', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/5.jpg'},
              {id: 6, name: 'Jane Smith', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/3.jpg'},
              {id: 7, name: 'John Smith', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/2.jpg'},
              {id: 8, name: 'Sandra Williams', avatar: 'http://vue-mdbootstrap.fajarconsultant.com/img/4.jpg'}
            ], {
              idProperty: 'id'
            }
        ),
        schema: {displayField: 'name', valueField: 'id', imageField: 'avatar'}
      },
    }
  },
  beforeDestroy() {
    this.peopleSrc.proxy.destroy();
    this.peopleSrc = null;
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


## Hover Display Support

The Popover or ListBox container can be displayed using hover instead of clicking 
with the `open-on-hover` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="employee8" 
                   :data-source="peopleSrc" 
                   open-on-hover>
        <label class="col-md-3 col-xl-2 col-form-label">Employee</label>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsArrayStore} from "vue-mdbootstrap";

export default {
  data() {
    return {
      employee8: null,
      peopleSrc: {
        proxy: new BsArrayStore([
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
        ),
        schema: {displayField: 'name', valueField: 'id'}
      },
    }
  },
  beforeDestroy() {
    this.peopleSrc.proxy.destroy();
    this.peopleSrc = null;
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


## Setting ListBox Views

ListBox items can be organized in different ways by providing the template via `optionItem` 
slot. You can also change the ListBox background color.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="form-group">
      <bs-combobox v-model="selectedProduct" 
                   :data-source="products" 
                   placeholder="Select product"
                   listbox-color="blue-green" 
                   item-separator>
        <label class="col-md-3 col-xl-2 col-form-label">Product</label>
        <template slot="optionItem" slot-scope="{ item }">
          <bs-list-tile-title>
            <span>{{ item.ProductName }}</span>
            <span class="float-right font-weight-light small">${{ item.UnitPrice }}</span>
          </bs-list-tile-title>
          <bs-list-tile-subtitle>Stock : {{ item.UnitsInStock }}</bs-list-tile-subtitle>
        </template>
      </bs-combobox>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      selectedProduct: null,
      products: {
        proxy: new BsStore({
            idProperty: 'ProductID',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/product.json'
            }
        }),
        schema: {displayField: 'ProductName', valueField: 'ProductID'}
      }
    }
  },
  beforeDestroy() {
    this.products.proxy.destroy();
    this.products = null;
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


## Style Variants

**BsCombobox** comes with four style variants.

### Default

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="product0" 
                       :data-source="products" 
                       floating-label>
            <label>Select Product</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="product1" 
                       :data-source="products" 
                       placeholder="Select Product"
                       floating-label>
            <label>Product</label>
          </bs-combobox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      product0: null,
      product1: null,
      products: {
        proxy: new BsStore({
            idProperty: 'ProductID',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/product.json'
            }
        }),
        schema: {displayField: 'ProductName', valueField: 'ProductID'}
      }
    }
  },
  beforeDestroy() {
    this.products.proxy.destroy();
    this.products = null;
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


### Filled

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

*Available in Vue MDBootstrap since `v1.1.0`*

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="product2" 
                       :data-source="products" 
                       floating-label 
                       filled>
            <label>Select Product</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="product3" 
                       :data-source="products" 
                       placeholder="Select Product"
                       floating-label 
                       filled>
            <label>Product</label>
          </bs-combobox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      product2: null,
      product3: null,
      products: {
        proxy: new BsStore({
            idProperty: 'ProductID',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/product.json'
            }
        }),
        schema: {displayField: 'ProductName', valueField: 'ProductID'}
      }
    }
  },
  beforeDestroy() {
    this.products.proxy.destroy();
    this.products = null;
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


### Outlined

When combined with `floating-label` by defining it explicitly, this style variant will follow the 
Google Material Design spec.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="product4" 
                       :data-source="products" 
                       floating-label 
                       outlined>
            <label>Select Product</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="product5" 
                       :data-source="products" 
                       placeholder="Select Product"
                       floating-label 
                       outlined>
            <label>Product</label>
          </bs-combobox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      product4: null,
      product5: null,
      products: {
        proxy: new BsStore({
            idProperty: 'ProductID',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/product.json'
            }
        }),
        schema: {displayField: 'ProductName', valueField: 'ProductID'}
      }
    }
  },
  beforeDestroy() {
    this.products.proxy.destroy();
    this.products = null;
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


### Flat

This style will remove the borders and create flat appearance and can be combined with
`readonly` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox :data-source="products" 
                       :value="product6" 
                       flat 
                       readonly>
            <label class="col-md-3 col-xl-2 col-form-label">Product</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox :data-source="products" 
                       :value="product7"
                       floating-label 
                       flat 
                       readonly>
            <label>Product</label>
          </bs-combobox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      product6: 3,
      product7: 43,
      products: {
        proxy: new BsStore({
            idProperty: 'ProductID',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/product.json'
            }
        }),
        schema: {displayField: 'ProductName', valueField: 'ProductID'}
      }
    }
  },
  beforeDestroy() {
    this.products.proxy.destroy();
    this.products = null;
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


## Help Text

The `help-text` property on `<bs-combobox>` adds the provided string beneath the combobox field.
Using `persistent-help-text` keeps the help text visible when the combobox field is not focused.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState0" 
                       :data-source="statesCA" 
                       :persistent-help-text="false"
                       help-text="Select Canada State from the list" 
                       floating-label>
            <label>Canada State</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState1"
                       :data-source="statesCA" 
                       help-text="Select Canada State from the list" 
                       floating-label>
            <label>Canada State</label>
          </bs-combobox>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState2" 
                       :data-source="statesCA" 
                       :persistent-help-text="false"
                       help-text="Select Canada State from the list" 
                       filled
                       floating-label>
            <label>Canada State</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState3"
                       :data-source="statesCA" 
                       help-text="Select Canada State from the list" 
                       filled
                       floating-label>
            <label>Canada State</label>
          </bs-combobox>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState4" 
                       :data-source="statesCA" 
                       :persistent-help-text="false"
                       help-text="Select Canada State from the list" 
                       outlined
                       floating-label>
            <label>Canada State</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState5"
                       :data-source="statesCA" 
                       help-text="Select Canada State from the list" 
                       outlined
                       floating-label>
            <label>Canada State</label>
          </bs-combobox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      caState0: null,
      caState1: null,
      caState2: null,
      caState3: null,
      caState4: null,
      caState5: null,
      statesCA: {
        proxy: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            remoteFilter: false,
            filters: [{property: 'country', value: 'CA', operator: 'eq'}],
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/states.json'
            }
        })
      }
    }
  },
  beforeDestroy() {
    this.statesCA.proxy.destroy();
    this.statesCA = null;
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


## Icons

You can add icons to the combobox field with `prepend-icon`, `prepend-icon-outer`, `append-icon` 
or `append-icon-outer` property.

:::demo
```html
<template>
  <div class="my-demo-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState6" 
                       :data-source="statesCA" 
                       prepend-icon="building" 
                       floating-label 
                       filled>
            <label>Prepend</label>
          </bs-combobox>
        </div>
        <div class="form-group">
          <bs-combobox v-model="caState7" 
                       :data-source="statesCA" 
                       prepend-icon-outer="building" 
                       floating-label 
                       filled>
            <label>Prepend Outer</label>
          </bs-combobox>
        </div>
        <div class="form-group">
          <bs-combobox v-model="caState8" 
                       :data-source="statesCA" 
                       append-icon="building" 
                       floating-label 
                       filled>
            <label>Append</label>
          </bs-combobox>
        </div>
        <div class="form-group">
          <bs-combobox v-model="caState9" 
                       :data-source="statesCA" 
                       append-icon-outer="building" 
                       floating-label 
                       filled>
            <label>Append Outer</label>
          </bs-combobox>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <bs-combobox v-model="caState10"
                       :data-source="statesCA" 
                       prepend-icon="building" 
                       floating-label 
                       outlined>
            <label>Prepend</label>
          </bs-combobox>
        </div>
        <div class="form-group">
          <bs-combobox v-model="caState11"
                       :data-source="statesCA" 
                       prepend-icon-outer="building" 
                       floating-label 
                       outlined>
            <label>Prepend Outer</label>
          </bs-combobox>
        </div>
        <div class="form-group">
          <bs-combobox v-model="caState12"
                       :data-source="statesCA" 
                       append-icon="building" 
                       floating-label 
                       outlined>
            <label>Append</label>
          </bs-combobox>
        </div>
        <div class="form-group">
          <bs-combobox v-model="caState13"
                       :data-source="statesCA" 
                       append-icon-outer="building" 
                       floating-label 
                       outlined>
            <label>Append Outer</label>
          </bs-combobox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {BsStore} from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

export default {
  data() {
    return {
      caState6: null,
      caState7: null,
      caState8: null,
      caState9: null,
      caState10: null,
      caState11: null,
      caState12: null,
      caState13: null,
      statesCA: {
        proxy: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            remoteSort: false,
            remoteFilter: false,
            filters: [{property: 'country', value: 'CA', operator: 'eq'}],
            restProxy: {
                browse: 'https://vue-mdbootstrap.fajarconsultant.com/data/states.json'
            }
        })
      }
    }
  },
  beforeDestroy() {
    this.statesCA.proxy.destroy();
    this.statesCA = null;
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

### Properties

<div class="cmp-property">

| Property     | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| append-icon  | `String`  |         | Sets icon to display on inner right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| append-icon-outer     | `String` | | Sets icon to display on outer right side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. <bs-badge>v1.1.0</bs-badge> |
| check-option-color    | `String` | `'purple'` | Sets the checkbox color for ListBox options. Any of the [MDBootstrap colors](#/reference/colors) variants can be applied. |
| check-option-position | `String` | `'left'`   | Sets the checkbox position for ListBox options. Valid values are: `left`, `right`. |
| circle-image | `Boolean` | `false` | Sets **circle** effect for the displayed image from ListBox item. |
| clear-button | `Boolean` | `false` | Sets **auto show** the clear button. |
| data-source  | `Object`  |  | Sets data source for the ListBox options. |
| disabled     | `Boolean` | `false` | Enable/disable the component and the `<select>` element. |
| empty-data-message | `String` | `'No data to display.'` | Sets the **no data message** when ListBox options is empty. |
| external-validator | `Object` |    | Sets external validator plugin to be used when validate the field value. See [Reference - Form Validation](#/reference/form-validation), to learn how to implement the validation. |
| filled       | `Boolean` | `false` | Create the component with **filled** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. <bs-badge>v1.1.0</bs-badge> |
| flat         | `Boolean` | `false` | Create the component with **flat** appearance, and removes the borders. The component appearance will be styled like plain text. |
| floating-label | `Boolean` | `false` | Create the component with floating field label. See [Google Material Design](https://material.io/components/text-fields) spec. |
| help-text      | `String`  |         | The help text to display below the field component. |
| id             | `String`  |         | Sets `<select>` element `ID` attribute. This property value is auto generates. |
| image-size     | `Number`/`String` | | Sets the image size for each ListBox items when `show-image` is enabled. |
| item-separator | `Boolean` | `false` | Show or hide the ListBox item separator. |
| listbox-color  | `String`  |         | Sets the ListBox background color. Any of [MDBootstrap colors](#/reference/colors) or [Material colors](#/reference/colors) variants can be applied. |
| minimum-items-for-search | `Number`/`String` | `15` | Sets minimum character to start searching an item inside the ListBox options. |
| multiple | `Boolean` | `false`  | Enable or disable multiple selection. |
| name     | `String`/`Number` |  | Sets `<select>` element `name` attribute. |
| not-found-message | `String` | `'Data not found.'` | Sets the **not found message** when searching returns no result. |
| open     | `Boolean` | `false`  | Popover state: **show** or **hide**. |
| open-on-hover | `Boolean` | `false` | Triggers the Popover to display when `mouseenter`. |
| outlined      | `Boolean` | `false`  | Create the component with **outlined** appearance. See [Google Material Design](https://material.io/components/text-fields) spec. |
| parent-value  | `String`/`Number`/`Boolean` |  | Sets the cascading combobox parent value. |
| persistent-help-text | `Boolean` | `true` | Keeps help text visible when the component is not focused. |
| placeholder   | `String`  |       | Sets the combobox field placeholder. |
| popover-max-height | `Number`/`String` | `300` | Sets maximum height for the Popover or ListBox container. |
| popover-min-width  | `Number`/`String` |  | Sets minimum width for the Popover or ListBox container. |
| prepend-icon  | `String`  |       | Sets icon to display on inner left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. |
| prepend-icon-outer | `String` |  | Sets icon to display on outer left side. Use any valid [FontAwesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon name. <bs-badge>v1.1.0</bs-badge> |
| readonly      | `Boolean` | `false` | Put the component in readonly state and sets the `<select>` element `readonly` attribute. |
| required      | `Boolean` | `false` | Sets `<select>` element `required` attribute. |
| rounded-image | `Boolean` | `false` | Sets **rounded** effect for the displayed image from ListBox item. |
| show-image    | `Boolean` | `false` | Show or hide image if ListBox item's object contains image field. |
| transition    | `string`  | `'scale'` | Transition animation when showing the Popover. |
| value <bs-badge color="unique text-white">v-model</bs-badge> | `String`/`Number`/`Object`/`Boolean` |  | The value monitored by `v-model` to maintain field value. |
| value-as-object | `Boolean` | `false` | Sets the returns value from `v-model` as object. |

</div>


### Events

<div class="cmp-property">

| Name    | Argument Type     | Description |
|---------|-------------------|-------------|
| change  | (`Object` value, `Object` oldValue) | Triggers when selected item is changed. |
| close   |                | Triggers when Popover is hiding. |
| data-bind   | `Object[]` | Triggers after data has been fetched. |
| data-error  | `Object`   | Triggers when error occured while fetching the data. |
| data-filter | `Object[]` | Triggers when filtering the data. |
| deselect | `Object` | Triggers when a selected item is deselected. |
| input    | `String`/`Number`/`Object`/`Boolean` | Used to update the `value` property. |
| open     | `Boolean`           | Triggers when updating Popover state: `show` or `hide`. |
| select   | `Object[]`/`Object` | Triggers when item is selected. |

</div>


### Slots

<div class="cmp-property">

| Name             | Description  |
|------------------|--------------|
| appendIcon       | Contents for custom icon on inner right side. |
| appendIconOuter  | Contents for custom icon on outer right side. <bs-badge>v1.1.0</bs-badge> |
| default          | Contents for field label. |
| emptyData        | Contents for empty data message. |
| helpText         | Contents for custom help text. |
| optionItem       | Contents for List options. |
| prependIcon      | Contents for custom icon on inner left side. |
| prependIconOuter | Contents for custom icon on outer left side. <bs-badge>v1.1.0</bs-badge> |

</div>

<script src="./script/combobox.js"></script>
