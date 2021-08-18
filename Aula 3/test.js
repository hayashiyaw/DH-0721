const { differenceInDays, differenceInMonths, addDays } = require("date-fns");
const moment = require("moment");


//date-fns
// 1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let result; 
result = differenceInDays(new Date(2020,06,10),new Date(2010,09,15))


console.log('Result 1 :' + result);

//  2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
let result2;
result2 = differenceInMonths(new Date(2021,06,28),new Date(2011,09,15))
console.log('Result 2 :' + result2);


// 3) Adicionar 32 dias na data 20/03/2021
let result3;
result3 = addDays(new Date(2021,03,20),32);
console.log('Result 3:' + result3);

//momentjs
// 1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let result4;
var a = moment([2020, 06, 10]);
var b = moment([2010, 09, 15]);
result4 = a.diff(b, 'days') // 1

console.log('Result 4:' + result4)


//  2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
let result5;
var a = moment([2021, 06, 28]);
var b = moment([2011, 09, 15]);

result5 = a.diff(b, 'months') 

console.log('Result 5:' + result5)


// 3) Adicionar 32 dias na data 20/03/2021
let result6;
var a = moment([2021, 03, 20]);
result6 = a.add(32,'days').format("DD/MM/YYYY")
console.log('Result 6:' + result6);



