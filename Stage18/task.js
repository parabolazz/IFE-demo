
var ul = document.getElementsByTagName('ul')[0];

function leftinoperat(){
	var num = document.getElementById("inputnum").value.trim();
	if (num) {
		var li = document.createElement("li");
		li.innerHTML = num;
		ul.insertBefore(li , ul.firstChild);
	}else alert("请输入数字！");
}

function leftoutoperat(){
	if (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}else alert("请输入数字！");
}

function rightinoperat(){
	var num = document.getElementById("inputnum").value.trim();
	if (num) {
		var li = document.createElement("li");
		li.innerHTML = num;
		ul.appendChild(li);
	}else alert("请输入数字！");
}

function rightoutoperat(){
	if (ul.lastChild) {
		ul.removeChild(ul.lastChild);
	}else alert("请输入数字！");
}

function deloperat(e){	
	if (e.target.nodeName == "LI") {
		alert(e.target.innerHTML);
		e.target.parentNode.removeChild(e.target);
	}
}

function init(){
	document.getElementById('leftin').onclick = leftinoperat;	
	document.getElementById('leftout').onclick = leftoutoperat;
	document.getElementById('rightin').onclick = rightinoperat;
	document.getElementById('rightout').onclick = rightoutoperat;
	document.getElementsByTagName("ul")[0].addEventListener("click",function(e){
		deloperat(e);
	},false);
}
init();
