// var name = "x";
// var age = 16;
// var width = "180kg";
// name = "马猴";
// document.write("姓名：" + name + "<br/>")
// document.write("年龄：" + age + "<br/>")
// document.write("体重：" + width)
window.onload = function(){
	var a = prompt("请输入PS成绩：");
	var b = prompt("请输入html成绩：");
	var c = prompt("请输入js成绩：");
	var d = parseFloat(a)+parseFloat(b)+parseFloat(c);
	var e = d/3;
	var f = parseFloat(b) - parseFloat(c);
	
	document.write("您的PS成绩为："+a+"<br/>");
	document.write("您的html成绩为："+b+"<br/>");
	document.write("您的js成绩为："+c+"<hr><br/>");
	document.write("您的js和html的差："+f+"<br/>")
	document.write("平均分："+e);
}