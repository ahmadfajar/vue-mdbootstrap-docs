const md            = require("markdown-it")();
const slugify       = require("transliteration").slugify;
const striptags     = require("./strip-tags");
const stringUtils   = require("./string-utils");
// const hljs      = require("highlight.js");
const hljs          = require("highlight.js/lib/core");

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'));
hljs.registerLanguage('sas', require('highlight.js/lib/languages/sas'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));


module.exports = {
    raw: true,
    html: true,
    linkify: true,
    typographer: true,
    langPrefix: 'language-',
    preventExtract: true,
    wrapper: 'article class="markdown-body"',
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs lang-' + lang + '"><code>' +
                    hljs.highlight(str, {language: lang, ignoreIllegals: true}).value + "</code></pre>";
            } catch (__) {
            }
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>";
    },
    use: [
        [
            require("markdown-it-anchor"),
            {
                level: [2, 3],
                slugify: slugify,
                permalink: true,
                permalinkBefore: false,
                permalinkSymbol: "#"
            },
        ],
        [
            require("./md-external-link"),
            {
                externalTarget: "_blank",
                internalDomains: [ "vue-mdbootstrap.fajarconsultant.com", "localhost" ]
            },
        ],
        [require("markdown-it-container"), "demo", {
            validate: function (params) {
                return params.trim().match(/^demo\s*(.*)$/);
            },

            render: function (tokens, idx) {
                const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                    const description = m && m.length > 1 ? m[1] : "";
                    const content     = tokens[idx + 1].content;

                    const stripped = striptags.strip(stringUtils.stripTag(content, "template"), ["script", "style"]);
                    // const html     = stringUtils.convert(stripped).replace(/(<[^>]*)=""(?=.*>)/g, "$1");

                    const template = striptags.fetch(content, "template");
                    const script   = striptags.fetch(content, "script");
                    const style    = striptags.fetch(content, "style");

                    const descriptionHTML = description
                        ? md.render(stringUtils.stripTag(description, "template"))
                        : "";

                    let jsfiddle = {html: template, script: script, style: style};
                    jsfiddle     = md.utils.escapeHtml(JSON.stringify(jsfiddle));

                    return `<demo-block :jsfiddle="${jsfiddle}">
                    <div class="demo-wrapper" slot="source">${template}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
                }

                return "</div></demo-block>\n";
            },
        }],
        [require("markdown-it-container"), "ValidationDemo", {
            validate: function (params) {
                return params.trim().match(/^ValidationDemo\s*(.*)$/);
            },

            render: function (tokens, idx) {
                const m = tokens[idx].info.trim().match(/^ValidationDemo\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                    const description = m && m.length > 1 ? m[1] : "";
                    const content     = tokens[idx + 1].content;

                    const stripped = striptags.strip(stringUtils.stripTag(content, "template"), ["script", "style"]);
                    // const html     = stringUtils.convert(stripped).replace(/(<[^>]*)=""(?=.*>)/g, "$1");

                    const template = striptags.fetch(content, "template");
                    const script   = striptags.fetch(content, "script");
                    const style    = striptags.fetch(content, "style");

                    const descriptionHTML = description
                        ? md.render(stringUtils.stripTag(description, "template"))
                        : "";

                    let jsfiddle = {html: template, script: script, style: style};
                    jsfiddle     = md.utils.escapeHtml(JSON.stringify(jsfiddle));

                    return `<demo-validation :jsfiddle="${jsfiddle}">
                    <div class="demo-wrapper" slot="source">${template}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
                }

                return "</div></demo-validation>\n";
            },
        }],
        [require("markdown-it-container"), "pureHtml", {
            validate: function (params) {
                return params.trim().match(/^pureHtml\s*(.*)$/);
            },

            render: function (tokens, idx) {
                const m = tokens[idx].info.trim().match(/^pureHtml\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                    const description = m && m.length > 1 ? m[1] : "";
                    const content     = tokens[idx + 1].content;

                    const stripped = stringUtils.stripTags(content, ["script", "style"]);
                    const html     = stringUtils.convert(stripped);
                    const script   = striptags.fetch(content, "script");
                    const style    = striptags.fetch(content, "style");

                    const descriptionHTML = description ? md.render(description) : "";

                    let jsfiddle = {html: html, script: script, style: style};
                    jsfiddle     = md.utils.escapeHtml(JSON.stringify(jsfiddle));

                    return `<demo-html :jsfiddle="${jsfiddle}">
                    <div class="demo-wrapper" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
                }

                return "</div></demo-html>\n";
            },
        }],
        [require("markdown-it-container"), "lead"],
        [require("markdown-it-container"), "info", {
            render: function (tokens, idx) {
                const m = tokens[idx].info.trim().match(/^info\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                    return '<bs-alert color="info" icon="info-circle">' + md.utils.escapeHtml(m[1]);
                } else {
                    return '</bs-alert>\n';
                }
            }
        }],
        [require("markdown-it-container"), "warning", {
            render: function (tokens, idx) {
                const m = tokens[idx].info.trim().match(/^warning\s*(.*)$/);

                if (tokens[idx].nesting === 1) {
                    return '<bs-alert color="warning" icon="exclamation-triangle">' + md.utils.escapeHtml(m[1]);
                } else {
                    return '</bs-alert>\n';
                }
            }
        }],
    ],
};
