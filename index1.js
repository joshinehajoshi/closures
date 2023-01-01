function x() {
    var a = 1;
    function close(){
        console.log(a)
    }
    return close
}

console.log(x()())