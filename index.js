$(function() {
	$('.home-btn').fadeIn(1500);

	$('.nav-btn').click(function(){
		$('nav ul').animate({width:'show'});
		$('nav ul li span').show();
		$('nav').fadeIn();
	});

	$('nav').click(function(){
		$('nav ul').animate({width:'hide'});
		$('nav ul li span').hide();
		$('nav').fadeOut();
	});
	$('.second').hide();

	$('.second-item').click(function(){
		$('.first').hide();
		$('.second').show();
	});
	$('.first-item').click(function(){
		$('.second').hide();
		$('.first').show();
	});
	$('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 5000,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
		arrows: false,//左右の矢印あり
		dots: false,//下部ドットナビゲーションの表示
        pauseOnFocus: true,//フォーカスで一時停止を無効
        pauseOnHover: true,//マウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});
});