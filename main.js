const cars = ['ford', 'bently', 'subaru', 'ferrari']

console.log(cars.length)

const moreCars = ['chevy', 'lamborghini', 'toyota', 'honda']

let totalCars = cars.concat(moreCars)

console.log(cars.indexOf('honda'))

console.log(moreCars.lastIndexOf())

let carsInReverse = totalCars.reverse()

carsInReverse.sort()

console.log(carsInReverse)

console.log(carsInReverse.indexOf('chevy'));

let removedCars = carsInReverse.slice(3, 5)

carsInReverse.slice(3, 5)

console.log(removedCars)

carsInReverse.splice(3, 2, 'honda', 'ford')

console.log(carsInReverse)

carsInReverse.pop()

console.log(carsInReverse)

carsInReverse.shift()

console.log(carsInReverse)

carsInReverse.unshift('alpha romeo')

console.log(carsInReverse)

const numbers = [23, 45, 0, 2]

numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item + 2;
}

console.log(numbers)

