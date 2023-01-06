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
let array = ['flowers', 'flow', 'flight']
function addArray(arr) {
    let sum = '';
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i].length; j++){
            if(arr[i][j] == arr[i + 1][j] && arr[i + 1][j] ==arr[i + 2][j]){
                sum += `${arr[i][j]}`
            }
        }
        if(sum == ''){
            return ('empty')
        }
        return sum
    }
}
console.log(addArray(array));

