let str = "one two"
console.log(str.slice(1,5))
​
let arr = ["one", "two"]
arr.splice(0, 1, "three")
console.log(arr)
​
let array = [1,2,3,4]
​
​
for(let i = 0; i<array.length; i++){
    console.log(array[i])
}
​
​
array.map(function(value){
    console.log(`value+1: ${value+1}`)
​
} )
​
​
array.forEach((value, index) => {
    console.log(`index: ${index} value: ${value}`)
});
​
​
let mas = [
    {name: "Djon"},
    {name: "Mark"},
    {name: "Tom"},
]
​
​
mas.filter(function(mas){
    console.log(mas.name)
})
​
​
let a = array.reduce((sum, item)=>item + sum , 0 )
console.log(a)
​
​
let arr2 = [11, 1, 5, 22, 21, 3,5,7]
​
arr2.sort((a,b) => a - b)
console.log(arr2)
​
​
console.log(arr2.some((a) => a > 55 ))
console.log(arr2.some((a) => a > 2 ))
​
​
console.log(arr2.every((a) => a > 20))
console.log(arr2.every((a) => a > 0))