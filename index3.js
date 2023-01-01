function outest(){
    var a = 10;
    function outer(b){
        var c = 100;
        function close(){
            console.log(a,b,c)
        }
        return close
    }
    return outer
}

outest()("hello")()