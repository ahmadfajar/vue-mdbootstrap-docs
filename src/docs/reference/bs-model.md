::: lead
**Vue MDBootstrap** provides built-in data model class for working with entity object and remote API.
**BsModel** represents an entity object that your application manages. For example, one might define 
a Model for Users, Products, Cars, or other real-world object that we want to model in the system.
Models also can be used for binding data by most of the input control components.
:::


## Overview

Using data model to define a set of fields that represents an entity object.

```js
import { BsModel } from "vue-mdbootstrap";

let user = new BsModel({
  uid: null,
  username: null,
  displayName: null,
  email: null,
  phoneNumber: null,
  enabled: true
});
```

After the fields is defined, we can use simple code to assign value to a field.

```js
user.username = 'John Doe';
```

Or using a method to assign all fields value.

```js
user.assignValues({
  uid: 123,
  username: 'john.doe',
  displayName: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '061-430940',
  enabled: true
});
```


## Working with REST API

Sometimes we want to work with RESTful backend to load and save data. We can achieve
this by configuring the RestProxy when creating the Model instance.

```js
import { BsModel } from "vue-mdbootstrap";

let user = new BsModel({
  schema: {
    uid: null,
    username: null,
    displayName: null,
    email: null,
    phoneNumber: null,
    enabled: true,
  },
  proxy: {
    save: { url: './api/users', method: 'post' },
    update: { url: './api/users', method: 'put' },
    delete: { url: './api/users', method: 'delete' },
    fetch: './api/users/{id}',
  }
}, null, 'uid');
```

Loading data can be done by :

```js
user.fetch(123)
    .catch(function (error) {
      console.log(error);
    });
```

After setting all fields value, we can ask the RESTful backend to save 
the Model as a new record by :

```js
user.save()
    .catch(function (error) {
      console.log(error);
    });
```

And to perform update via RESTful backend can be done by :

```js
user.update()
    .catch(function (error) {
      console.log(error);
    });
```

If the RESTful backend needs CSRF token within the **POST**, **PUT** or **DELETE** request,
we can accomplish it with :

```js
import { BsModel } from "vue-mdbootstrap";

let user = new BsModel({
  schema: {
    uid: null,
    username: null,
    displayName: null,
    email: null,
    phoneNumber: null,
    enabled: true,
  },
  proxy: {
    save: { url: './api/users', method: 'post' },
    update: { url: './api/users', method: 'put' },
    delete: { url: './api/users', method: 'delete' },
    fetch: './api/users/{id}',
  },
  csrfConfig: {
    url: './api/token/{name}',
    // 'token_name' is a keyword to identify the token. 
    // This keyword is used by the RESTful backend to create the CSRF token.
    tokenName: 'token_name', 
    dataField: 'value',
    // If 'suffix' is 'true' then the keyword will become: 'token_name-create', 'token_name-update', 'token_name-delete'
    // when perfoming HTTP request to save, update or delete record.
    suffix: false,
  }
}, null, 'uid');
```

## Working with virtual fields

Sometimes RESTful backend delivers a nested object, but we want our Model represents
a simple object Model. We can solve this situation using virtual fields and combine them
with `onAfterFetch` event which is triggered after successfully loading or saving the 
object Model.

```js
// ActivityModel.js
import Vue from "vue";
import { BsModel } from "vue-mdbootstrap";

export class ActivityModel extends BsModel{
  constructor() {
    const model = {
      schema: {
        uid: null,
        code: null,
        status: null,
        title: null,
        periode: null,
        year: null,
      },
      proxy: {
        save: { url: './api/activty', method: 'post' },
        update: { url: './api/activty', method: 'put' },
        delete: { url: './api/activty', method: 'delete' },
        fetch: './api/activty/{id}',
      }
    };

    super(model, null, 'uid');
    // below is the virtual fields
    Vue.set(this, 'anggaran', null);
    Vue.set(this, 'realisasi', null);
    Vue.set(this, 'programId', null);
    Vue.set(this, 'programName', null);
    Vue.set(this, 'batchId', null);
    Vue.set(this, 'batchName', null);
  }

  onAfterFetch(data) {
    // assigns value to virtual fields when the 'onAfterFetch' event is triggered
    Vue.set(this, 'anggaran', data.anggaran);
    Vue.set(this, 'realisasi', data.realisasi);

    if (data.program) {
      Vue.set(this, 'programId', data.program.id);
      Vue.set(this, 'programName', data.program.title);
    }
    if (data.batch) {
      Vue.set(this, 'batchId', data.batch.id);
      Vue.set(this, 'batchName', data.batch.title);
    }
  }
};

// otherfile.js
import { ActivityModel } from "./ActivityModel";

let myModel = new ActivityModel();
myModel.fetch(123)
       .catch(function (error) {
          console.log(error);
       });
```


## API

<div class="refs-api">

-   CONSTRUCTOR DETAIL

