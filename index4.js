// constructor

function Counter() {
    var count = 0
    this.incrementCounter = function() {
        count++;
        console.log("count",count);
    }
    this.decrementCounter = function() {
        count--;
        console.log("count",count)
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();