function nonConstFunc ()
{
    console.log ("nonconst call. type = " + typeof (nonConstFunc ));
}

nonConstFunc ();
nonConstFunc = 45;
console.log ("become number type = " + typeof (nonConstFunc));
//err
//nonConstFunc ();

const constFunc = function ()
{
    console.log ("constFunc call");
}
constFunc ();
//err
try {
    constFunc = 6;
} catch (error) {
    console.log ("error constFung");
}

const aFunc = () =>
{
    console.log ("стрелочная функция");
}

aFunc ();
//err
try {
    aFunc = 6;
} catch (error) {
    console.log ("error aFunc");
}

const objectA =
{
    elementA: "elem"
};

// Можно менять
objectA.elementA = "ss";
// Будет ошибка
//objectA = 4;
delete (objectA.elementA);
console.log (objectA);
objectA.elementB = "dd";
console.log (objectA);