let counter = 0;
let arr = [0,1,2,3,4,5,6,7,8]; 

// let button0 = document.getElementById('0').value;
// let button1 = document.getElementById('1').value;
// let button2 = document.getElementById('2').value;
// let button3 = document.getElementById('3').value;
// let button4 = document.getElementById('4').value;
// let button5 = document.getElementById('5').value;
// let button6 = document.getElementById('6').value;
// let button7 = document.getElementById('7').value;
// let button8 = document.getElementById('8').value;

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

// function playerplaying(){
//     return counter%2;
// }

// function check(){
//     for (let i = 0; i < 8; i++) {
//         if(win[i,0] == document.getElementById(win[i,0]).value && win[i,1] == document.getElementById(win[i,1]).value && win[i,2] == document.getElementById(win[i,2]).value){
//             if(playerplaying()==0){
//                 document.getElementById('player').innerHTML = "player_1 is winner"
//             }
//             else{
//                 document.getElementById('player').innerHTML = "player_2 is winner"
//             }
//         }
//       }
// }

function fun0(){
    if(document.getElementById('0') == "?"){
        counter++;
        if(playerplaying()==0){
            document.getElementById('0').innerHTML = 'X';
        }
        else{
            document.getElementById('0').innerHTML = '0';
        }
        // check();
        console.log('5');
    }
}

function fun1(){
    console.log('5');
}
function fun2(){
    console.log('5');
}
function fun3(){
    console.log('5');
}
function fun4(){
    console.log('5');
}
function fun5(){
    console.log('5');
}
function fun6(){
    console.log('5');
}
function fun7(){
    console.log('5');
}
function fun8(){
    console.log('5');
}