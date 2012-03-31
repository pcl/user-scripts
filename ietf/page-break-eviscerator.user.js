// ==UserScript==
// @name       IETF Page Break Eviscerator
// @namespace  https://github.com/pcl/user-scripts
// @version    0.2
// @description  IETF publications have page breaks in the HTML. Argh!
// @include    http://tools.ietf.org/html/*
// @include    http://localhost/*
// @copyright  2012+, Patrick Linskey
// ==/UserScript==

var elems = document.getElementsByTagName('pre');
var count = elems.length;
for (var i = 0; i < count; i++) {
    // The last element should be a span. If not, this isn't the pre
    // we thought it was.
    if (elems[i].children.length == 0)
        continue;

    // insert a page marker in the gutter
    var anchor = elems[i].firstElementChild;
    if (anchor.nodeName == 'A') {

        // find the header -- the first grey block
        var topSpan = anchor.nextElementSibling;
        if (topSpan.nodeName == 'SPAN' && topSpan.className == 'grey') {

            // strip leading whitespace
            var firstText = topSpan.nextSibling;
            if (firstText && firstText.nodeType == firstText.TEXT_NODE)
                firstText.textContent
                    = firstText.textContent.replace(/^\n*/, '');


            // delete the header
            topSpan.parentNode.removeChild(topSpan);


            // TODO add style="float:right" to the A; add 'Page 2' to the text content
        }
    }


    // find the last grey block
    var endOfPageSpan = elems[i].lastElementChild;
    if (endOfPageSpan.nodeName != 'SPAN')
        continue;
    if (endOfPageSpan.className != 'grey')
        continue;


    // strip trailing whitespace
    var lastTextBlock = endOfPageSpan.previousSibling;
    if (lastTextBlock.nodeType != lastTextBlock.TEXT_NODE)
        continue;

    lastTextBlock.textContent = lastTextBlock.textContent.replace(/\n*$/, '');


    // delete the footer
    endOfPageSpan.parentNode.removeChild(endOfPageSpan);
}
