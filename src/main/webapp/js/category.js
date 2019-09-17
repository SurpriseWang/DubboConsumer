$(document).ready(function() {
	$.ajax({
		url : "http://localhost:8080/DubboConsumer/queryCategorys.action",
		type : "post",
		data : {},
		success : function(returnValue) {
			table = $("#categoryTable tbody");
			$.each(returnValue, function(i, v) {
				$("<tr name = 'tr"+i+"'>").appendTo(table);
				tr = $("tr[name='tr"+i+"']");
				$("<td class = delete style='display: none;'><input name='categoryId' type='checkbox' value="+v.id+"></td>").appendTo(tr);
				let queryPicture=$("<td><button type='button' class='btn' href='javascript:;'>" + v.categoryType + "</button></td>");
				queryPicture.click(function(){
					$.ajax({
						url : "http://localhost:8080/DubboConsumer/queryPicture.action",
						type : "post",
						data : {"categoryId":v.id},
						success : function(breakValue) {
							itemTable=$("#itemPicture");
							itemTable.html("");
							$.each(breakValue, function(i, v) {
								$("<tr name = 'tre"+i+"'>").appendTo(itemTable);
								tr = $("tr[name='tre"+i+"']");
								$("<td><div name='div"+i+"'><img src="+v.src+" href='javascript:;'></div></td>").appendTo(tr);
								let queryItem =$("div[name='div"+i+"']");
								queryItem.click(function (){
									$.ajax({
										url : "http://localhost:8080/DubboConsumer/queryItem.action",
										type : "post",
										data : {"Id":v.id},
										success : function(breakValue1) {
											tableItem = $("#item");
											tablePictures = $("#pictures");
											tableItem.html("");
											tablePictures.html("");
											$.each(breakValue1.pictures, function(i1, v1) {
												$("<img src="+v1.src+"></img>").appendTo(tablePictures);
											});
											$("<tr><td><p>商品名称："+breakValue1.item.itemName+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><p>商品价格："+breakValue1.item.price+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><p>商品单位："+breakValue1.item.unit+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><p>出厂日期："+breakValue1.item.productionDate+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><p>保质期："+breakValue1.item.expiryDate+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><p>生产商："+breakValue1.item.supplier+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><p>商品详情："+breakValue1.item.information+"</p></td></tr>").appendTo(tableItem);
											$("<tr><td><button class='btn' onclick='insertShopingCart("+breakValue1.item.id+")'>添加购物车</button></td></tr>").appendTo(tableItem);
										}
									});
								});
								$("<td><h2>"+v.title+"</h2></td>").appendTo(tr);
								$("</tr>")
							});
						}
					});
				});
				queryPicture.appendTo(tr);
				$("</tr>").appendTo(table);
			})
		}
	});
});
function insertShopingCart(id){
	$.ajax({
		url : "http://localhost:8083/DubboShopingCart/insertItemShopingCart.action",
		type : "GET",
		data : {"id":id},
		dataType : "jsonp",
		success : function(successReturnValue1) {
			alert("是否跳转购物车");
		},
		error : function(errorReturnValue) {
			window.location.href ="Http://localhost:8081/DubboLogin";
		}
	});
};
function robackFunction(returnValue){
	if(returnValue==true){
		alert("添加成功");
	}else{
		alert("添加失败")
	}
}

