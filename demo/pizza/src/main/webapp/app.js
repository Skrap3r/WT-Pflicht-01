function read(){
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        let test = JSON.parse(this.responseText);
        console.log(test);
    };

    xhttp.open("GET", "api/bestellungen", true);
    xhttp.send();
};