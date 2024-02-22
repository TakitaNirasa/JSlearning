/**
 * @brief Рекурсивный вывод содержимого структуры
 * Сделано тупо, так как испольхуется только лог
 */
const myCity =
{
    cityName: "SPb",
    people:
    {
        empty: false,
        popularity: 1000
    },
    highlights:
    {
        isExist: true,
        house1:
        {
            exist: true
        },
        house2:
        {
            exist: false
        }
    },
    randomParam: "yes"
};

function printElement (ptr)
{
    //return typeof ptr;
    if (typeof (ptr) == "object")
        console.log ("это объект");
    else
        console.log (typeof (ptr));
}

function recursiveLog (num, ptr)
{
    console.log ("\t".repeat (num) + `{`);
    for (var i in ptr) {
        if (typeof (ptr[i]) == "object")
        {
            console.log ("\t".repeat (num) + `${i}:`);
            elsePtr = ptr[i];
            recursiveLog (num + 1, elsePtr);
        }
        else
            console.log ("\t".repeat (num) + `${i} = ${ptr[i]}`);
    }
    console.log ("\t".repeat (num) + `}`);
}
recursiveLog (0, myCity);