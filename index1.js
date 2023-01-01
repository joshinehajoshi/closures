function x() {
    var a = 1;
    function close(){
        console.log(a)
    }
    return close
}

x()()