//添加"爱好"函数
function addhobbies(e){
	var num = document.getElementById("hobbies").value.trim();
	var a = num.replace(/[^a-zA-Z\d\u4e00-\u9fa5]+/g, " ").split(" ");
	var linodes = this.nextElementSibling.childNodes;
	var li = document.createElement("li");
	if (num) {
		//去重
		for (var i = 0; i < a.length; i++) {
			for (var j = 0; j < linodes.length; j++) {
				if (linodes[j].innerHTML == a[i] ) { 
					alert("输入的爱好有重复！");
					return; 
				}
			}
			//最高10个爱好
			if (linodes.length >= 10) {
				this.nextElementSibling.removeChild(this.nextElementSibling.firstChild);
			}
			li.innerHTML = a[i];
			this.nextElementSibling.appendChild(li);
		}
	}else alert("请输入!");
}
//点击删除函数
function deloperat(e){	
	if (e.target.nodeName == "LI") {
		alert("删除:"+e.target.innerHTML);
		e.target.parentNode.removeChild(e.target);
	}
}
//添加tag函数
function keyListener(e){
	if (e.keyCode == 13) {
		var numtext = this.value.trim();
		var linodes = this.nextElementSibling.childNodes;
		//去重
		if (numtext) {
			for (var i = linodes.length - 1; i >= 0; i--) {
				if (linodes[i].innerHTML == numtext) {
					alert("重复输入！");
					return 0;
				} 
			}
			var li = document.createElement("li");
			li.innerHTML = numtext;
			//最高10个tag
			if (linodes.length >= 10) {
				this.nextElementSibling.removeChild(this.nextElementSibling.firstChild);	
				this.nextElementSibling.appendChild(li);
			}else this.nextElementSibling.appendChild(li);
		}else alert("请输入数字！");
	}
}
//添加删除文字
function textchange(e){
	if (e.target.nodeName == "LI") {
		e.target.innerHTML = "删除"+e.target.innerHTML;
	}
}
//去除删除文字
function textReset(e){
	if (e.target.nodeName == "LI") {
		e.target.innerHTML = e.target.innerHTML.slice(2);
	}	
}

function init(){
	document.getElementById("inputnum").onkeydown = keyListener;
	document.getElementById("inputnum1").onkeydown = keyListener;
	document.getElementById("comfirm").onclick = addhobbies;
	document.getElementsByTagName("ul")[0].addEventListener("click",function(e){
		deloperat(e);
	},false);
	document.getElementsByTagName("ul")[0].addEventListener("mouseover",function(e){
		textchange(e);
	},false);
	document.getElementsByTagName("ul")[0].addEventListener("mouseout",function(e){
		textReset(e);
	},false);
	document.getElementsByTagName("ul")[1].addEventListener("mouseover",function(e){
		textchange(e);
	},false);
	document.getElementsByTagName("ul")[1].addEventListener("mouseout",function(e){
		textReset(e);
	},false);
	document.getElementsByTagName("ul")[1].addEventListener("click",function(e){
		deloperat(e);
	},false);
}
init();
