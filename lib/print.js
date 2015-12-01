var Table = require('cli-table');

module.exports = function (table) {
    if (table && table.length > 0) {
        var cliTable = new Table({
            head: ['表層形', '品詞', '品詞細分類1', '品詞細分類2', '品詞細分類3', '活用形', '活用形', '原形', '読み', '発音']
        });

        table.forEach(function (row) {
            cliTable.push(row);
        });

        console.log(cliTable.toString());
    }
};
