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


addEventListener(document.getElementById('newGame'),'home');


// localStorage.setItem('current_phase', 'school' )//JSON.stringify(entry_dict));

function render_template(template,page){
	// console.log(template)

	if(page == 'phase'){
	var elements = getRandom(data,3)
	var context = {
		data : elements
	}
    document.getElementById('content').innerHTML = Mustache.render(template, context);;
	}
	else if(page == 'task'){

	}
	else if (page == 'home'){

	} 
	else if(page == 'score'){

}
}

function addEventListener(element,page){
	if(page == 'phase'){
	
	}
	else if(page == 'task'){

	}
	else if (page == 'home'){
		element.addEventListener('click',function (event) {
		fetch('templates/pickAPhase.mst').then(response => response.text()).then(template => render_template(template,'phase'));	
		});
	} 
	else if(page == 'score'){
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
