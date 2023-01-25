//Grading Students
// array = [73, 67, 38, 33]

// function Grade(arr){
//     let grade;
//     for(let i =0; i< arr.length; i++){
//         if(arr[i]%5 > 2 && arr[i] > 37){
//             arr[i]= Math.round(arr[i]/5) * 5
//         } else {
//             arr[i] = arr[i]
//         }
//     }
//    return console.log(arr)
// }
// Grade(array);

//Diagonal difference
// let arr = [[1,2,3] [4,5,6] [7,8,9]]
// function diagonalDifference(arr) {
//     // Write your code here
//     let larray = 0;
//     let rarray = 0;
//     for(let i = 0; i< arr[0].length; i++){
//         for(let j = 0; j< arr[0]. length; j++){
//             if(i == j){
//                 larray += arr[i][j]
//             }
//         }
//         rarray += arr[i][arr[0].length -1 -i]
//     }
//     let sum = Math.abs(rarray - larray);
//     return sum
// }

//longest common prefix
// let array = ['flowers', 'flow', 'flight']
// function addArray(arr) {
//     let sum = '';
//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j< arr[i].length; j++){
//             if(arr[i][j] == arr[i + 1][j] && arr[i + 1][j] ==arr[i + 2][j]){
//                 sum += `${arr[i][j]}`
//             }
//         }
//         if(sum == ''){
//             return ('empty')
//         }
//         return sum
//     }
// }
// console.log(addArray(array));

//divisible sum pairs in an array
// let arr = [1, 3, 2, 6, 1, 2]
// function divisibleSumPairs(n, k, ar) {
//     let m = 0;
//     for(let i  = 0; i < n; i++){
//         for(let j = i + 1; j < n; j++){
//             if ((ar[i] + ar[j])% k === 0) {
//                 m+=1
//             }
//         }
//     }
//     return m
// }
// console.log(divisibleSumPairs(6, 3, arr))



//Migratory Birds
// function migratoryBirds(arr) {
//     //arr = arr.sort() (optional)
//    let countMigratory = {}
//    let maxSight = 0
//    let birds;
   
//    for (let i = 0; i < arr.length; i++) {
//     if (countMigratory[arr[i]]) {
//         countMigratory[arr[i]] += 1
//    } else {
//     countMigratory[arr[i]] = 1
//    }
// }

// for(birds in countMigratory) {
//     if (countMigratory[birds] > maxSight){
//         maxSight = countMigratory[birds]
//         birdId = birds
//     }  
// }
// return birdId;
// }
// console.log(migratoryBirds([5, 2, 3, 4, 5, 2, 5,1,2]))



//SubArray Division
s = [1, 2, 1, 3, 2]
d = 3
m = 2
function birthday(s, d, m) {
    let noArray = 0
    for(let i = 0; i<s.length; i++){
        for (let j = i+1; j < s.length; j++){
            if ((s[i] + s[j]) % d === 0) {
                noArray +=1
            }
        }
    }
    return noArray;
}
console.log(birthday(s,d,m))