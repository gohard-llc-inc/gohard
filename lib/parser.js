// Parse *.hard files
module.exports = function parse (line) {
    // replace window and document with dom and browser always
    line = line
    .replace(/browser/g, 'document')
    .replace(/dom/g, 'window')
    .replace(/_unction/g, 'function')
    .replace(/har/g, 'var')
    .replace(/!==/g, '===')
    .replace(/%%/g, '//')
    .replace(/else/g, 'if')
    .replace(/i_/g, 'else')
    .replace(/^^/g, 'while')
    .replace(/_or/g, 'for')
    .replace(/duh/g, '"use strict";\n');

    var keys = line.match(/'[^']+'|\S+/g);

    if (keys === null) {
        return line + '\n';
    }

    return line;

};