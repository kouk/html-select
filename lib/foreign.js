var foreigntags = {
    svg: true,
    mathml: true
};
module.exports = function (name) {
    return foreigntags.hasOwnProperty(name);
};
