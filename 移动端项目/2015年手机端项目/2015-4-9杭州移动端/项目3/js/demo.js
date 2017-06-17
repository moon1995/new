$(function(){
			//left nav
			$('.classify_box p').on('click',navBtn);
				function navBtn(){
					var feilei = $('.classify_box p').html();
					if(feilei == '分类列表'){
						$('.classify_box p').html('关闭');
					}else{
						$('.classify_box p').html('分类列表');
					}
					$('.nav_list_leftBox01').slideToggle(0);
					$('.header_box').toggleClass('header_boxAdd');
					$('.hideList').slideToggle(0);
					$('h5.fl_list').toggleClass('fl_list_add');
				}

			$('.yuyue_btn a').click(function(){
					$('.yuyue_button').slideToggle(0)
			});
			// $('.hideList').on('click',navBtn);
				

			$('.nav_list li').eq(0).find('a').addClass('nav_list_add');
			$('.nav_list li').click(function() {
				$(this).find('a').addClass('nav_list_add').end().siblings('li').find('a').removeClass('nav_list_add');
			});

			//加减个数
			$('.add_bg').bind('click',addBtn);

				function addBtn() {

					$(this).find('.rank').css('background','#B82923');
					$(this).find('.rank_ver').css('background','#B82923');
					$(this).siblings().show(0);
					var count = $(this).siblings('.count').text();
					var newCount = ++count;
					$(this).siblings('.count').text(newCount);
					goodCount();

					event.stopPropagation(); 
				};

				//总个数的计算
				function goodCount(){
					var newCou = 0;
					$('.count').each(function() {
						var goodcou = $(this).text();
						newCou += parseInt(goodcou);
					});
					$('.zongjia').text(newCou);
				}
				


			$('.cut_bg').on('click',cutBtn);

				function cutBtn(){
					var count = $(this).siblings('.count').text();
					var newCount = --count;
					$(this).siblings('.count').text(newCount);
					if(newCount<=0){
						$(this).siblings('.count').hide(0);
						$(this).hide(0);
						$(this).siblings('.add_bg').find('.rank').css('background','#a8a8a8');
						$(this).siblings('.add_bg').find('.rank_ver').css('background','#a8a8a8');
					}
					goodCount();
					event.stopPropagation(); 
				};


			//详情图片
			$('.content_list li').on('click',imgShow);

				function imgShow(){
					$('.big_bg').show(0);
					var imgIndex = $(this).index()+1;
					$('.img_src').attr({'src':'images/goods'+imgIndex+'.png'});
					$('.hidden').val(imgIndex);
					var imgText = $(this).find('.img_biaoti').html();
					$('h2.img_tit').html(imgText);
					var imgMon = $(this).find('.goods_mon').html();
					$('.danjia').html(imgMon);
				}
			//关闭详情图片
			$('.close_btn').on('click',imgHide);

				function imgHide(){
					$('.big_bg').hide(0);
				}
			//确认下单
			$('.dj_button').on('click',dingDan);

				function dingDan(){					
					$(this).hide(0).siblings('.shop_car').show(0);
				}
			//个数的加减
			$('.add_bg02').on('click',addBtn02);

				function addBtn02() {
					var count = $(this).siblings('.count02').text();
					var newCount = ++count;
					$(this).siblings('.count02').text(newCount);

				};

			$('.cut_bg02').on('click',cutBtn02);

				function cutBtn02(){
					var count = $(this).siblings('.count02').text();
					var newCount = --count;
					$(this).siblings('.count02').text(newCount);
					if(newCount<=0){
						$('.shop_car').hide(0).siblings('.dj_button').show(0);
					};

				};
						
				//修改外面的数量	
				function change(){
					var liIndex = $('.hidden').val()-1;
					var goods_shu = parseInt($('.count02').html());
					//$('.content_list li').eq(liIndex).find('.count').text(goods_shu);
				}

		
})