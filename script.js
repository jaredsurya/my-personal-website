/*ele = document.getElementById(".1")

function show() {
    if (style.display === "none") {
        ele.style.display = "block";
    } else{
        ele.style.display = "none";
    }
}
addEventListener(document.onclick, show())


//pass the id of the div that you want to display into your show function, 
//which should hide all the others and just show the one you pass in. 
//(Since this is all manual, you’d have to have a list of all the ids handy.) 
//Then just attach an onClick listener to each li that passes in the corresponding 
//div id