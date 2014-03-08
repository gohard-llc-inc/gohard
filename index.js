/**
 * gohard - not your mother's preprocessor
 */

var parser   = require('./lib/parser');

module.exports = function (file, hardInThePaint) {
    var lines;

    if (hardInThePaint) {
        lines = file.split(/ {4,}|\r?\n/);
    }
    else {
        lines = file.split(/\r?\n/);
    }
    var script = '';

    for (var i = 0; i < lines.length; i++) {
        script += parser(lines[i]);
    }

    return script;
};