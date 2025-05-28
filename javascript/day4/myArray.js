const fruits = ["apple", "banana", "grapes", "guava"]

console.log(fruits)
console.log(fruits[1])
fruits.push('watermelon')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.unshift('kiwi')
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.reverse()
console.log(fruits)

console.log(fruits.includes('watermelon'))

z = fruits.toString()
console.log(z)

console.log(typeof(fruits))
console.log(typeof(z))

const colors = ["red", "blue", "green", "orange", "black"]

for( i = 1; i < colors.length; i++)
    console.log(i + " " +colors[i])

document.querySelector('span').textContent = colors[3]
