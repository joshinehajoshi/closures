function x() {
    var a = 1;
    function close(){
        console.log(a);
        console.log(b)
    }
    let b=20;
    return close
}

x()()