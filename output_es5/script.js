"use strict";
function multiplicationTable() {
    let list = [];
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            list.push(i * j);
        }
        console.log(list);
        list = [];
    }
}
multiplicationTable();
