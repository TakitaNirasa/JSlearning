
// Выполняется только из HTML
/*let nameFromHtml = prompt ("Enter your name from HTML:");
console.log (nameFromHtml);
*/
// Выполняется только через nodeJS
// Создание интерфейса взаимодействия
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const personName = "Nik";

readline.question("Enter your name frome JS:", inpName => {
    if (inpName == personName){
        console.log ("accept");
    }
    else{
        console.log ("reject");
    }
    readline.close();
});
