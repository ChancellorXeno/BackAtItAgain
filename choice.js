var counter = 0;
var choices = [];
// these 4 variables are used in stemmen.html
var pro = "pro";       // agree
var contra = "contra"; // disagree
var neither = "none";
var skip = "skipped";

load_statement(counter);
function load_statement(choice){
    stellingtitle.innerText = subjects[counter].title;
    stellingstatement.innerText = subjects[counter].statement;
}

function choose(choice){
    if(counter !== 29){
        choices[counter] = choice
        console.log(choices);
        counter++
        load_statement(counter);
    }else {
        calc_results();
    }
}

function calc_results(){
    var scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log(subjects);
    for (var StatementCounter = 0; StatementCounter < 29; StatementCounter++){ // 29 statements it loops trough
        for (var positionCheck = 0; positionCheck < 23; positionCheck++){ // 23 parties it loops through
            console.log(subjects[StatementCounter].parties[positionCheck].position)
            if(choices[StatementCounter] == subjects[StatementCounter].parties[positionCheck].position){ // if my choice is the same as the party's choice
                var partyposition = getpartyposition(subjects[StatementCounter].parties[positionCheck].name);
                scores[partyposition]++;
                console.log(scores);
            }
        }
    }
    stellingtitle.innerText = "Results";
    stellingstatement.innerText = scores.toString();
    
}

function getpartyposition(partyname){
    for (var positionCheck = 0; positionCheck < 23; positionCheck++){
        if(parties[positionCheck].name == partyname){
            return positionCheck;
        }
    }
    return undefined; // if no party with said name is found
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

// PVV x14 pro
// SP x13 pro
// D66 x11 pro
// Groenlinks x15 pro
// Partij voor de Dieren x16 pro
// 50Plus x15 pro
// VNL x15 pro
// Nieuwe Wegen x14 pro
// Forum voor Democratie x18 pro
// De Burger Beweging x16 pro
// Vrijzinnige Partij x12 pro
// Piratenpartij x9 pro
// Libertarische Partij x14 pro
// Lokaal in de Kamer x16 pro
// Niet Stemmers x30 none
// VVD x11 pro x19 contra
// PvdA x
// CDA
// ChristenUnie
// SGP
// OndernemersPartij
// DENK
// Artikel 1
