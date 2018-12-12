$(document).ready(function(){

    
var computerChoice=Math.floor(Math.random()*120)+19;


var crystale1=Math.floor(Math.random()*12)+1;
var crystale2=Math.floor(Math.random()*12)+1;
var crystale3=Math.floor(Math.random()*12)+1;
var crystale4=Math.floor(Math.random()*12)+1;

// console.log('crystale 1 :' + crystale1);
// console.log('crystale 2 :' + crystale2);
// console.log('crystale 3 :' + crystale3);
// console.log('crystale 4 :' + crystale4);
// console.log('----------------');

$('#computerPick').append(computerChoice);
var total=0;
var win=0;
var lost=0;

$('#pick').text(total);

resetCall = function(){
  
     computerChoice=Math.floor(Math.random()*120)+19;

     crystale1=Math.floor(Math.random()*12)+1;
     crystale2=Math.floor(Math.random()*12)+1;
     crystale3=Math.floor(Math.random()*12)+1;
     crystale4=Math.floor(Math.random()*12)+1;

    //  console.log('crystale 1 :' + crystale1);
    //  console.log('crystale 2 :' + crystale2); 
    //  console.log('crystale 3 :' + crystale3);
    //  console.log('crystale 4 :' + crystale4);
    //  console.log('----------------');

}    

$('#clickImage1').click(function() {
    total = total + crystale1;
     $('#pick').text(total);
});
$('#clickImage2').click(function() {
    total = total + crystale2;
    $('#pick').text(total);
});
$('#clickImage3').click(function() {
    total = total + crystale3;
    $('#pick').text(total);
});
$('#clickImage4').click(function() {
    total = total + crystale4;
    $('#pick').text(total);
});
 
$('#click').on('click',function(){

 if (total == computerChoice){
     win++;
     $('#result').html('<p>you win!!</p>'+'<br>'+'<p> wins:' +win+'</p>'+'<p>losses: ' +lost+'</p>');
     resetCall();
     total=0;
     $('#pick').text(total);    
     $('#computerPick').text(computerChoice);   
 }
 if (total > computerChoice){
    lost++;
     $('#result').html('<p>you lost!!</p>'+'<br>'+'<p> wins:' +win+'</p>'+'<p>losses: ' + lost +'</p>');
     resetCall();
     total=0;
     $('#pick').text(total);
     $('#computerPick').text(computerChoice);
 }


});
});