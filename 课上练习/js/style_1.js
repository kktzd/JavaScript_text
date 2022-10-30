window.onload=function(){
	//折扣
	var price = parseFloat(prompt("你想打多少折："))
	
	//门店价格
	var u_fishing = 198;
	var arirang = 168;
	var barbecue = 128;
	
	//打折后
	var a_price = u_fishing * price;
	var b_price = arirang * price;
	var c_price = barbecue * price;
	
	//输出
	document.write("海底捞火锅折后价是否低于100元？");
	document.write(a_price < 100);
	document.write( "<br/>")
	
	document.write("阿里郎烤肉折后价是否低于100元？");
	document.write(b_price < 100);
	document.write( "<br/>")
	
	document.write("猪肚鸡火锅折后价是否低于100元？");
	document.write(c_price < 100);
}