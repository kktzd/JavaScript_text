window.onload = function(){
	
	//本金
	var principal = prompt("本金为：");
	document.write("本金为：" + principal + "<br/>");
	
	//存取一年
	var aYear = 0.0218;
	var aliXi = parseFloat(principal) * parseFloat(aYear);
	var abenXi = parseFloat(principal) + (parseFloat(aliXi) * 1);
	document.write("存一年后的本息为：" + abenXi + "<br/>");

	//存取二年
	var twoYear = 0.0305;
	var bliXi = parseFloat(principal) * (parseFloat(twoYear) * 2);
	var bbenXi = parseFloat(principal) + parseFloat(bliXi);
	document.write("存两后年的本息为：" + bbenXi + "<br/>");
	
	//存取三年
	var triYear = 0.0399;
	var cliXi = parseFloat(principal) * (parseFloat(triYear) *3);
	var cbenXi = parseFloat(principal) + parseFloat(cliXi);
	document.write("存两后年的本息为：" + cbenXi + "<br/>");
	//输出
	
	
	
}