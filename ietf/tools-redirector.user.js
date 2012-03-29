// ==UserScript==
// @name       IETF Tools Redirector
// @namespace  https://github.com/pcl/user-scripts
// @version    0.1
// @description  Canonical IETF RFCs are ugly; tools.ietf.org has prettier versions. However, the canonical ones are at the top of search engine results. This user script automatically adds a link to the top of the canonical files.
// @include    http://www.ietf.org/rfc/*.txt
// @copyright  2012+, Patrick Linskey
// ==/UserScript==

var rfcId = function() {
    return document.location.pathname.replace(/\/rfc\/(.*)\.txt/, '$1')
};

var div = document.createElement('div');
div.style.backgroundColor = '#b5f08e';
div.style.padding = "10px";
div.style.textAlign = "center";

var text = document.createElement('span');
text.textContent = 'A prettier version of this content is available ';
div.appendChild(text);

var link = document.createElement('a');
link.textContent = 'on the tools subdomain';
link.setAttribute('href', 'http://tools.ietf.org/html/' + rfcId());
div.appendChild(link);

var postText = document.createElement('span');
postText.textContent = '.';
div.appendChild(postText);

document.body.insertBefore(div, document.body.firstChild);