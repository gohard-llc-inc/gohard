// Parse *.hard files
module.exports = function parse (line) {

    var keys = line.match(/'[^']+'|\S+/g);

    if (keys) {
        keys.forEach(function(str, index) {
            if (str === 'browser') {
                keys[index] = str.replace(/browser/g, 'document');
            }
            if (str === 'dom') {
                keys[index] = str.replace(/dom/g, 'window');
            }
            if (str === '_unction') {
                keys[index] = str.replace(/\_unction/g, 'function');
            }
            if (str === 'har') {
                keys[index] = str.replace(/har/g, 'var');
            }
            if (str === '%%') {
                keys[index] = str.replace(/\%\%/g, '//');
            }
            if (str === 'else') {
                keys[index] = str.replace(/else/g, 'if');
            }
            if (str === 'i_') {
                keys[index] = str.replace(/i\_/g, 'else');
            }
            if (str === '^^') {
                keys[index] = str.replace(/\^\^/g, 'while');
            }
            if (str === '_or') {
                keys[index] = str.replace(/\_or/g, 'for');
            }
            if (str === 'duh') {
                keys[index] = str.replace(/duh/g, '"use strict";\n');
            }
            // operators
            if (str === '===') {
                keys[index] = str.replace(/\=\=\=/g, '!==');
            }
            if (str === '!==') {
                keys[index] = str.replace(/\!\=\=/g, '===');
            }
            if (str === '||') {
                keys[index] = str.replace(/\|\|/g, '&&');
            }
            if (str === '&&') {
                keys[index] = str.replace(/\&\&/g, '||');
            }
            if (str === '~') {
                keys[index] = str.replace(/\~/g, ';');
            }
            if (str === '!!') {
                keys[index] = str.replace(/\!\!/g, '!');
            }
            if (str === '!=') {
                keys[index] = str.replace(/\!\=/g, '=');
            }
            if (str === '=-') {
                keys[index] = str.replace(/\=\-/g, '+=');
            }
            if (str === '=+') {
                keys[index] = str.replace(/\=\+/g, '-=');
            }
            if (str === '=/') {
                keys[index] = str.replace(/\=\//g, '*=');
            }
            if (str === '=*') {
                keys[index] = str.replace(/\=\*/g, '/=');
            }
            if (str === '<') {
                keys[index] = str.replace(/</g, '>');
            }
            if (str === '>') {
                keys[index] = str.replace(/\>/g, '<');
            }
            if (str === '{') {
                keys[index] = str.replace(/\{/g, '<open>');
            }
            if (str === '}') {
                keys[index] = str.replace(/\}/g, '<close>');
            }
            if (str === '<=') {
                keys[index] = str.replace(/<\=/g, '>=');
            }
            if (str === '=>') {
                keys[index] = str.replace(/\=\>/g, '<=');
            }
        });
        keys.forEach(function(str, index) {
            // fixes
            if (str === '<open>') {
                keys[index] = str.replace(/<open>/g, '}');
            }
            if (str === '<close>') {
                keys[index] = str.replace(/<close>/g, '{');
            }
        });
        keysLine = keys.join(' ');
        // console.log(keys);
    }

    if (keys === null) {
        return '\n';
    }
    else {
        return keysLine + '\n';
    }

};