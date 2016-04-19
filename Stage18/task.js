
var aqiData = [];
var ul = document.getElementsByTagName('ul')[0];

function leftinoperat(){
	var num = document.getElementById("inputnum").value.trim();
	ul.innerHTML = " ";
	if (num) {
		aqiData.unshift(num);
		for (var i = 0; i <= aqiData.length - 1; i++) {
			ul.innerHTML += "<li>"+aqiData[i]+"</li>";
		}
	}else alert("请输入数字！");
}

function leftoutoperat(){
	var num = document.getElementById("inputnum").value.trim();
	ul.innerHTML = " ";
	if (num) {
		aqiData.shift(num);
		for (var i = 0; i <= aqiData.length - 1; i++) {
			ul.innerHTML += "<li>"+aqiData[i]+"</li>";
		}
	}
}

function rightinoperat(){
	var num = document.getElementById("inputnum").value.trim();
	if (num) {
		aqiData.push(num);
		ul.innerHTML += "<li>"+num+"</li>";
	}else alert("请输入数字！");
}

function rightoutoperat(){
	var num = document.getElementById("inputnum").value.trim();
	ul.innerHTML = " ";
	if (num) {
		aqiData.pop(num);
		for (var i = 0; i <= aqiData.length - 1; i++) {
			ul.innerHTML += "<li>"+aqiData[i]+"</li>";
		}
	}
}

function deloperat(e){
	alert(e.target.innerHTML);	
	ul.innerHTML = " ";	
	for (var i = 0; i <= aqiData.length - 1; i++) {
		if (e.target.innerHTML == aqiData[i]) {
			aqiData.splice(i,1);
		}				
	}
	for (var i = 0; i <= aqiData.length - 1; i++) {
		ul.innerHTML += "<li>"+aqiData[i]+"</li>";
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
