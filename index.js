var postcss = require('postcss');

module.exports = postcss.plugin('postcss-nth-list', function (opts) {
    var splitter = opts.splitter ? opts.splitter : " ";
    return function (css, result) {
        css.replaceValues(/nth\((.+),\s*([0-9]+)\)/, {fast: 'nth('}, function (string) {
            var match = string.match(/nth\((.+),\s*([0-9]+)/);
            var list = match[1].split(splitter);
            var index = match[2];

            return list[index];
        });
    };
});
