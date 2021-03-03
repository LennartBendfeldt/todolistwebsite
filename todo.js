
//Take the value of the input space and add it to the to-do list
function addTask() {
  let ul = document.getElementById("dynamic-list");
  let addtolist = document.getElementById("addtolist");
  let li = document.createElement("li");
  li.setAttribute("id", addtolist.value);
  li.setAttribute("onclick", "remove(this)");
  li.appendChild(document.createTextNode(addtolist.value));
  ul.appendChild(li);
  addtolist.value = "";
}

//Remove the element after 3 seconds
function remove(elem) {
    var element = elem;
    element.style.setProperty("text-decoration", "line-through");
  setTimeout(function () {
    element.remove();
  }, 500);
}