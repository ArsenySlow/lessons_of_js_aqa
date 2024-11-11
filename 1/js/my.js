// var myVariableNumber = 12;
// var myVariableTextString = "12 текстом";
// var myVariableTextString2 = "122 текстом";
//
// var boolVariable = true;
// var boolVariable2 = false;
//
// var nullVariable = null; //пустье
//
// var undefinedVariable = undefined; //не определено
//
// var myObject = {
//     key:value,
//     userName: Vasya,
//     age:18
// };
//
// var array = [
//     myVariableTextString,myVariableTextString2,myVariableNumber
// ]; //Это разноформатный массив
// var array2 = [
//     myVariableTextString,myVariableTextString2
// ]; //Это массив только строк
//
// let qwe = "Меня можно поменять"; //переменная, значение которой можно менять
// const qwe2 = "Меня не поменять"; //переменная, значение которой нельзя менять

const one = 1 ;
const two = 2 ;
const summ = one + two; // + - / * %
const summ2 = '';
console.log ('Значение =',summ);

if(summ2){
    console.log (summ)
}
else {console.log('Там не Тру =(')}
if(summ === 3){
        console.log ("Тут серьезно 3")
}

const myArrow = [1,2,'3',4,7,8,9,'Sweta',{age:19}];
console.log(myArrow)

let counter = 0;
while (counter < 10){
    console.log('номер ', counter)
    counter += 1
}

for (let item of myArrow){
    console.log(item, 'номер ', item)
}

for (let item in myArrow){
    console.log('номер индекса', item)
    console.log('значение', myArrow[item])
}

function test_fn (arg_1,arg_2)
{
   summary = arg_1+arg_2;
    console.log("Результат функции =",summary)
    return arg_2-arg_1
}

test_fn(2,6)
test_fn('Privet ', one)
summing = test_fn(2,6)
console.log('Чтобы видеть результат ретёрна, надо ввести в константу, и тогда через консоль лог видно такое: ',summing)

myArrow.forEach((item,index )=> {
    console.log('ноомыво', item, index)
})