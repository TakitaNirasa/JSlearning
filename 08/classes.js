// Инкапсюляция
class Person
{
    name;
    surname;
    age;
    constructor (name, surname, age)
    {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greeting ()
    {
        console.log ("My name is " + this.name)
    }
}

// Наследование. Может быть только единичным
class Employee extends Person
{
    inn;
    constructor (firstName, lastName, age, inn)
    {
        // Вызов конструктора родителя
        super (firstName, lastName, age);
        this.inn = inn;
    }

    greeting ()
    {
        console.log ("My inn is " + this.inn)
    }
}

const employee1 = new Employee ("Name", "Surname", 30, 555);
console.log (employee1);

class Developer extends Employee
{
    grade;
    constructor (firstName, lastName, age, inn, grade)
    {
        super (firstName, lastName,age,inn);
        this.grade = grade;
    }

    greeting ()
    {
        console.log ("My grade is " + this.grade)
    }
}

const dever = new Developer ("Nick", "surname", 34, 333, "junior");
console.log (dever);


//!!!!! Найти информация про интерфейсы и абстрактные классы
