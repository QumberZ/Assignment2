// myEach
let array = [1, 2, 3, 4, 5];

  function myEach(cb, array){
    for(let i = 0; i < array.length; i++)
        cb(array[i])
}
function printarr(increment){
    console.log(increment)
}
console.log("myEach is:")
myEach(printarr,array)
console.log('\n')

//myMap
let nums = [3, 2, 5, 4]

function myMap(arr, callback){
  let array2 = []
  for(let i = 0; i < arr.length; i++)
  array2 = nums
  return array2
}

function getelements(num){
  return num 
}
  let newArr = myMap(array, getelements)
  console.log("The mapped array is:")
    console.log(newArr)
    console.log('\n')

    // myFilter
    const arrfilt = [2, 4, 9, 5 ,8, "hello", "hi"]

function myFilter(arr, callback){
  let arr2 = []
  for(let i = 0; i < arr.length; i++)
  if(callback(arr[i]))
  arr2 = arrfilt
  return arr2
}

function getfilt(num) {
  return num 
  }

    let filtedArray = myFilter(arrfilt, getfilt)
    console.log("myFilter:")
    console.log(filtedArray)
    console.log('\n')

    //mySome
    let Somearray = [ 1 ,2, 3, 4, 5 ]

function mySome(arr, callback){
  const arr2 = []
  for(let i = 0; i < arr.length; i++)
  if(callback[i] >= 5)
  return true
  return false
}

console.log("mySome is : ")
 console.log(mySome(Somearray, even))
    console.log('\n')


function even(num) {
  return num % 2 == 0
  }

//myEvery 
let Everyarr = [1, 2, 3, 4]

function myEvery(Everyarr, callback){
  for(let i = 0; i < Everyarr.length; i++ )
  if(!callback(Everyarr[i]))
  return false
  return true
}

function callback(num){
  return num > 0
}
console.log("myEvery is:")
console.log(myEvery(Everyarr, callback))
console.log('\n')

//myReduce 
let addArr = [5, 43, 32, 29]

function myReduce(addArr, cb){
 let total = 0 
for(let i = 0; i < addArr.length; i++){
  total = cb(total, addArr[i])
}
return total
}


function cb(total, num){
  return total += num
}
console.log("Addition of elements is: ")
console.log(myReduce(addArr, cb))
console.log('\n')

//myincludes
let isGreater = [1, 2, 3, 4]

function myIncludes(isGreater, elem){
  for(let i = 0; i < isGreater.length; i++){
    if (isGreater[i] == elem)
    return true
  }
  return false
}

function callback(val){
  return val > 0
}
console.log("myIncludes of index 2 is: ")
console.log(myIncludes(isGreater, 2))
console.log('\n')

//myIndexOf
function myIndexOf(arr, target){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == target)
      return i
    }
    return -1
  }
  
  console.log("myindex of 5 is found at index:")
  console.log(myIndexOf([18, 41, 4, 5], 5))
  console.log('\n')

  //myPush
  const PushArr = [23, 30, 11];
let myPush = (elementToAdd, arr) => {
  PushArr[PushArr.length] = elementToAdd
  return PushArr
}
console.log("Pushing of elements:")
console.log(myPush(4))
console.log(myPush(5))
console.log(myPush(9))
console.log(myPush("cat"))
console.log('\n')

//myLastIndexOf
let LastI = [1, 7, 3 ,1, 7, 1]

function mylastIndex(LastI, target){
  for(let i = LastI.length; i > 0; i-- ){
    if(LastI[i] == target){
      return i
    }
  }
  return -1
}
let lastindex1 = mylastIndex(LastI,1)
let lastindex7 = mylastIndex(LastI,7)

console.log("Last dupl elements of 1 is located at index: ")
console.log(lastindex1)
console.log("Last dupl elements of 7 is located at index: ")
console.log(lastindex7)
console.log('\n')

//grabkeys
const Kobject = { 
    1: "one",
    2: "two",
    3: "three",
    4: "four"
  }
  
  let = keys = []
  let = Kleft = 0
  
  let grabkeys = () => {
    for(let i in Kobject){
      keys[Kleft] = i
      Kleft++
      
    }
    return keys
  }
  console.log("Keys Grabbed from left of array: ")
  console.log(grabkeys(keys))
  console.log('\n')

  //grabValues
  const Vobject = { 
    1: "one",
    2: "two",
    3: "three",
    4: "four"
  }
  
  let = values = []
  let = Vright = 0
  
  let grabValues = () => {
    for(let i in Vobject){
      values[Vright] = Vobject[i]
      Vright++
      
    }
    return values
  }
  console.log("values Grabbed from right of array: ")
  console.log(grabValues(values))
  console.log('\n')
