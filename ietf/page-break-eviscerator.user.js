// ==UserScript==
// @name       Page Break Eviscerator
// @namespace  https://github.com/pcl/user-scripts
// @version    0.1
// @description  IETF publications have page breaks in the HTML. Argh!
// @include    http://tools.ietf.org/html/*
// @copyright  2012+, Patrick Linskey
// ==/UserScript==

var elems = document.getElementsByClassName('grey');
var count = elems.length;
for (var i = 0; i < count; i++) {
    if (elems[i].tagName != 'SPAN')
        continue;

    elems[i].style.visibility = 'collapse';
}
