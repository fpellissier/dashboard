
var manageJob = function(action) {
    let url = "/dateTimeJob/manage?action=" + action;
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        document.getElementById("responseText").innerHTML = xhr.response;
    };

    xhr.open("GET",url,true);
    xhr.send();
};
