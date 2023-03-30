console.log('this is seperate file ');
console.log('event dom car')


// adding function
function makeRed(){
    document.body.style.backgroundColor='red'
}



// const with adding btton onclick 
const makeBlueButton=document.getElementById('make-blue');
makeBlueButton.onclick =makeBlue;
function makeBlue(){
document.body.style.backgroundColor='blue';
}


// const makeGreenButton=document.getElementsByClassName('make-green');
// makeGreenButton.onclick = makeGreen ;

// function makeGreen(){
//     document.body.style.backgroundColor='green';
// }