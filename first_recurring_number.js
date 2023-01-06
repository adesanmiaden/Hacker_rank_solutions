//(1) first recurring number in an array
const arrayLis = [2,3,4,1,2,7,3,6,6,6,7];

//(1a) Mehod 1
// function Recurring(arrayList) {
//     for (let i = 0; i < arrayList.length; i++) {
//      if(arrayList.indexOf(arrayList[i]) !== i) {
//         console.log(arrayList[i]);
//         break;
//      }
//     }
// }

//(1b) Method 2
// function Recurring(input) {
//     for (let i = 0; i < input.length; i++) {
//         for(let j = i+1; j<input.length; j++){
//             if(input[i] === input[j]) {
//                 console.log(input[i]);
//                 return input[i]
//             }
//         } 
//     }
//     return undefined;
// }

//(1c) Using HashTable
// function Recurring(input){
//     let map = {}
//     for(let i=0; i < input.length; i++) {
//         if(map[input[i]] !== undefined){
//             return console.log(input[i])
//         } else {
//             map[input[i]] = i
//         }
//     }
// }
// Recurring(arrayLis);

//(2). Using HashTable - Does two arrays have a common character?
// const array1 = [2, 4, 5, 7, 8, 9, 5];
// const array2 = [9, 1, 3, 0]

// function CommonCharacter(arr1, arr2) {
//     let map = {};
//     for (let i= 0; i < arr1.length; i++){
//         if (map[arr1[i]] === undefined){
//             map[arr1[i]] = true;
//         }
//     }
//     for (let j= 0; j < arr2.length; j++){
//         if (map[arr2[j]]) {
//             return console.log(map[arr2[j]]);
//         }
//     }
//     return console.log(undefined);
// }

// CommonCharacter(array1, array2);






