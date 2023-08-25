function showAlert() {
  var myAlert = "We will contact you soon!";
  alert(myAlert);
}
//get elements with tabcontent class and hide
function openInfo(evt, tabName) {
  //declaring variables
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //get elements with class tablinks and remove the active class
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  //show current tab and add active class to it
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}

//will open home tab by default
document.getElementById("defaultOpen").click();
