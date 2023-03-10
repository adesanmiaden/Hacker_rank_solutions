class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        let newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode;
        this.length++;
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(20)
myLinkedList.append(5)
myLinkedList.prepend(9)
console.log(myLinkedList)