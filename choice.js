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