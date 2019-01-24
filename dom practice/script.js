setTimeout(function() {
    let sum = 0;
    for(let i = 0; i < 101; i++){
        if(i % 2 === 0){
            sum += i;
        }
    };
    document.getElementById('paragraph').innerHTML = sum;
}, 1500);

setTimeout(function() {
    $('#paragraph').text("jquery text")
}, 3000);