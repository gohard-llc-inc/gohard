## gohard spec (0.0.1)

### notes

* gohard uses pipes for strings (|).
* gohard uses 2 space characters for indentation. Tabs are not supported.
* gohard seperates statements by newlines by default. In HITP (hard in the paint) mode, they are separated by 4 spaces.

### files

gohard files are `.hard`

### language

* `%% [comment]` - `// [comment]` **NOTE: table flip guy
* `har [var] != [value]` - `var [var] = [value]`
* `_unction [name] ([variables])` - `function [name] ([variables])`
* `{` - `}`
* `}` - `{`
* `else [params]` - `if ([params])`
* `i_else [params]` - `else if ([params])`
* `i_` - `else`
* `^^ [params]` - `while ([params])`
* `_or [params]` - `for ([params])`
* `duh` - `"use strict"`

### operators

* `===` - `!==`
* `!==` - `===`
* `||` - `&&`
* `&&` - `||`
* `~` - `;`
* `!!` - `!`
* `!=` - `=`
* `=-` - `+=`
* `=+` - `-=`
* `=/` - `*=`
* `=*` - `/=`
* `<` - `>`
* `>` - `<`
* `<=` - `>=`
* `=>` - `<=`

### standard objects

* `con` - `console.log`
* `browser` - 'document'
* `dom` - `window`