function throttler(callback,delay){
    let prev = 0;
    return function(...args){
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            callback();
        }
    }
}

var throttle = document.getElementById("throttle");

throttle.addEventListener("click",throttler(function(){
    console.log("Throttle")
},2000))
