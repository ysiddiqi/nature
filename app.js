/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

 // automatic show popup after 2 seconds of page load

 const popup = document.querySelector('.popup');
 const close = document.querySelector('.close');

 window.onload = function(){
     setTimeout(function(){
        popup.style.display ="block"

        //  add some time delay to show popup

     }, 2000)
    }
     close.addEventListener('click', () => {
       popup.style.display = "none";
     })
 