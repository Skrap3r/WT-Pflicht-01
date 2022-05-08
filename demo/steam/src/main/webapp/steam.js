var myArray = [
    {"titel":"Band of Brothers", "seasons":1, "genre":"war", "streaming":"Sky Series"},
    {"titel":"Big Bang Theory", "seasons":10, "genre":"comedy", "streaming":"Netflix, Amazon Prime"},
    {"titel":"Guten Morgen Show", "seasons":3, "genre":"entertainment", "streaming":"TV"}
];

buildTable(myArray);
function buildTable(data){
    var table= document.getElementById("contentBody");

    for(var i = 0; i < data.length; i++){
        var row = `<tr id="${i}">
                    <td>${i+1}</td>
                    <td>${data[i].titel}</td>
                    <td>${data[i].seasons}</td>
                    <td>${data[i].genre}</td>
                    <td>${data[i].streaming}</td>
                    <td></td>
                    <td></td>
                    <td> <button type="button" class="btnAdd" id="${i}EditBtn" onclick="editElement(${i})">Edit</button> </td>
                 </tr>`
                 
        table.innerHTML +=row;
        

    }
    table.rows[0].cells.item(3).innerHTML="moin";
}
//var selected = document.getElementById("select").value;
function editElement(id, data){
    window.location.href="factory.html";
    console.log(id);
    console.log(myArray[id]);
    document.createTextNode("Hallo" + myArray[id].genre);
    // var node = ev.target || ev.srcElement;
    // console.log(node);
}

function addElement(){
    window.location.href="factory.html";
}

//document.querySelector("#table1").addEventListener("click", (event)=>editElement(event));
document.querySelector(".btnAdd").addEventListener("click", (event)=>addElement())
//document.querySelector("#btnEdit").addEventListener("click", (event)=>addElement())

// document.addEventListener('DOMContentLoaded', () => {
//     document
//       .getElementById('userSelect')
//       .addEventListener('input', handleSelect);
//     //document.getElementById('thing').addEventListener('input', handleData);
//   });

//   function handleSelect(ev) {
//     let select = ev.target; //document.getElementById('flavours');
//     console.log(select.value);
//     let choices = [];
//     // for (let i = 0; i < select.selectedOptions.length; i++) {
//     //   choices.push(select.selectedOptions[i].value);
//     // }
//     choices = [].map.call(select.selectedOptions, (option) => option.value);
//     console.log(choices);
//   }
//   function handleData(ev) {
//     let theInput = ev.target;
//     console.log(theInput.value, typeof theInput.value);
//   }