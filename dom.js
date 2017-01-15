/**
 * @name getMaxDepth
 * @typicalname getMaxDepth
 * @param {String} tag  - tag name
 * @return {Number}
 *
 * @usage
 * getMaxDepth(tagname)
 */
function getMaxDepth (tag) {
    tag = tag.toUpperCase();

	var maxDepth = 0;

	function getChildren (node, idx) {

		var childNode = node.children;

		if (node.tagName == tag) {
			idx++;
			if (idx > maxDepth) {
				maxDepth = idx;
			}
		}

		for(var i = 0; i < childNode.length; i++) {
			getChildren(childNode[i], idx);
		}
	}

	var tagItems = document.getElementsByTagName(tag);

	for (var i = 0; i < tagItems.length; i++) {
		var children = tagItems[i].children;
		var len = children.length-1;
		while (len >= 0) {
			getChildren(children[len], 1);
			len--;
		}
	}

	return maxDepth;
}


/**
 * @name findDepth
 * @typicalname findDepth
 * @param {String} tag  - Input array data
 */
function findDepth (tag) {
	var classname = 'depth-' + tag.toLowerCase();
	document.getElementsByClassName(classname)[0].innerHTML = getMaxDepth(tag);
}


function showcode(tag) {
	var tags = document.getElementsByTagName('xmp');
	for (var i = 0; i < tags.length; i++) {
		tags[i].style.display = 'none';
	}
	document.getElementById(tag+'-code').style.display = "block";
}

var elem = document.getElementsByTagName('xmp')[0];
elem.addEventListener('input', function () {
	document.getElementById('main-content').innerHTML = elem.textContent;
});



