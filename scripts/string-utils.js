/*!
 * Copyright (c) 2020 Ahmad Fajar.
 * Licensed under the MIT license.
 */

/**
 * Convert unsafe html link to safe encoded uri string.
 * 
 * @param {string} str Input string
 */
exports.convert = function (str) {
    str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0)
            .replace(/(%26%23x)(\w{4})(%3B)/g, "$2"), 16));
    });

    return str;
}

/**
 * Simple function to strip an html tag and retains content inside it.
 * 
 * @param {string} html The html input string
 * @param {string} tag  The html tag to replace
 */
exports.stripTag = function (html, tag) {
    if (!tag) {
        return html;
    }

    return html.replace("<" + tag + ">", "").replace("</" + tag + ">", "");
}

/**
 * Strip one or more html tag at once and remove content inside them.
 * 
 * @param {string} html The html input string
 * @param {string[]} tags Array of tag
 */
exports.stripTags = function (html, tags) {
    if (!tags) {
        return html;
    }

    if (!Array.isArray(tags)) {
        const reg = RegExp("<" + tag + ">.*</" + tag + ">");
        return html.replace(reg, "");
    } else {
        let strResult = html;
        tags.forEach(tag => {
            const reg = RegExp("<" + tag + ">.*</" + tag + ">");
            strResult = strResult.replace(reg, "");
        });

        return strResult;
    }
}
