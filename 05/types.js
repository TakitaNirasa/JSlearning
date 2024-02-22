// Эта строчка автоматически добавлена VS кодом)))
const { symlink } = require("fs")
/**
 * @brief Примитивные типы данных
 * 1. string
 * 2. bool
 * 3. number
 * 3. bigint
 * 4. null
 * 5. undefined
 * 6. symbol
 */

// string
let stringType = "string"
console.log (stringType + " " + typeof (stringType))

// bool
let boolType = true
console.log (boolType + " " + typeof (boolType))

// number
let numberType = 104
console.log (numberType + " " + typeof (numberType))

// number
let bigIntType = 10n
console.log (bigIntType + " " + typeof (bigIntType))

// null typeof возвращает object (это официальная ошибка)
let nullType = null
console.log (nullType + " " + typeof (nullType))

// undefined
let undType = undefined
console.log (undType + " " + typeof (undType))

// symbol @todo изучить подробнее
let symbolType = Symbol ("id")
console.log (typeof (symbolType))

// symbol @todo изучить подробнее
const funcType = function () {return true}
console.log (funcType () + " " + funcType + " " + typeof (funcType))

/**
 * @brief Объект
 * На деле сам объект - то что в скобках
 * Всё остальное ссылки - structA, copyA
 */
console.log (typeof (Math) + " " + typeof (["a", 55]))

const structA =
{
    name: "Nik",
    config: "dolboeb",
    brains: 0
};

console.log (structA + " " + typeof (structA))

// Ссылочный тип
const copyA = structA;
copyA.brains++;

console.log (structA)
