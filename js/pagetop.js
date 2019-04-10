$(function(){
  var topBtn = $('#pagetop');
  topBtn.hide();
  //スクロールが100に達したらボタンを表示
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
       topBtn.fadeIn();
    } else {
       topBtn.fadeOut();
    }
  });
  //スクロールしてトップへ
　topBtn.click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
});
