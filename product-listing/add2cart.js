var count;

const userEl = document.getElementById("cart");
userEl.addEventListener('click', function (){
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
      } else {
        sessionStorage.clickcount = 1;
        }
      document.getElementById("cartNos").innerHTML = sessionStorage.clickcount;
});
    