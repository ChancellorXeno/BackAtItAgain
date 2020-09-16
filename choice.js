var counter = 0;
var choices = [];
// these 4 variables are used in stemmen.html
var pro = "pro";       // agree
var contra = "contra"; // disagree
var neither = "none";
var skip = "skipped";

load_statement(counter);
function load_statement(choice){
    stellingtitle.innerHTML = subjects[counter].title;
    stellingstatement.innerHTML = subjects[counter].statement;
}


function choose(choice){
    if(counter < 29){ // 30th choice is in the else statement
        choices[counter] = choice
        console.log(choices);
        counter++
        load_statement(counter);
    }else{
        choices[counter] = choice
        console.log(choices);
        counter++
        document.getElementById('button-container').style.display = "none";
        calc_results();
    }
}

function calc_results(){
    var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log(subjects);
    for (var StatementCounter = 0; StatementCounter < 30; StatementCounter++){ // 30 statements it loops trough
        for (var positionCheck = 0; positionCheck < 23; positionCheck++){ // 23 parties it loops through
            if(choices[StatementCounter] == subjects[StatementCounter].parties[positionCheck].position){ // if my choice is the same as the party's choice
                var partyposition = getpartyposition(subjects[StatementCounter].parties[positionCheck].name);
                scores[partyposition]++;
                console.log(scores);
                stellingstatement.innerHTML = '';
            }
        }
    }
    combine();
    function combine(){
        var combined = [{},{}];
        
    }
    //scores.sort(function(a, b){return b - a}); // moet parties mee sorteren
    
    for (var percentageCounter = 0; percentageCounter < 23; percentageCounter++){
        scores[percentageCounter] = scores[percentageCounter] / 30 * 100;
        scores[percentageCounter] = scores[percentageCounter].toFixed(2);
        stellingstatement.innerHTML += parties[percentageCounter].name + ' ' + scores[percentageCounter] + '% <br>';
    }
} 

function getpartyposition(partyname){ // checks what position the party belongs to in the scores array
    for (var positionCheck = 0; positionCheck < 23; positionCheck++){ 
        if(parties[positionCheck].name == partyname){
            return positionCheck;
        }
    }
    return undefined; // if no party with said name is found (shouldn't happen)
}

function back(){
    if(counter !== 0){
        counter--
        load_statement(counter)
    }else {
        backbutton.href = "homepage.html"
    }
}

































// tryna remember

// from data_array.js I need:
// title - statement - parties - amount of pro/contra/none from every party

// count my total pro/contra/none
// count party total pro/contra/none