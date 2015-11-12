var parseTag = require('./parse_tag.js');

module.exports = function (node) {
    if (node.tag) return node.tag;
    if (!node.row) return undefined;
    if (!node._parsed) {
        var p = parseTag(node.row[1]);
        node._parsed = p;
        node.tag = p.name;
    }
    node.markedSelfClosing = node._parsed.markedSelfClosing();
    return node.tag;
};
