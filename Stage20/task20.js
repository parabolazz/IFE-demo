

var ul = document.getElementsByTagName('ul')[0];

function leftinoperat(){
	var num = document.getElementById("inputnum").value.trim();
	var a = num.replace(/[^a-zA-Z\d\u4e00-\u9fa5]+/g, " ").split(" ");
	if (num) {
		for (var i = a.length - 1; i >= 0; i--) {
			var li = document.createElement("li");
			li.innerHTML = a[i];
			ul.insertBefore(li, ul.firstChild);
		}
	}
	else alert("请输入!");

}

function leftoutoperat(){
	if (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}else alert("请输入数字！");
}

function rightinoperat(){
	var num = document.getElementById("inputnum").value.trim();
	var a = num.replace(/[^a-zA-Z\d\u4e00-\u9fa5]+/g, " ").split(" ");
	if (num) {
		for (var i = a.length - 1; i >= 0; i--) {
			var li = document.createElement("li");
			li.innerHTML = a[i];
			ul.appendChild(li);
		}
	}else alert("请输入!");
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

function fuzzymatch(){
	var check = document.getElementById("checkbox").value;
	var a = [];			
	var b = [];
	if (check !== "") {
		for (var i = ul.childNodes.length - 1; i >= 0; i--) {	
			a[i] = ul.childNodes[i].innerHTML;
			if(a[i].match(check)){
				b[i] = a[i].match(check);
				ul.childNodes[i].style.background = "#00E676";
			}
		}if (!b.length) {alert("查不到内容");}

	}else alert("请输入想要查询的内容！");
}

function init(){
	document.getElementById('leftin').onclick = leftinoperat;	
	document.getElementById('leftout').onclick = leftoutoperat;
	document.getElementById('rightin').onclick = rightinoperat;
	document.getElementById('rightout').onclick = rightoutoperat;
	document.getElementById("check").onclick = fuzzymatch;
	document.getElementsByTagName("ul")[0].addEventListener("click",function(e){
		deloperat(e);
	},false);
}
init();
