var fs = require('fs')

fs.readFile('babyNames.csv', function(err, data) {
    if(err) {
        throw err
    }
    var newData = data.toString('utf-8');
    var newData = newData.split('\n').slice(1).map(function(data, index) {
    var row = data.split(",");
    //if()
    console.log(row);
});
console.log(newDataArr[0])
})