// mainFor: for (let i = 0; i < ['1', '2', '3', '4', '5'].length; i++) {
//   const element = ['1', '2'][i];

//   if (i == '2') {
//     continue;
//   }

//   subFor: for (let j = 0; j < ['1', '2', '3', '4', '5'].length; j++) {
//     console.log('j', j)
//     if (j == '2') {
//       break mainFor;
//     }
//   }

// }

let b = {
  key1: 'hello',
  key2: 'world',
  key3: '!'
}

console.log('Object.keys(b)', Object.values(b))
Object.keys(b).forEach((key, index) => {
  console.log(b[key])
})

b = [1, 4, 3, 5, 2]
b.forEach((value, index) => {
  console.log(value)
})
console.log('sort', b.sort())

b = [{ key: 1 }, { key: 4 }, { key: 3 }, { key: 5 }, { key: 2 }]
let mapRes = b.map((value, index) => { return { ...value, i: index } })

// mapRes = mapRes.find((value) => value.key == 5)

// ['isActive:true:222:222', 4, 3, 5, 2]
mapRes = mapRes.filter((value) => value.key != 5)


console.log(mapRes)

function mainFunction(a, b, c, d) {
  console.log('button click')

}

const arrayFunction = () => {

}


function* gen() {
  let i = 0
  yield i;
  yield ++i;
}

let generateValue = gen()

console.log(gen().next())
console.log(gen().next())
console.log(gen().next())
