var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var lista = document.querySelector("ul");
var links = document.querySelectorAll("li");
var btdel = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var div = document.createElement("div");
	var divb = document.createElement("button");

	li.appendChild(document.createTextNode(input.value));
	lista.appendChild(li);
	li.onclick = testClassDone;

	div.setAttribute("class", "buttons");
	li.appendChild(div);

	divb.appendChild(document.createTextNode("Delete"));
	divb.onclick = delElemento;
	div.appendChild(divb);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for(var nA=0; nA < links.length; nA++) {
   // var link = links[nA];
   links[nA].onclick = testClassDone;
}

function delElemento() {
	var delEle = (this.parentElement).parentElement;
	delEle.remove()
}

for(var nA=0; nA < btdel.length; nA++) {
	btdel[nA].onclick =  delElemento;
}

function testClassDone() {
	if (this.getAttribute("class") === null) {
		this.setAttribute("class", "done");
	}
	else {
		this.removeAttribute("class");
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
