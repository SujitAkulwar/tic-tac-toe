
let counter = 0;
function fun(val){
    if(document.getElementById(val) == '?'){
        if(counter % 2 == 0){
            document.getElementById(val).innerHTML = 'X';
        }
        else{
            document.getElementById(val).innerHTML = '0';
        }
        counter++;
    }
}