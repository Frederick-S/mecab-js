var execute = require('./lib/execute');
var parse = require('./lib/parse');
var print = require('./lib/print');

module.exports = function (sentence) {
    if (!sentence) {
        console.log('Invalid input.');

        return;
    }

    execute(sentence, function (error, output) {
        if (error) {
            console.log(error);
        } else {
            var table = parse(output);

            print(table);
        }
    });
};
