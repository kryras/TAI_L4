function multiplicationTable() {
    var list = [];
    for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
            list.push(i * j);
        }
        console.log(list);
        list = [];
    }
}
multiplicationTable();
