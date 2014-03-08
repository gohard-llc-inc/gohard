// Parse *.hard files
module.exports = function parse (line) {
    // replace window and document with dom and browser always
    line = line.replace(/browser/g, 'document').replace(/dom/g, 'window');

    var keys = line.match(/'[^']+'|\S+/g);
    var valid = ['_unction', '{', '}', 'har', '%%', 'else', 'i_else', 'i_', '^^', '_or', 'duh'];
    var validKeys = {'!==': ' === ', '===': ' !== ', '||':  ' && ', '&&':  ' || ', '~':  '; ', '!=':  ' = ', '=-':  ' += ', '=+':  ' -= ', '=/': ' *= ', '=*': ' /= ', '>': ' < ', '<': ' > ', '=>': ' <= ', '<=': ' >= ', '!!': ' ! '};
    var statement = '';

    var keyParser = function (key) {
        if (validKeys[key]) {
            statement += validKeys[key];
            return true;
        } else {
            return false;
        }
    };

    if (keys === null) return line + '\n';

    // trained use strict
    if (keys[0] === 'duh') {
        statement += '"use strict";\n';
    }

    // such function
    if (keys[0] === '_unction') {
        statement += 'function';
    }

    // var
    if (keys[0] === 'har') {
        statement += 'var';
    }

    // !==
    if (keys[1] === '!==') {
        statement += '===';
    }

    // comment
    if (keys[0] === '%%') {
        statement += '// ';
    }

    // if
    if (keys[0] === 'else') {
        statement += 'if';
    }

    // else
    if (keys[0] === 'i_') {
        statement += 'else';
    }

    // while
    if (keys[0] === '^^') {
        statement += 'while';
    }

    // for
    if (keys[0] === '_or') {
        statement += 'for';
    }

    return statement;
};