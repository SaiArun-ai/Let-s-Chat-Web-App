n = 0;
key1 = "";
key2 = "";
function LogIn(){
    username = document.getElementById("UserName").value;
    password = document.getElementById("Password").value;
    key1 = "UserName";
    key2 = "Password";
    localStorage.setItem(key1,username);
    localStorage.setItem(key2,password);
    n = n + 1;
    window.location = "kwitter_room.html";
}
function CreateAccount(){
    window.location = "index2.html";
}
function Login(){
    username = document.getElementById("Username").value;
    password = document.getElementById("PassWord").value;
    realUs = localStorage.getItem(key1);
    realPs = localStorage.getItem(key2);
    key3 = key1;
    key4 = key2;
    for(i = n ; i>-1 ; i -= 1){
        key3 = "UserName";
        key4 = "Password";
        realUs = localStorage.getItem(key3);
        realPs = localStorage.getItem(key4);
        if(username == realUs && password == realPs){
            window.location = "kwitter_room.html";
        }else{
            if(i == 0){
                document.getElementById("Error").innerHTML = "<h5 id = 'Errior'>Your username or password isn't correct</h5>"
                key3 = key1;
                key4 = key2;
            }
        }
    }
}
function Createaccount(){
    window.location = "index.html";
}