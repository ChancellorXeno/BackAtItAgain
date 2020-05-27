var counter = 0;
var choices = [];

var pro = "pro";       // agree
var contra = "contra"; // disagree
var neither = "none";
var skip = "skipped";

var PVVsame = 0;

load_statement(counter);
function load_statement(choice){
    stellingtitle.innerText = subjects[counter].title;
    stellingstatement.innerText = subjects[counter].statement;
}

function choose(choice){
    if(counter !== 29){
        choices[counter] = choice
        
        
        console.log(choices)

        /* console.log(subjects[counter].parties[1]);
        if(subjects[counter].parties[1].position == "pro"){
            console.log("fuck yes it works");
            console.log(subjects[counter].parties[1].position);
        } */

        for (var positionCheck = 0; positionCheck < 23; positionCheck++){
            if(subjects[counter].parties[positionCheck].name == "PVV"){
                console.log(positionCheck + ' %c is PVV ', 'background: green; color: white; display: block;');
                if(subjects[counter].parties[positionCheck].position == "pro"){
                    console.log('%c This is pro ', 'background: blue; color: white; display: block;');
                    if(choices[counter] == "pro"){
                        PVVsame++;
                        console.log('me and PVV agree on ' + PVVsame + ' statements so far.');
                    }

                }else{
                    console.log('%c This is not pro ', 'background: red; color: white; display: block;');
                    if(choices[counter] == "contra"){
                        PVVsame++;
                        console.log('me and PVV agree on ' + PVVsame + ' statements so far.');
                    }
                }
            }else{ 
                console.log(positionCheck + ' is not PVV');
            }
        }
        counter++
        load_statement(counter)
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
