class Queue{

    constructor()
    {
        this.data = [];
        this.rear = 0;
        this.front =0;
    }

    enqueue(ele)
    {
        this.data[this.rear] = ele;
        this.rear = this.rear +1;
    }
    
    dequeue()
    {
        if(this.isEmpty())
        {
            console.log("Queue is Empty. Cannot remove element");
            return;
        }

        let rv = this.data[this.front];
        this.data[this.front] =0;
        this.front = this.front + 1;
        return rv;

    }

    isEmpty()
    {
        return this.rear === 0;
    }

    length()
    {
        return this.rear - this.front;
    }

    getFront()
    {
        if(this.isEmpty()){
            console.log("Queue is Empty. Cannot remove element");
            return;
        }

        return this.data[this.front];
    }

    print(){
        for(let i= this.front; i<this.rear; i++)
        {
            console.log(this.data[i]);
        }
    }
}

let q= new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.print();
q.dequeue();
console.log();
console.log("length" + q.length());