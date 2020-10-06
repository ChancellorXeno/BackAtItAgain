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
var fat = [];

load_statement();
function load_statement(){
    stellingtitle.innerHTML = subjects[counter].title;
    stellingstatement.innerHTML = subjects[counter].statement;
}
 
function choose(choice){
    button1.style.backgroundColor = 'black';
    button2.style.backgroundColor = 'black';
    button3.style.backgroundColor = 'black';
    button4.style.backgroundColor = 'black';
    if(checkbox.checked == true){
        fat[counter] = 2;
    }else {
        fat[counter] = 1;
    }
    if(counter < 29){ // 30th choice is in the else statement
        choices[counter] = choice
        counter++
        load_statement(counter);
        checkbox.checked = false;
    }else{
        choices[counter] = choice
        counter++
        document.getElementById('button4').style.display = "none";
        selection();
    }
}   

function selection(){
    checkbox.style.display = 'none';
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
    calc_results();
}
function secular_selected(){
    secular = true;
    calc_results();
}
function both_selected(){
    both = true;
    calc_results();
}

function calc_results(){
    backbutton.style.display = 'none';
    button_container.style.display = 'none';
    console.log(choices);

    for (var positionCheck = 0; positionCheck < 23; positionCheck++){
        scores.push([parties[positionCheck].name, 0]); // inserts all parties into array
    }
   
    for (var StatementCounter = 0; StatementCounter < 30; StatementCounter++){ // 30 statements it loops trough
        for (var positionCheck = 0; positionCheck < 23; positionCheck++){ // 23 parties it loops through
            if(choices[StatementCounter] == subjects[StatementCounter].parties[positionCheck].position){ // if my choice is the same as the party's choice
                var oldscore = scores[getpartyposition(subjects[StatementCounter].parties[positionCheck].name)];
                console.log(oldscore);
                if(fat[StatementCounter] == 2){
                    oldscore[1] = oldscore[1]+2;
                }else{
                    oldscore[1] ++;
                }
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

function CheckTheBox(){
    if(checkbox.checked == false){
        checkbox.checked = true;
    }else{
    checkbox.checked = false;
    }
}
function back(){
    button1.style.backgroundColor = 'black';
    button2.style.backgroundColor = 'black';
    button3.style.backgroundColor = 'black';
    button4.style.backgroundColor = 'black';
    if(counter !== 0){
        counter--
        load_statement(counter);
        big = false;
        secular = false;
        both = false;
    }else {
        backbutton.href = "homepage.html"
    }
    if(choices[counter] == "pro"){
        button1.style.backgroundColor = 'teal';
    }else if(choices[counter] == "contra"){
        button2.style.backgroundColor = 'teal';
    }else if(choices[counter] == "none"){
        button3.style.backgroundColor = 'teal';
    }else if(choices[counter] == "skipped"){
        button4.style.backgroundColor = 'teal';
    }else{
        console.log("The first time I click the back button it doesn't color the button.");
    }
}