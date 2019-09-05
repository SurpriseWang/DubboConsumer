$(function(){
	$.ajax({
		url : "http://localhost:8080/DubboConsumer/queryAllBanner.action",
		type : "post",
		data : {},
		success : function(returnValue) {
			indicators = $(".carousel-indicators");
			inner=$(".carousel-inner");
			$.each(returnValue, function(i, v) {
				$("<li data-target='#myCarousel' data-slide-to="+i+"></li>").appendTo(indicators);
				if(i==0){
					$("<div class='item active' id="+i+">").appendTo(inner);
					innerDiv=$(".carousel-inner #"+i+"");
					$("<img src='"+v.bannerUrl+"'> alt='First slide'").appendTo(innerDiv);
					$("<div class='carousel-caption'>"+v.bannerName+"</div>").appendTo(innerDiv);
					$("</div>").appendTo(inner);
				};
				if(i!=0){
					$("<div class='item'id="+i+">").appendTo(inner);
					innerDiv=$(".carousel-inner #"+i+"");
					$("<img src='"+v.bannerUrl+"'> alt='First slide'").appendTo(innerDiv);
					$("<div class='carousel-caption'>"+v.bannerName+"</div>").appendTo(innerDiv);
					$("</div>").appendTo(inner);
				};
			})
		}
	});
})
$(document).ready(function() {
});
