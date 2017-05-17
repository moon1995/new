// JavaScript Document
$(function(){
	var cur=0;
	var img=$("img");
	var span=$("span");
	img.eq(0).fadeIn();
	play();
	var auto;
	span.hover(function(){
		 clearTimeout(auto);
		$(this).addClass("sel").siblings().removeClass("sel");
		var index=$(this).index();
		img.eq(index).fadeIn(400).siblings().hide();
			},function(){
				var index=$(this).index()+1;
				cur=index;
				
				 auto = setTimeout(play,3000);
				
				});
		function play(){
			span.eq(cur).addClass("sel").siblings().removeClass("sel");
			img.eq(cur).fadeIn(400).siblings().hide();
			cur++;
			    cur = cur >= span.length ? 0:cur;		//true则执行冒号前的语句，flase则执行冒号后的语句
                auto = setTimeout(play,3000);
			};
			$(".right").click(function(){
				clearTimeout(auto);
			
		
				span.eq(cur).addClass("sel").siblings().removeClass("sel");
			img.eq(cur).fadeIn(400).siblings().hide();
			cur++;
			    cur = cur >= span.length ? 0:cur;		
              auto = setTimeout(play,1000);
			   });
			   $(".left").click(function(){
				clearTimeout(auto);
				cur--;
 				cur = cur <= 0 ? 4:cur;
 	
				span.eq(cur-1).addClass("sel").siblings().removeClass("sel");
			img.eq(cur-1).fadeIn(400).siblings().hide();
              auto = setTimeout(play,3000);
			   });
				});