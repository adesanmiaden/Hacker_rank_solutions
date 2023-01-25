class HashTable {
    constructor (size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i< currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return console.log(currentBucket[i][1])
                }
            }
            return undefined
        }
    }

    key(){
        const keyArray = [];
        for(let i = 0; i< this.data.length; i++){
           if (this.data[i]){
            keyArray.push(this.data[i][0][0]);
           }
        }

        return keyArray;
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('drinks', 500)
myHashTable.set('banana', 230)
myHashTable.set('apple', 74)
myHashTable.set('pineapple', 74)
myHashTable.get('banana')
myHashTable.key()



