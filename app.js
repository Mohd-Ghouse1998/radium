//MODULE 1:
const obj=require('./logger')

obj.log("Mohd Ghouse")
obj.welcome()
console.log("This is google url "+obj.url)

//MODULE 2:
const obj1=require('./util/helper')

obj1.printDate()
obj1.printMonth()
obj1.getBatchInfo()

//MODULE 3:

const obj2=require('../validator/formatter')

obj2.trimStr()
obj2.changeToLower()
obj2.changeToUpper()

console.log("-------------------------------------------------------------")
const object=require('lodash')
console.log(object.chunk(['january','February','March','April','May','June','July','August','September','october','November','December'],3))

console.log(object.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))

console.log(object.union([2,4,5,7],[3,5,6,3],[1,4,2,3,],[4,2,6,4],[3,7,1,3]))

console.log(object.fromPairs([["horror","The shining"],["drama","Titanic"],["thriller","shutter island"],["fantasy","pans Labyrinth"]]))
