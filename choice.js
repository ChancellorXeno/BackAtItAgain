var counter = 0;
var choices = [];
// these 4 variables are used in stemmen.html
var pro = "pro";       // agree
var contra = "contra"; // disagree
var neither = "none";
var skip = "skipped";
var scores = [];
var statement = [];
var big = false;
var secular = false;
var both = false;
 
load_statement();
function load_statement(){
    stellingtitle.innerHTML = subjects[counter].title;
    stellingstatement.innerHTML = subjects[counter].statement;
}
 
function choose(choice){
    if(counter < 29){ // 30th choice is in the else statement
        choices[counter] = choice
        counter++
        load_statement(counter);
    }else{
        choices[counter] = choice
        counter++
        document.getElementById('button4').style.display = "none";
        selection();
    }
}

function selection(){
    stellingtitle.innerHTML = 'Welke partijen wilt u te zien krijgen?';
    stellingstatement.innerHTML = '';
    document.getElementById('button1').innerHTML = 'Big';
    document.getElementById('button1').addEventListener('click', big_selected)
    document.getElementById('button2').innerHTML = 'Secular';
    document.getElementById('button2').addEventListener('click', secular_selected);
    document.getElementById('button3').innerHTML = 'Both';
    document.getElementById('button3').addEventListener('click', both_selected);
}
function big_selected(){
    big = true;
    weight();
}
function secular_selected(){
    secular = true;
    weight();
}
function both_selected(){
    both = true;
    weight();
}

function weight(){  // currently working on this
    document.getElementById('button-container').style.display = 'none';
    stellingtitle.innerHTML = 'Vink de stellingen aan die u extra gewicht wilt geven';
    stellingstatement.innerHTML = '';
    for(var positionCheck = 0; positionCheck < 30; positionCheck++){
        statement.push([subjects[positionCheck].title, 1]);
        stellingstatement.innerHTML += '<img class=\"checkbox_button\" id=\"checkbox' + positionCheck + '\" src=\"http://placehold.jp/25x25.png\" width=\"25px\" height=\"25px\" onclick=\"' + function test(){ weight_calc(positionCheck) } + '\">' + statement[positionCheck][0] + '<br>';
    }
}
function weight_calc(position){
    console.log(position);
}
function calc_results(){
    document.getElementById('backbutton').style.display = 'none';
    console.log(choices);

    for (var positionCheck = 0; positionCheck < 23; positionCheck++){
        scores.push([parties[positionCheck].name, 0]); // inserts all parties into array
    }
   
    for (var StatementCounter = 0; StatementCounter < 30; StatementCounter++){ // 30 statements it loops trough
        for (var positionCheck = 0; positionCheck < 23; positionCheck++){ // 23 parties it loops through
            if(choices[StatementCounter] == subjects[StatementCounter].parties[positionCheck].position){ // if my choice is the same as the party's choice
                var partyname = subjects[StatementCounter].parties[positionCheck].name;
                var partyindex = getpartyposition(partyname);
                var oldscore = scores[partyindex];
                oldscore[1] ++;
                stellingtitle.innerHTML = 'Resultaten'
                stellingstatement.innerHTML = '';
            }
        }
    }
 
    sort_percentage();
    function sort_percentage(){
        scores.sort(function(a, b){return b[1] - a[1]});
    }
   
    for (var percentageCounter = 0; percentageCounter < 23; percentageCounter++){
        scores[percentageCounter][1] = scores[percentageCounter][1] / 30 * 100;
        scores[percentageCounter][1] = scores[percentageCounter][1].toFixed(2);
        if(big == true){
            if(parties[percentageCounter].size >= 10){
                stellingstatement.innerHTML += scores[percentageCounter][0] + ' ' + scores[percentageCounter][1] + '% <br>'; // Displays result
            }
        }
        if(secular == true){
            if(parties[percentageCounter].secular == true){
                stellingstatement.innerHTML += scores[percentageCounter][0] + ' ' + scores[percentageCounter][1] + '% <br>'; // Displays result
            }
        }
        if(both == true){
            stellingstatement.innerHTML += scores[percentageCounter][0] + ' ' + scores[percentageCounter][1] + '% <br>'; // Displays result
        }
    }
}
 
function getpartyposition(partyname){ // checks what position the party belongs to in the scores array
    for (var positionCheck = 0; positionCheck < 23; positionCheck++){
        if(parties[positionCheck].name == partyname){
            return positionCheck;
        }
    }
}
 
function back(){
    if(counter !== 0){
        counter--
        load_statement(counter);
        big = false;
        secular = false;
        both = false;
    }else {
        backbutton.href = "homepage.html"
    }
}