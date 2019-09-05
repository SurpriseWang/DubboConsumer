$(document).ready(function() {
	// ajax动态获取用户
	$("button[name='adminlogin']").click(function() {
		$.ajax({
			url : "./queryLoginAdmin.action",
			type : "post",
			data : {"adminname":$("input[name='adminname']").val(),"password":$("input[name='adminpassword']").val()},
			success : function(breakValue) {
				if(breakValue){
					window.location.href ="./view/html/adminhomespaces.html";
				}else{
					$("h2[id='error2']").html("用户名或密码错误");
				};
			}
		});
	});	
});