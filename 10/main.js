/**
 * @details Для получения доступа к данным дрцгого модуля нужно:
 * 1. Подключить модуль через require
 * 2. Записатьрезультат в переменную
 * 3. Обращаться к данным через эту переменную
 *
 * В другом модуле, для доступа к данным используется exports.<>
 */
const mod = require ('./mod');

console.log ("This is main.js");
console.log (module);

console.log ("Num in mod =  ",num);
// Есть доступ к func
mod.func ();