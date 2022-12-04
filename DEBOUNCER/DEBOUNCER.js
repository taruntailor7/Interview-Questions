document.getElementById("search").addEventListener('input',debouncer(getValue,500))

function getValue(){
    let value = document.getElementById("search").value;
    console.log(value)
}

function debouncer(callback,delay){
    let timerid;
    return function(){
        clearTimeout(timerid);
        timerid = setTimeout(()=>{
            callback();
        },delay);
    }
}
