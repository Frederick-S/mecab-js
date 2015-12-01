module.exports = function (outputBuffer) {
    var result = outputBuffer.toString('utf-8');
    var lines = result.split('\n');
    var table = [];

    lines.forEach(function (line) {
        if (line !== 'EOS' && line !== '') {
            var row = [];
            var data = line.split('\t');

            if (data.length > 1) {
                // 表層形
                row.push(data[0]);

                // 品詞，品詞細分類1，品詞細分類2，品詞細分類3，活用形，活用型，原形，読み，発音
                var temp = data[1].split(',');

                row = row.concat(temp);
            }

            if (row.length > 0) {
                table.push(row);
            }
        }
    });

    return table;
};
