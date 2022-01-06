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
  //(callback(arr[i]))
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
    const arrfilt = [2, 4, 9, 5 ,8]

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

console.log("mySome is : " + mySome(Somearray, even))
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