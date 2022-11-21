//crate function for close button and
function closeButton() {
  let spanclose = document.createElement("span");
  let stext = document.createTextNode("\u274C");
  spanclose.className = "close-button";
  spanclose.appendChild(stext);
  return spanclose;
}

//Create a close abutton and append it to the list
// let myNodelist = document.getElementsByTagName("LI");
var myNodelist = document.getElementsByTagName("LI");
console.log(myNodelist[0]);
let i;
for (i = 0; i < myNodelist.length; i++) {
  console.log(i);
  // myNodelist.item(i).appendChild(closeButton());
}

//create a new entrie in document
function newElement() {
  let list = document.getElementById("myUl");
  let inp = document.getElementById("myInput").value;
  let newli = document.createElement("li");
  let text = document.createTextNode(inp);

  newli.appendChild(text);
  if (inp == "") {
    alert("Please enter a valid input");
  } else {
    list.appendChild(newli);
  }
  //Add x mark as span in list
  newli.appendChild(closeButton());
}
