<script>
import DemoBlock from "@/components/DemoBlock";

export default {
  name: "DemoValidation",
  extends: DemoBlock,
  methods: {
    goJsfiddle() {
      const { html, script, style } = this.jsfiddle;

      const resourcesTpl =
        '<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.6.0/dist/css/bootstrap.min.css" crossorigin="anonymous">\n' +
        '<link rel="stylesheet" href="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.min.css" crossorigin="anonymous">\n' +
        "<scr" + 'ipt src="https://unpkg.com/vue@2.6.14/dist/vue.min.js" crossorigin="anonymous"></scr' + "ipt>\n" +
        "<scr" + 'ipt src="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.min.js" crossorigin="anonymous"></scr' + "ipt>\n" +
        "<scr" + 'ipt src="https://unpkg.com/vuelidate/dist/vuelidate.min.js" crossorigin="anonymous"></scr' + "ipt>\n" +
        "<scr" + 'ipt src="https://unpkg.com/vuelidate/dist/validators.min.js" crossorigin="anonymous"></scr' + "ipt>";

      const cssTpl = `${(style || "").trim()}\n`;
      const htmlTpl = `${resourcesTpl}\n<div id="app">${html}</div>`;
      let jsTpl = (script || "")
        .replace(/import.*";\n/g, "")
        .replace(/mixins: \[validationMixin\],\n/, "")
        .replace(/export default/, "var Main =")
        .replace("use(AxiosPlugin)", "use(VueMdb.AxiosPlugin)")
        .replaceAll("new BsStore(", "new VueMdb.BsStore(")
        .replaceAll("new BsArrayStore(", "new VueMdb.BsArrayStore(")
        .replaceAll("new BsTreeStore(", "new VueMdb.BsTreeStore(")
        .replaceAll("new BsModel(", "new VueMdb.BsModel(")
        .trim();

      jsTpl = jsTpl
        ? "Vue.use(window.vuelidate.default);\n" +
          "const {email, required, minLength, maxLength, requiredUnless} = window.validators;\n\n" +
          jsTpl +
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

<style scoped>
</style>
