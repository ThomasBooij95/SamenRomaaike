// "use strict";

console.log("Script runt")
// Get info about tasks from csv
$.ajax({
type: "GET",  
url: "data/testfile.csv",
dataType: "text",       
success: function(response)  
{
data = $.csv.toObjects(response);
console.log(data)
}   
});
CHOSEN_TASKS = [];


addEventListener(document.getElementById('newGame'),'home');


// localStorage.setItem('current_phase', 'school' )//JSON.stringify(entry_dict));

function render_template(template,page,clickedId){
	// console.log(template)

	if(page == 'phase'){
	var elements = getRandom(data,3)
	var context = {
		data : elements
	}
    document.getElementById('content').innerHTML = Mustache.render(template, context);
	addEventListener(document.getElementsByClassName('btn-phase'),'phase')
	}
	else if(page == 'task'){
		filtered = data.find(function(e){return e.id == clickedId});
		CHOSEN_TASKS.push(clickedId);
		context = { 
			data : filtered
			 }
	document.getElementById('content').innerHTML = Mustache.render(template, context);
	addEventListener(document.getElementById('finish-task'),'task')
	}
	else if (page == 'home'){
	} 
	else if(page == 'score'){
	console.log("score-page, data = ",data)
	console.log("clickedid = " ,clickedId)
	filtered = data.find(function(e){return e.id == clickedId});
	console.log(filtered)
	var context = {
		data : filtered
	}
	console.log("context = ",context)
    document.getElementById('content').innerHTML = Mustache.render(template, context);
	addEventListener(document.getElementById('finish-score'),'score')
	}
}

function addEventListener(element,page){
	console.log("reach add eventlistener")
	if(page == 'phase'){
		console.log("Reach phase")
		// debugger;
		for(i = 0;i < element.length; i++){
			console.log(element[i].dataset.id)
			element[i].addEventListener('click',function (event) {
			fetch('templates/task.mst').then(response => response.text()).then(template => render_template(template,'task',this.dataset.id)); //,	
			});
		}
	}
	else if(page == 'task'){
		element.addEventListener('click',function (event) {
		fetch('templates/score.mst').then(response => response.text()).then(template => render_template(template,'score',this.dataset.id));	
		});
	}
	else if (page == 'home'){
		element.addEventListener('click',function (event) {
		fetch('templates/pickAPhase.mst').then(response => response.text()).then(template => render_template(template,'phase'));	
		});
	} 
	else if(page == 'score'){
		element.addEventListener('click',function (event) {
		fetch('templates/pickAPhase.mst').then(response => response.text()).then(template => render_template(template,'phase'));	
		});	
	}
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
