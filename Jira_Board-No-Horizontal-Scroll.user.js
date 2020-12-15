/*
 * Jira Board-No-Horizontal-Scroll - a Userscript to show the Jira Boards without horizontal scrolling
 * Copyright 2020 Björn Kautler
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ==UserScript==
// @name        Jira Board-No-Horizontal-Scroll
// @namespace   net.kautler.greasemonkey.jira
// @description Displays the Jira Boards without horizontal scrolling
// @match       *://*/*RapidBoard*
// @version     1.0.0
// @grant       none
// ==/UserScript==

(function () {
    const css = [
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-columns, ",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column #ghx-column-headers, ",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-zone-overlay-table ",
        "{",
        "    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));",
        "}\n",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-columns,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column #ghx-column-headers,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-zone-overlay-table ",
        "{",
        "    min-width: 10px;",
        "}\n",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-columns .ghx-column,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column #ghx-column-headers .ghx-column,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-zone-overlay-table .ghx-column,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-columns .ghx-zone-overlay-column,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column #ghx-column-headers .ghx-zone-overlay-column,",
        ".ghx-rapid-views #gh #ghx-work #ghx-pool-column .ghx-zone-overlay-table .ghx-zone-overlay-column ",
        "{",
        "    min-width: 10px;",
        "}",
    ].join("");
    if (typeof GM_addStyle != "undefined") {
        GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
        PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
        addStyle(css);
    } else {
        const node = document.createElement("style");
        node.appendChild(document.createTextNode(css));
        const heads = document.getElementsByTagName("head");
        if (heads.length > 0) {
            heads[0].appendChild(node);
        }
    }
})();
