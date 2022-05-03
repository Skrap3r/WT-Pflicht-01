function validate(){
    let xhttp = new XMLHttpRequest();
    
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    if(username=="admin"&&password=="123"){
        alert("login succesfull");
        
        window.location.href="steam.html";
    } else {
        alert("login failed")
    }
}

document.querySelector("#btn1").addEventListener("click", (event) => validate());
