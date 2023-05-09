$(document).ready(function(){ // 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라는 의미
	let height =  $(".notice").height(); // 50px
	let num = $(".rolling li").length; // 4
	let max = height * num; // 250
	let move = 0; // 초기값
	function noticeRolling(){
		move += height; // move = move + height
		$(".rolling").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,2000);
	$(".rolling").append($(".rolling li").first().clone());
});	

$(document).ready(function(){ // 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라는 의미
	let height =  $(".tablet-notice").height(); // 80px
	let num = $(".tablet-rolling li").length; // 4
	let max = height * num; // 320
	let move = 0; // 초기값
	function noticeRolling(){
		move += height; // move = move + height
		$(".tablet-rolling").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};
	noticeRollingOff = setInterval(noticeRolling,2000);
	$(".tablet-rolling").append($(".tablet-rolling li").first().clone());
});