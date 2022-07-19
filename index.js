let counter = 0;
let arr = [0,1,2,3,4,5,6,7,8]; 
const question = [1,1,1,1,1,1,1,1,1];

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function turn(){
    if(counter%2 == 0){
        document.getElementById('player').innerHTML = "player_1's turn";
    }
    else{
        document.getElementById('player').innerHTML = "player_2's turn";
    }
}

function check(){
    for (let i = 0; i < 8; i++) {
        if(win[i,0] == document.getElementById(win[i,0]) && win[i,1] == document.getElementById(win[i,1]) && win[i,2] == document.getElementById(win[i,2])){
            if(counter%2 == 0){
                document.getElementById('player').innerHTML = "player_1 is winner";
            }
            else{
                document.getElementById('player').innerHTML = "player_2 is winner";
            }
        }
    }
}

function fun0(){
    if(question[0] == 1){
        if(counter%2 == 0){
            document.getElementById('0').innerHTML = 'X';
        }
        else{
            document.getElementById('0').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[0] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun1(){
    if(question[1] == 1){
        if(counter%2 == 0){
            document.getElementById('1').innerHTML = 'X';
        }
        else{
            document.getElementById('1').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[1] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun2(){
    if(question[2] == 1){
        if(counter%2 == 0){
            document.getElementById('2').innerHTML = 'X';
        }
        else{
            document.getElementById('2').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[2] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun3(){
    if(question[3] == 1){
        if(counter%2 == 0){
            document.getElementById('3').innerHTML = 'X';
        }
        else{
            document.getElementById('3').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[3] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun4(){
    if(question[4] == 1){
        if(counter%2 == 0){
            document.getElementById('4').innerHTML = 'X';
        }
        else{
            document.getElementById('4').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[4] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun5(){
    if(question[5] == 1){
        if(counter%2 == 0){
            document.getElementById('5').innerHTML = 'X';
        }
        else{
            document.getElementById('5').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[5] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun6(){
    if(question[6] == 1){
        if(counter%2 == 0){
            document.getElementById('6').innerHTML = 'X';
        }
        else{
            document.getElementById('6').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[6] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun7(){
    if(question[7] == 1){
        if(counter%2 == 0){
            document.getElementById('7').innerHTML = 'X';
        }
        else{
            document.getElementById('7').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[7] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}

function fun8(){
    if(question[8] == 1){
        if(counter%2 == 0){
            document.getElementById('8').innerHTML = 'X';
        }
        else{
            document.getElementById('8').innerHTML = '0';
        }
        turn();
        check();
        console.log(counter);
        question[8] = 2;
        counter++;
    }
    else{
        console.log(counter);
    }
}