//callback

setTimeout(function(){
    console.log("timer")
}, 500)


function x(y) {
    console.log("x");
    y()
}

x(function y() {
    console.log("y")
})