-   <span class="text-primary font-weight-bold">BsModel</span>(`Object` schema, 
    `Object` [adapter], `String` [idProperty], `String` [dataProperty])

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">schema</span> : The data model schema.

    -   <span class="text-unique font-weight-bold">adapter</span> : Axios adapter 
        instance. *(optional)*
    -   <span class="text-unique font-weight-bold">idProperty</span> : Data model ID 
        field name, default is `id`. *(optional)*
    -   <span class="text-unique font-weight-bold">dataProperty</span> : REST response 
        data property, default is `data`. *(optional)*

</div>

<div class="refs-api">

-   INSTANCE PROPERTY

-   <span class="text-primary font-weight-bold">proxy</span> : <em class="text-grey-500">ProxyAdapter</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The proxy adapter that is used to work with RESTful backend.

-   <span class="text-primary font-weight-bold">csrfConfig</span> : <em class="text-grey-500">Object</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The CSRF configuration that is used when instantiate the Model.

-   <span class="text-primary font-weight-bold">restUrl</span> : <em class="text-grey-500">Object</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The REST Url configuration that is used when instantiate the Model.

-   <span class="text-primary font-weight-bold">loading</span> : <em class="text-grey-500">Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The Model state, whether it is loading data or not.

-   <span class="text-primary font-weight-bold">updating</span> : <em class="text-grey-500">Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The Model state, whether it is saving/updating data to the backend server or not.

-   <span class="text-primary font-weight-bold">deleting</span> : <em class="text-grey-500">Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The Model state, whether it is deleting data or not.

-   <span class="text-primary font-weight-bold">hasError</span> : <em class="text-grey-500">Boolean</em> <bs-badge variant="secondary">READONLY</bs-badge>
  
    The Model state, whether there was an error when loading/saving/deleting data or not.

</div>

<div class="refs-api">

-   INSTANCE METHOD

-   <span class="text-primary font-weight-bold">assignValue</span>(`String` field, `any` newVal)

    Assign new value to a field.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">field</span> : The field name.

    -   <span class="text-unique font-weight-bold">newVal</span> : The new value.

-   <span class="text-primary font-weight-bold">assignValues</span>(`Object` newVal)

    Assign new value to some fields.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">newVal</span> : The value with format field-value pairs.

-   <span class="text-primary font-weight-bold">delete</span>() : <em class="text-grey-500">Promise</em>

    Perform delete record that already exists on the remote service via REST API and returns **Promise** instance.

-   <span class="text-primary font-weight-bold">fetch</span>(`String|Number` [id]) : <em class="text-grey-500">Promise</em>

    Perform fetch or read record from remote service via REST API and returns **Promise** instance.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">id</span> : The record ID to load from the remote service. *(optional)*

-   <span class="text-primary font-weight-bold">destroy</span>()

    Destroy all metadata and fields in this data model.

-   <span class="text-primary font-weight-bold">getFields</span>() : <em class="text-grey-500">String[]</em>

    Get all field names.

-   <span class="text-primary font-weight-bold">getIdProperty</span>() : <em class="text-grey-500">String</em>

    Get ID field name for this data model.

-   <span class="text-primary font-weight-bold">request</span>(`String` name, `String` method, `Object` [params], 
    `Object` [data], `Function` [successCallback], `Function` [errorCallback]) : <em class="text-grey-500">Promise</em>

    Perform custom HTTP request to the remote service via REST API and returns **Promise** instance.

    <span class="text-muted font-weight-bold">PARAMETERS<span>

    -   <span class="text-unique font-weight-bold">name</span> : The key from **restUrl** property.

    -   <span class="text-unique font-weight-bold">method</span> : Any valid HTTP method, likes: `get`, `post`, `delete`, `put`, `patch`. The default is `get`.

    -   <span class="text-unique font-weight-bold">params</span> : Parameters to append when invoke REST request. *(optional)*

    -   <span class="text-unique font-weight-bold">data</span> : Data to append when invoke REST request. *(optional)*

    -   <span class="text-unique font-weight-bold">successCallback</span> : The callback to be called when the request is successful. *(optional)*

    -   <span class="text-unique font-weight-bold">errorCallback</span> : The callback to be called when the request is failed. *(optional)*

-   <span class="text-primary font-weight-bold">reset</span>()

    Reset all fields value to its default.

-   <span class="text-primary font-weight-bold">resetState</span>()

    Reset model state back to their initial state, ie. `loading`, `updating`, etc.

-   <span class="text-primary font-weight-bold">save</span>() : <em class="text-grey-500">Promise</em>

    Persist new record to the remote service via REST API and returns **Promise** instance.

-   <span class="text-primary font-weight-bold">update</span>() : <em class="text-grey-500">Promise</em>

    Update and persist record that already exists on the remote service via REST API and returns **Promise** instance.

-   <span class="text-primary font-weight-bold">freeze</span>() : <em class="text-grey-500">BsModel</em>

    Freeze this data model instance, makes it Readonly and prevents any modification.

-   <span class="text-primary font-weight-bold">seal</span>() : <em class="text-grey-500">BsModel</em>

    Seal this data model instance, preventing new properties from being added to it and 
    marking all existing properties as non-configurable. Values of present properties can 
    still be changed as long as they are writable.

-   <span class="text-primary font-weight-bold">toJSON</span>() : <em class="text-grey-500">Object</em>

    Convert field attributes into javascript plain object.

</div>
