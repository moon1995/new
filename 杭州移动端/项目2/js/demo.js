$(function(){
	//底部菜单
	$('.setting').click(function() {
		docHeis();
		$('.large_bg').slideToggle(0);
		$('.bottom_list_box').slideToggle(400);
	});
	$('.large_bg').click(function(){
		$('.large_bg').hide(0);
		$('.bottom_list_box').slideUp(400);
	})
		
})