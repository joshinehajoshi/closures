function x() {
    for(var i=0; i<5; i++){
        function close(i) {
        setTimeout(function(){
            console.log(i)
        },1000*i)
    }
     close(i)
    }
}

x()