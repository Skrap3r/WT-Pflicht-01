var myArray = [
    {"titel":"Band of Brothers", "seasons":1, "genre":"war", "streaming":"Sky Series"},
    {"titel":"Big Bang Theory", "seasons":10, "genre":"comedy", "streaming":"Netflix, Amazon Prime"},
    {"titel":"Guten Morgen Show", "seasons":3, "genre":"entertainment", "streaming":"TV"}
]
buildTable(myArray);
function buildTable(data){
    var table= document.getElementById("contentBody");

    for(var i = 0; i < data.length; i++){
        var row = `<tr>
                    <td>${i+1}</td>
                    <td>${data[i].titel}</td>
                    <td>${data[i].seasons}</td>
                    <td>${data[i].genre}</td>
                    <td>${data[i].streaming}</td>
                 </tr>`
        table.innerHTML +=row;
    }
}