let counter = 0;
function fun00(){
    var val = document.getElementById('00').value; 
    if(val == '?'){
        if(counter % 2 == 0){
            document.getElementById('00').innerHTML = 'X';
        }
        else{
            document.getElementById('00').innerHTML = '0';
        }
        counter++;
    }
}