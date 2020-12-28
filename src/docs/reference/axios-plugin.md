::: lead
**Vue MDBootstrap** provides built-in **axios plugin** to perform HTTP request. The plugin will
forward all the HTTP request task to the [axios library](https://github.com/axios/axios).
:::


## Usage

Use `this.$http` instance injection to access the plugin object. Additionally, if you prefer to
access axios instance directly, use `this.$axios`. Please refers to [axios library](https://github.com/axios/axios)
for complete documentation.

```js
import Vue from "vue";
import { AxiosPlugin } from "vue-mdbootstrap";

Vue.use(AxiosPlugin);

let vm = new Vue({
  methods: {
    someMethod() {
      this.$http.get("<api-url>")
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
    }
  }
});

```


## API

<div class="refs-api">

* INSTANCE METHOD

* <span class="text-primary font-weight-bold">get</span>(`String` url, `Object` [data], `Object` [options]) : <em class="text-grey-500">Promise</em>

  Send **HTTP GET** to the remote server and returns **Promise** instance.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">url</span> : The API url.

  <span class="text-unique font-weight-bold">data</span> : The additional data to be send. *(optional)*

  <span class="text-unique font-weight-bold">options</span> : The configuration options. *(optional)*

* <span class="text-primary font-weight-bold">post</span>(`String` url, `Object` data, `Object` [options]) : <em class="text-grey-500">Promise</em>

  Send **HTTP POST** to the remote server and returns **Promise** instance.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">url</span> : The API url.

  <span class="text-unique font-weight-bold">data</span> : The data to be send.

  <span class="text-unique font-weight-bold">options</span> : The configuration options. *(optional)*

* <span class="text-primary font-weight-bold">put</span>(`String` url, `Object` data, `Object` [options]) : <em class="text-grey-500">Promise</em>

  Send **HTTP PUT** to the remote server and returns **Promise** instance.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">url</span> : The API url.

  <span class="text-unique font-weight-bold">data</span> : The data to be send.

  <span class="text-unique font-weight-bold">options</span> : The configuration options. *(optional)*

* <span class="text-primary font-weight-bold">delete</span>(`String` url, `Object` data, `Object` [options]) : <em class="text-grey-500">Promise</em>

  Send **HTTP DELETE** to the remote server and returns **Promise** instance.

  <span class="text-muted font-weight-bold">PARAMETERS<span>

  <span class="text-unique font-weight-bold">url</span> : The API url.

  <span class="text-unique font-weight-bold">data</span> : The data to be send.

  <span class="text-unique font-weight-bold">options</span> : The configuration options. *(optional)*

</div>