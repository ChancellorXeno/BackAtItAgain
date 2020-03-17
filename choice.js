var counter = 0;
var choices = [];

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
        counter++
        load_statement(counter)
        

        console.log(choices)
        console.log(counter)
    }else {
        console.log('I need to change the page now.');
    }
}

function back(){
    if(counter !== 0){
        counter--
        load_statement(counter)
    }else {
        backbutton.href= "homepage.html"
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
