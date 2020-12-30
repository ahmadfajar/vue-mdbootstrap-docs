<script>
import DemoBlock from "@/components/DemoBlock";

export default {
  name: "DemoHtml",
  extends: DemoBlock,
  methods: {
    goJsfiddle() {
      const { html, script, style } = this.jsfiddle;

      const resourcesTpl =
        '<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.5.2/dist/css/bootstrap.min.css">\n' +
        '<link rel="stylesheet" href="https://unpkg.com/vue-mdbootstrap/dist/vue-mdb.css">';

      const cssTpl = `${(style || "").trim()}\n`;
      const jsTpl = script || "";
      const htmlTpl = `${resourcesTpl}\n${html}`;

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
