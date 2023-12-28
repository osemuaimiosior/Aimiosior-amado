function BookDemo(){
const myWindow = window.open("../BookDemo.html", "", "width=600,height=700");
myWindow.opener.document.getElementById("Car").textContent = "HELLO!";
}

function close() {
    myWindow.close();
  }