const fruits = ["APPLE ", "ORANGE ", "GRAPES ", "GRAPES ","APPLE ","APPLE ","ORANGE ","APPLE ","ORANGE ","ORANGE "]

let fruit = document.querySelectorAll('div')

for(i = 0 ; i < fruits.length ; i++){
    if( fruits[i] == "APPLE "){
        fruit[0].textContent += fruits[i]
    }

    if( fruits[i] == "ORANGE "){
        fruit[1].textContent += fruits[i]
    }

    if( fruits[i] == "GRAPES "){
        fruit[2].textContent += fruits[i]
    }
        
}

a = 10
b = 20



//before swap
console.log("A before " + a)
console.log("B before " + b)

a = a + b
b = a - b
a = a - b

console.log("A after " + a)
console.log("B after " + b)

