<template>
  <div class="demo-block">
    <div class="demo-block-tools">
      <bs-tooltip content="Invert example background color" placement="top">
        <bs-button
          color="mdb-color"
          flat
          mode="icon"
          @click="invertBgColor">
          <bs-icon icon="invert-colors" size="24" />
        </bs-button>
      </bs-tooltip>
      <bs-tooltip content="Run this demo on jsfiddle.net" placement="top">
        <bs-button
          color="mdb-color"
          flat
          icon="cloud"
          mode="icon"
          @click="goJsfiddle" />
      </bs-tooltip>
      <bs-tooltip :content="tooltipText" placement="top">
        <bs-button
          color="mdb-color"
          mode="icon"
          icon="code"
          flat
          @click="toggle" />
      </bs-tooltip>
    </div>
    <bs-expand-transition>
      <div
        v-show="visible"
        class="meta bg-grey-200 border-bottom border-grey-400">
        <slot name="highlight"></slot>
      </div>
    </bs-expand-transition>
    <div :class="demoBgCls" class="demo-block-content">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoBlock",
  props: {
    jsfiddle: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    invertCounter: 2,
    visible: false,
  }),
  computed: {
    demoBgCls() {
      return {
        'bg-white': this.invertCounter === 1,
        ['bg-grey-' + (this.invertCounter * 100)]: this.invertCounter > 1,
      }
    },
    tooltipText() {
      return this.visible ? "Hide the source" : "Show the source";
    },
  },
  methods: {
    invertBgColor() {
      if (this.invertCounter > 0 && this.invertCounter < 9) {
        this.invertCounter++;
      } else {
        this.invertCounter = 1;
      }
    },
    toggle() {
      this.visible = !this.visible;
    },
    goJsfiddle() {
      const { html, script, style } = this.jsfiddle;

      const resourcesTpl =
        '<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.6.0/dist/css/bootstrap.min.css" crossorigin="anonymous">\n' +
        '<link rel="stylesheet" href="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.min.css" crossorigin="anonymous">\n' +
        "<scr" + 'ipt src="https://unpkg.com/vue@2.6.14/dist/vue.min.js" crossorigin="anonymous"></scr' + "ipt>" +
        "<scr" + 'ipt src="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.min.js" crossorigin="anonymous"></scr' + "ipt>";

      const cssTpl = `${(style || "").trim()}\n`;
      const htmlTpl = `${resourcesTpl}\n<div id="app">${html}</div>`;
      let jsTpl = (script || "")
        .replace(/import.*";\n/g, "")
        .replace(/export default/, "var Main =")
        .replace("use(AxiosPlugin)", "use(VueMdb.AxiosPlugin)")
        .replaceAll("new BsStore(", "new VueMdb.BsStore(")
        .replaceAll("new BsArrayStore(", "new VueMdb.BsArrayStore(")
        .replaceAll("new BsTreeStore(", "new VueMdb.BsTreeStore(")
        .replaceAll("new BsModel(", "new VueMdb.BsModel(")
        .trim();

      jsTpl = jsTpl
        ? jsTpl +
          "\n\nvar Ctor = Vue.extend(Main);" +
          "\nnew Ctor().$mount('#app');"
        : "new Vue().$mount('#app');";

      const data = {
        js: jsTpl,
        css: cssTpl,
        html: htmlTpl,
        panel_js: 3,
        panel_css: 1,
      };

      const form =
        document.getElementById("fiddle-form") ||
        document.createElement("form");
      form.innerHTML = "";
      const node = document.createElement("textarea");

      form.method = "post";
      form.action = "https://jsfiddle.net/api/post/library/pure/";
      form.target = "_blank";

      const keys = Object.keys(data);
      keys.forEach((key) => {
        node.name = key;
        node.value = data[key].toString();
        form.appendChild(node.cloneNode());
      });

      form.setAttribute("id", "fiddle-form");
      form.style.display = "none";
      document.body.appendChild(form);

      form.submit();
    },
  },
};
</script>

<style lang="scss">
.demo-block {
  position: relative;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 30px;

  .meta {
    padding: 0;

    .hljs {
      border-radius: 0;
      margin-bottom: 0;
    }
  }
}

.demo-block-content {
  display: flex;
  padding: 48px 16px 16px;
  justify-content: center;

  .demo-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    html {
      width: 100%;

      > body {
        background: transparent;

        h2,
        h3,
        h4 {
          padding-top: 0;
        }
      }
    }

    .my-demo-wrapper {
      width: 100%;
    }
  }
}

.demo-block-tools {
  padding: 6px 16px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
}

@media (min-width: 992px) {
  .demo-block {
    margin-left: 0;
    margin-right: 0;

    .demo-block-content {
      padding: 48px 24px 20px;
    }
  }
}
</style>
