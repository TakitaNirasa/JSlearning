/**
 * @brief Объекты
 */
const myCity =
{
    city: 'Saint-P'
};
console.log (`Базовый вид:`);
console.log (myCity);

// Добавление элемента
myCity.popular = true;
console.log ("Добавлен элемент:")
console.log (myCity);

// Удаление элемента
delete myCity.popular;
console.log ("Удалён элемент:")
console.log (myCity);

// Другой способ добавления элемента
const countryName = 'country';
myCity[countryName] = "Rus";

console.log(`Добавлен элемент ${countryName} `);
console.log (myCity);

delete myCity[countryName];
console.log(`Удалён элемент ${countryName} `);
console.log (myCity);

console.warn ("Поиск элементов");

const cityElem = 'city';
const searchResult = myCity.hasOwnProperty (cityElem) ? "да" : "нет";
console.log(`Есть ли в структуре элемент ${cityElem}: ${searchResult}`);

myCity.exist = true;
for (var i in myCity) {
    console.log (`Элемент ${i} со значением ${myCity[i]}`);
}

console.log (`Нулевой элемент имеет ключ : ${Object.keys (myCity)[0]}\n`);

console.warn (`Копирование объектов:`);
const anotherCity = Object.assign ({}, myCity);
anotherCity.city = 'Moscow';

console.log (myCity);
console.log (anotherCity);

// Таккопируется указатель на объект
// Меня изначальный - меняется и конечный
const infoCity = {isFull:true, isBig:true};
myCity.info = infoCity;
infoCity.isFull = false;
console.log (myCity.info);
// Так копируется вложенный объект. Меняя изначальный - конечный не меняется
myCity.infoCity = Object.assign ({}, infoCity)
infoCity.isBig = false
console.log (myCity.infoCity);
