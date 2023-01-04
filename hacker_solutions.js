//Grading Students
array = [73, 67, 38, 33]

function Grade(arr){
    let grade;
    for(let i =0; i< arr.length; i++){
        if(arr[i]%5 > 2 && arr[i] > 37){
            arr[i]= Math.round(arr[i]/5) * 5
        } else {
            arr[i] = arr[i]
        }
    }
   return console.log(arr)
}

Grade(array);