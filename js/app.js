function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));

}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));

}

function changeBackground() {
    console.log(document.getElementById('block1').style.backgroundColor = "blue");

}

function increaseFont() {
    console.log(document.getElementById('block2').style.fontSize="150%");
}

function changeFontColor() {
    console.log(document.getElementById('block3').style.color='green');

}

function revertColor() {
    console.log(document.getElementById('block3').style.color='black');

}

function hide() {
    console.log(document.getElementById('block4').style.display='none');

}

function changeBackColorforAllBox() {
    console.log(document.getElementsByClassName('box1')[0].style.backgroundColor='green');
    console.log(document.getElementsByClassName('box1')[1].style.backgroundColor='green');
    console.log(document.getElementsByClassName('box1')[2].style.backgroundColor='green');
    

}
function changeBackColor(){
    console.log(document.getElementsByClassName('box2')[0].style.backgroundColor='blue');
    console.log(document.getElementsByClassName('box2')[1].style.backgroundColor='blue');
    console.log(document.getElementsByClassName('box2')[2].style.backgroundColor='blue');
}


function addAdjacent() {
   var d1=document.getElementById('para2');
   d1.insertAdjacentHTML('afterend','<div id="p2">I got generated on the fly..</div>');
}
function numbersOnly(evt){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function removePara() {
    console.log(document.getElementById('para4').innerHTML="");
   

}

function animatePara() {
     myMove();

}
function myMove(){
    document.getElementById("box5").style.position= "relative";
    document.getElementById("box5").style.animationName= "myanimation";
    document.getElementById("box5").style.animationDuration= "2s";
    
}

function uppercase()
{
    var x=document.getElementById('inputBox1');
    var y=document.getElementById('inputBox2');
    y.value=x.value.toUpperCase();
}
function camelcase(){
    var str=document.getElementById("inputBox3");
    str.value=str.value.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();

    });
}
function changeclr(){
    console.log(document.getElementById("input").style.backgroundColor="green");
}
function option(){
    console.log(document.getElementById("browsers").value);
}