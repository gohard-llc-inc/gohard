// Parse *.hard files
module.exports = function parse(line) {

    var replacementMap = [
        //removal of reserved letter to avoid conflicts
        {
            search: new RegExp('f', 'g'),
            replace: 'ERROR: RESERVED LETTER ALREADY DE_INED'
        },
        //dangerous reserve letters removed
        {
            search: new RegExp('browser', 'g'),
            replace: 'document'
        },
        {
            search: new RegExp('dom', 'g'),
            replace: 'window'
        },
        {
            search: new RegExp('\\_unction', 'g'),
            replace: 'function'
        },
        {
            search: new RegExp('\\_or', 'g'),
            replace: 'for'
        },
        {
            search: new RegExp('har', 'g'),
            replace: 'var'
        },
        {
            search: new RegExp('\\%\\%.*', 'g'),
            replace: '//(╯°□°)╯︵ ┻━┻'
        },
        {
            search: new RegExp('else', 'g'),
            replace: 'if'
        },
        {
            search: new RegExp('i\\_', 'g'),
            replace: 'else'
        },
        {
            search: new RegExp('\\^\\^', 'g'),
            replace: 'while'
        },
        {
            search: new RegExp('duh', 'g'),
            replace: '"use strict";'
        },
        {
            search: new RegExp('\\=\\=\\=', 'g'),
            replace: '!=='
        },
        {
            search: new RegExp('\\!\\=\\=', 'g'),
            replace: '==='
        },
        {
            search: new RegExp('\\|\\|', 'g'),
            replace: 'ZAandandAZ'
        },
        {
            search: new RegExp('\\&\\&', 'g'),
            replace: 'ZAororAZ'
        },
        {
            search: new RegExp('\\!\\!', 'g'),
            replace: '&&'
        },
        {
            search: new RegExp('\\!\\=', 'g'),
            replace: '='
        },
        {
            search: new RegExp('\\=\\-', 'g'),
            replace: '+='
        },
        {
            search: new RegExp('\\=\\+', 'g'),
            replace: '-='
        },
        {
            search: new RegExp('\\=\\/', 'g'),
            replace: '*='
        },
        {
            search: new RegExp('\\=\\*', 'g'),
            replace: '/='
        },
        {
            search: new RegExp('\\=\\/', 'g'),
            replace: '*='
        },
        {
            search: new RegExp('\\<', 'g'),
            replace: '>'
        },
        {
            search: new RegExp('\\>', 'g'),
            replace: '<'
        },
        {
            search: new RegExp('\\<\\=', 'g'),
            replace: '=>'
        },
        {
            search: new RegExp('\\>\\=', 'g'),
            replace: '=<'
        },
        {
            search: new RegExp('ZAopenAZ', 'g'),
            replace: '}'
        },
        {
            search: new RegExp('ZAcloseAZ', 'g'),
            replace: '{'
        },
        {
            search: new RegExp('ZAandandAZ', 'g'),
            replace: '&&'
        },
        {
            search: new RegExp('\\|', 'g'),
            replace: '"'
        },
        {
            search: new RegExp('\\|\n', 'g'),
            replace: '"'
        },
        {
            search: new RegExp('ZAororAZ', 'g'),
            replace: '||'
        }
    ];

    var safeReplacementMap = [
        {
            search: new RegExp('\\{', 'g'),
            replace: 'ZAopenAZ'
        },
        {
            search: new RegExp('\\}', 'g'),
            replace: 'ZAcloseAZ'
        },
        {
            search: new RegExp('\\~', 'g'),
            replace: ';'
        }
    ];

    safeReplacementMap = safeReplacementMap.concat(replacementMap);

    var keys = line.match(/'[^']+'|\S+/g),
    tempStr;

    if (keys) {
        keys.forEach(function(str, i) {
            tempStr = '';
            safeReplacementMap.forEach(function(data, j) {
                if (j === 0) {
                    tempStr = str.replace(data.search, data.replace);
                }
                else {
                    tempStr = tempStr.replace(data.search, data.replace);
                }
            });
            keys[i] = tempStr;
        });
        keysLine = keys.join(' ');
    }

    if (keys === null) {
        return '\n';
    }
    else {
        return keysLine + '\n';
    }

};