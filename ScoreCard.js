let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");

elem[2]
  = document.getElementById("2");

elem[3]
  = document.getElementById("3");

elem[4]
  = document.getElementById("4");

elem[5]
  = document.getElementById("5");

elem[6]
  = document.getElementById("6");

elem[7]
  = document.getElementById("7");

elem[8]
  = document.getElementById("8");

elem[9]
  = document.getElementById("9");

elem[10]
  = document.getElementById("10");

elem[11]
  = document.getElementById("11");

elem[12]
  = document.getElementById("12");

elem[13]
  = document.getElementById("13");

elem[14]
  = document.getElementById("14");

elem[15]
  = document.getElementById("15");

elem[16]
  = document.getElementById("16");

elem[17]
  = document.getElementById("17");

elem[18]
  = document.getElementById("18");
  
elem[19]
  = document.getElementById("totals");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};

elem[1].children[4].children[1].onclick 
  = function(){sub1(elem[1]);};

elem[1].children[4].children[2].onclick 
  = function(){clr(elem[1]);};

elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};

elem[2].children[4].children[1].onclick 
  = function(){sub1(elem[2]);};

elem[2].children[4].children[2].onclick 
  = function(){clr(elem[2]);};

elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};

elem[3].children[4].children[1].onclick 
  = function(){sub1(elem[3]);};

elem[3].children[4].children[2].onclick 
  = function(){clr(elem[3]);};

elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};

elem[4].children[4].children[1].onclick 
  = function(){sub1(elem[4]);};

elem[4].children[4].children[2].onclick 
  = function(){clr(elem[4]);};

elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};

elem[5].children[4].children[1].onclick 
  = function(){sub1(elem[5]);};

elem[5].children[4].children[2].onclick 
  = function(){clr(elem[5]);};

elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]);};

elem[6].children[4].children[1].onclick 
  = function(){sub1(elem[6]);};

elem[6].children[4].children[2].onclick 
  = function(){clr(elem[6]);};

elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};

elem[7].children[4].children[1].onclick 
  = function(){sub1(elem[7]);};

elem[7].children[4].children[2].onclick 
  = function(){clr(elem[7]);};

elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};

elem[8].children[4].children[1].onclick 
  = function(){sub1(elem[8]);};

elem[8].children[4].children[2].onclick 
  = function(){clr(elem[8]);};

elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]);};

elem[9].children[4].children[1].onclick 
  = function(){sub1(elem[9]);};

elem[9].children[4].children[2].onclick 
  = function(){clr(elem[9]);};

elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]);};

elem[10].children[4].children[1].onclick 
  = function(){sub1(elem[10]);};

elem[10].children[4].children[2].onclick 
  = function(){clr(elem[10]);};

elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};

elem[11].children[4].children[1].onclick 
  = function(){sub1(elem[11]);};

elem[11].children[4].children[2].onclick 
  = function(){clr(elem[11]);};

elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};

elem[12].children[4].children[1].onclick 
  = function(){sub1(elem[12]);};

elem[12].children[4].children[2].onclick 
  = function(){clr(elem[12]);};

elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]);};

elem[13].children[4].children[1].onclick 
  = function(){sub1(elem[13]);};

elem[13].children[4].children[2].onclick 
  = function(){clr(elem[13]);};

elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};

elem[14].children[4].children[1].onclick 
  = function(){sub1(elem[14]);};

elem[14].children[4].children[2].onclick 
  = function(){clr(elem[14]);};

elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};

elem[15].children[4].children[1].onclick 
  = function(){sub1(elem[15]);};

elem[15].children[4].children[2].onclick 
  = function(){clr(elem[15]);};

elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};

elem[16].children[4].children[1].onclick 
  = function(){sub1(elem[16]);};

elem[16].children[4].children[2].onclick 
  = function(){clr(elem[16]);};

elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};

elem[17].children[4].children[1].onclick 
  = function(){sub1(elem[17]);};

elem[17].children[4].children[2].onclick 
  = function(){clr(elem[17]);};

elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};

elem[18].children[4].children[1].onclick 
  = function(){sub1(elem[18]);};

elem[18].children[4].children[2].onclick 
  = function(){clr(elem[18]);};

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else if(elem.children[2].innerHTML == "8") 
    elem.children[2].innerHTML = "8";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
  elem.children[3].innerHTML = diff(elem.children[1].innerHTML,elem.children[2].innerHTML);
  totalsPlus(elem.children[2].innerHTML,elem.children[3].innerHTML);
}

 function sub1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-";
  else if(elem.children[2].innerHTML == "1") 
    elem.children[2].innerHTML = "-";
   
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
   elem.children[3].innerHTML = diff(elem.children[1].innerHTML,elem.children[2].innerHTML);
