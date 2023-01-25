//Basic queue Implementation
// class Queue {
//     constructor (){
//         this.data = [];
//     }

//     enqueue(element){
//         this.data.push(element)
//     }
//     dequeue(element){
//         return this.data.shift(element)
//     }
//     size(){
//         return this.data.length
//     }
//     peek(){
//         if(!this.data.length === 0){
//             return this.data[0]
//         }
//     }
//     print(){
//         console.log(this.data.toString())
//     }
// }

//HackerRank Queue of two stacks
// function process(input) {
//     const inputArr = input.split("  ");
//     const inQueue = [];
//     const outQueue = [];

//     function stackToQueue(){
//         if(outQueue.length === 0) {
//             while (inQueue.length > 0) {
//                 outQueue.push(inQueue.pop())
//             }
//         }
//     }

//     for(let i = 1; i< inputArr.length; i++) {
//         let item = inputArr[i].split(' ');

//         switch(item[0]) {
//             case '1': 
//                 inQueue.push(item[1])
//                 break;
//             case '2': 
//                 stackToQueue();
//                 outQueue.pop();
//             break
//             case '3': 
//                 stackToQueue();
//                 console.log(outQueue[outQueue.length - 1]);
//                 break
//             default:
//                 break
//         }
//     }
//     return outQueue.length
// }

//Queue: alternative way of solving queue of two stacks - wrong in hackerrank compiler
function process(input){
    const inputArr = input.split("  ");
    const queue = [];

    function enqueue(element){
        queue.push(element)
    }
    function dequeue(){
        queue.shift()
    }
    function print (){
        if (queue.length > 0){
            console.log(queue[0])
        } return null
    }
    for (let i = 1; i < inputArr.length; i++){
        let item = inputArr[i].split(' ');
        
        if (item[0] == 1){
            enqueue(item[1]);
        } else if (item[0] == 2) {
            dequeue();
        } else if (item[0] == 3) {
            print()
        }
    }
}

const item1 = '10  1 42  2  1 14  3  1 28  3  1 60  1 78  2  2' 
console.log(process(item1))

