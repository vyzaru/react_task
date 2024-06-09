var test1 = 'hello'
let _test2

const $test3 = 'hello 3'
const test3 = 'hello 3'
const Test30000 = ''

// 1 - number
// string - '1234' / "1234" / `12345`
// boolean - true /false
// null 
// undefined 
// symbol 

// object - { key : value }
// object - []



// Мат операторы
/*
  + - суммирование // +=
  - - вычитаем // -=
  / - делим // /=
  ** - возводим в степерь // **=
  * - умножение // *=
  % - остаток от деления // %= 
*/

// Оператор сравнение 
// Обычное - "=="
// Строгое - "==="
//  1 > 2   /  2 < 1 
// 2 >= 2  / 1 <= 2
//  1 != 2 


function testFunct() {
  let ttt = '123'
}

if (1 != 2) {
  console.log('true');
} else if (1 == 2) {
  console.log('false');
} else {

}

let x = 'hello'

switch (x) {
  case 'helo':
    console.log('helo');
    break;
  case 'hello':
    console.log('hello');
    break;
  case 'error':
    console.log('error')
    break;
  default:
    console.log('default')
    break;
}

let isTrue = (1 != 2)

if (1 != 2) {
  console.log(true)
} else {
  console.log(false)
}

let isTrueSecond = 1 != 2 ? 2 == 2 ? console.log(' is true 2=2') : console.log(' is false 2=2') : false

// Логические операторы
// || - или  if ( 2==2 || 1 != 2  )
// && - или  if ( 2==2 && 1 != 2  ) {...} else { console.log('log')}
// ! - или  if ( 2==2 ! 1 != 2  ) {...} else { console.log('log')}




while (condition) {

}

do {

} while (condition);

mainFor: for (let i = 0; i < ['1', '2', '3', '4', '5'].length; i++) {
  const element = ['1', '2'][i];

  if (i == '2') {
    continue;
  }

  subFor: for (let j = 0; j < ['1', '2', '3', '4', '5'].length; j++) {
    console.log('j', j)
    if (j == '2') {
      break mainFor;
    }
  }

  console.log('i', i)
}

for (let i = 0; i < ['1', '2'].length; i++) {
  const element = ['1', '2'][i];

}
let obj
for (x in obj) {

}

for (x of obj) {

}

// ....

console.log('html mount from main.js')