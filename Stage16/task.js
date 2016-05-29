/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
//获取input的value，进行空格去除和正则的筛选，将城市作为属性，空气作为值创造对象，
function addAqiData() { 
  var cityname = document.getElementById("aqi-city-input").value.trim();
  var cityvalue = document.getElementById("aqi-value-input").value.trim();
    if (!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(cityname)) { 
      alert("请输入中英文作为城市名！"); 
      return;
    }   
    if (!/^[0-9]+$/.test(cityvalue)) {
      alert("请输入数字作为空气质量！");
      return;
    } 
  aqiData[cityname] = cityvalue;
}

//设置tr，并利用tr += 和for...in来达到每次新增都循环刷新的效果
function renderAqiList() {
  var tr = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
  for(var cityname in aqiData){	
    tr += "<tr><td>"+cityname+"</td><td>"+aqiData[cityname]+"</td><td><button>删除</button></td></tr>"
  }
  document.getElementById("aqi-table").innerHTML = tr;

}

//删除函数
function delBtnHandle(e) {
  // do sth.
  var nodecity= e.target.parentNode.parentNode.firstChild.innerHTML;
  delete aqiData[nodecity];
  renderAqiList();
}

function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

function init () {
//添加回车事件	
	document.onkeydown=keyListener; 
	function keyListener(e){    
	  if(e.keyCode == 13){   
		addBtnHandle();
	  }   
	}   

// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	document.getElementById("add-btn").addEventListener("click", addBtnHandle);    
// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	var table = document.getElementById("aqi-table");
	table.addEventListener("click",function(e){
	  if (e.target.nodeName === "BUTTON") {
	    delBtnHandle(e);
	  }
	},false);
}

init();
