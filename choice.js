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
            }
        }
    }
    for (var percentageCounter = 0; percentageCounter < 23; percentageCounter++){
        scores[percentageCounter] = scores[percentageCounter] / 30 * 100;
        scores[percentageCounter] = scores[percentageCounter].toFixed(2)
    }
    stellingtitle.innerHTML = "Results";
    stellingstatement.innerHTML = 
    parties[0].name + ' ' + scores[0] + '% <br>' + // can't find a way to loop inside an innerHTML
    parties[1].name + ' ' + scores[1] + '% <br>' +
    parties[2].name + ' ' + scores[2] + '% <br>' +
    parties[3].name + ' ' + scores[3] + '% <br>' +
    parties[4].name + ' ' + scores[4] + '% <br>' +
    parties[5].name + ' ' + scores[5] + '% <br>' +
    parties[6].name + ' ' + scores[6] + '% <br>' +
    parties[7].name + ' ' + scores[7] + '% <br>' +
    parties[8].name + ' ' + scores[8] + '% <br>' +
    parties[9].name + ' ' + scores[9] + '% <br>' +
    parties[10].name + ' ' + scores[10] + '% <br>' +
    parties[11].name + ' ' + scores[11] + '% <br>' +
    parties[12].name + ' ' + scores[12] + '% <br>' +
    parties[13].name + ' ' + scores[13] + '% <br>' +
    parties[14].name + ' ' + scores[14] + '% <br>' +
    parties[15].name + ' ' + scores[15] + '% <br>' +
    parties[16].name + ' ' + scores[16] + '% <br>' +
    parties[17].name + ' ' + scores[17] + '% <br>' +
    parties[18].name + ' ' + scores[18] + '% <br>' +
    parties[19].name + ' ' + scores[19] + '% <br>' +
    parties[20].name + ' ' + scores[20] + '% <br>' +
    parties[21].name + ' ' + scores[21] + '% <br>' +
    parties[22].name + ' ' + scores[22] + '%';
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