totalsSub(elem.children[2].innerHTML,elem.children[3].innerHTML);
}

 function clr (elem) {
    totalsClear(elem.children[2].innerHTML,elem.children[3].innerHTML)
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";
 }

function diff (a, b){
  if(b == "-")
    return "-";
  else
  return a - b;
}


function totalsClear (a,b){ 
  if(a !== "-" && b !== "-"){
  let currentScore = elem[19].children[2].innerHTML;
    let currentPar = elem[19].children[1].innerHTML;
    currentPar = Number.parseInt(currentPar);
      currentScore = Number.parseInt(currentScore);
    if(currentScore - a == 0){ elem[19].children[2].innerHTML = "-"}
     else{
      elem[19].children[2].innerHTML = currentScore - a;}
    
    let currentOver = elem[19].children[3].innerHTML;
     if(currentOver - b ==0){
      elem[19].children[3].innerHTML = "-"}
    else
    {elem[19].children[3].innerHTML = currentOver - b;}
    
    if(elem[19].children[1].innerHTML == "4"){ 
        elem[19].children[1].innerHTML = "-";}
    else{
          elem[19].children[1].innerHTML = elem[19].children[1].innerHTML-4;
    }}}


function totalsSub (a,b){ 
      if(elem[19].children[2].innerHTML == "1") 
        elem[19].children[2].innerHTML = "-";
      else {
        let currentScore = elem[19].children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem[19].children[2].innerHTML = currentScore - 1;
      }
      if(elem[19].children[3].innerHTML == "3") 
        elem[19].children[3].innerHTML = "-";
      else {
        let currentScore = elem[19].children[3].innerHTML;
        currentScore = Number.parseInt(currentScore);
        elem[19].children[3].innerHTML = currentScore + 1;
        
        
      if(a == "-" && b == "-"){
        let currentScore = elem[19].children[1].innerHTML;
        currentScore = Number.parseInt(currentScore);
          elem[19].children[1].innerHTML = currentScore - 4;
      }
 }}

function totalsPlus (a,b){ 
        if(elem[19].children[2].innerHTML == "-") 
          elem[19].children[2].innerHTML = "1";
        else {
          let currentScore = elem[19].children[2].innerHTML;
          currentScore = Number.parseInt(currentScore);
          elem[19].children[2].innerHTML = currentScore + 1;
        }
        if(elem[19].children[3].innerHTML == "-") 
          elem[19].children[3].innerHTML = "3";
        else {
          let currentScore = elem[19].children[3].innerHTML;
          currentScore = Number.parseInt(currentScore);
          elem[19].children[3].innerHTML = currentScore - 1;
        }
        if(a == "1" && b == "3"){
        let currentScore = elem[19].children[1].innerHTML;
        if(currentScore == "-"){
          elem[19].children[1].innerHTML = "4";
        }
        else{
        currentScore = Number.parseInt(currentScore);
          elem[19].children[1].innerHTML = currentScore + 4;}}}
      




/* your mission: 

1. Make all the + buttons add 1 to the score of the hole. Do not allow the score to exceed double the par. 
2. Make all the - buttons subtract 1 from the score of the hole. Do not allow the score to be negative!
3. Make the "Over" column display the difference, score - par, of the hole.
4. Make a table row's background color yellow if and only if that table row has a nonzero score.
5. Make the HTML table row with id="totals" display appropriate totals. Totals should be computed only for holes that have yellow-highlighted nonzero scores. Like the yellow-highlighted table rows above, the "totals" table row background color must be yellow if and only if it has a nonzero score. 
6. Add to the Action column a new button, C, which clears the current score for a given hole, and re-sets the table row background color to default.
7. Replace HTML table row code with JavaScript code that appends table rows. That is, delete the HTML elements with ID's 1 through 18, and write a function that loops 18 times, appending the appropriate DOM elements with ID's 1 through 18.  
8. Add a "RESET" button which clears all user-entered data. Use addEventListener method to add functionality to the button. See: https://www.w3schools.com/js/js_htmldom_eventlistener.asp. 
9. Add an "ABOUT" button which displays the message, "Golf Scorecard 1.0. All rights reserved."  Use an arrow function to add the "ABOUT" button to the DOM. See: https://www.w3schools.com/Js/js_arrow_function.asp.
10. Add a "FONT" button which toggles the font size of the entire app, from/to smaller to/from larger.
*. Advanced (optional): put circles around scores that are birdies, and squares around scores that are bogeys!
*/
