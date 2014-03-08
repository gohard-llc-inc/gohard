// Parse *.hard files
module.exports = function parse (line) {
    // replace window and document with dom and browser always
    currentLine = line
    // language
    .replace(/browser/g, 'document')
    .replace(/dom/g, 'window')
    .replace(/\_unction/g, 'function')
    .replace(/har/g, 'var')
    .replace(/\%\%/g, '//')
    .replace(/else/g, 'if')
    .replace(/i\_/g, 'else')
    .replace(/\^\^/g, 'while')
    .replace(/\_or/g, 'for')
    .replace(/duh/g, '"use strict";\n')
    // operators
    .replace(/\=\=\=/g, '!==')
    .replace(/\!\=\=/g, '===')
    .replace(/\|\|/g, '&&')
    .replace(/\&\&/g, '||')
    .replace(/\~/g, ';')
    .replace(/\!\!/g, '!')
    .replace(/\!\=/g, '=')
    .replace(/\=\-/g, '+=')
    .replace(/\=\+/g, '-=')
    .replace(/\=\//g, '*=')
    .replace(/\=\*/g, '/=')
    .replace(/</g, '>')
    .replace(/\>/g, '<')
    .replace(/\{/g, '<open>')
    .replace(/\}/g, '<close>')
    .replace(/<\=/g, '>=')
    .replace(/\=\>/g, '<=')
    // fixes
    .replace(/<open>/g, '}')
    .replace(/<close>/g, '{');

    var keys = currentLine.match(/'[^']+'|\S+/g);

    if (keys === null) {
        return '\n';
    }
    else {
        return currentLine + '\n';
    }

};