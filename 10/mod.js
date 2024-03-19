console.log ("This is mod.js");

let a = 10;
function testFunc ()
{
    console.log ("a = ", a)
}

// Модификатор доступа
global.num = 11;
global.func = testFunc;

exports.func = testFunc;
exports.a = a;