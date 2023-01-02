$(function(){
  $(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('#top_btn').fadeIn();
    }else { 
        $('#top_btn').fadeOut();
    }
  });
  $('#top_btn').click(function(){
    $('html, body').animate({scrollTop:0},300);
    return false;
  });
});
function open_menu() {
    document.getElementById("left_div").style.display = "block";
    document.getElementById("close_btn").style.display = "block";
    document.getElementById("left_menu").style.display = "block";
    
}
function close_menu() {
    document.getElementById("left_div").style.display = "none";
    document.getElementById("close_btn").style.display = "none";
    document.getElementById("left_menu").style.display = "none;";
}
function go(v){
  var url = "./"+v+".html";
  location.href=url;
}

$(document).ready(function() {
    var is_mobile = false;
    if($('#bar').css('display')=="none")
        is_mobile = true;
    var menu_offset = $('#left_div').offset();
    var left_div_height = eval($('#top_banner').height() + $('#mobile_btn').height());
    if(is_mobile){
        $('#left_div').css('position','absolute').css('top',left_div_height+'px');
    }else{
        left_div_height = 50;
    }
        
    $(window).scroll(function() {    
        if(is_mobile){
          if ($(document).scrollTop() > menu_offset.top) {
              $('#left_div').css('position','fixed').css('top',left_div_height+'px');
          }else {
            $('#left_div').css('position','absolute').css('top',left_div_height+'px');
          }
          if ($(document).scrollTop() > menu_offset.top) {
              $('#mo_bar').css('position','fixed').css('top','0px');
              $('#mobile_btn').css('position','fixed').css('top','0px');
              $('#left_div').css('top',$('#mobile_btn').height()+'px');
          }else {
            $('#mo_bar').css('position','absolute').css('top','');
            $('#mobile_btn').css('position','absolute').css('top','');
          }
        }else{
            if ($(document).scrollTop() > menu_offset.top) {
              $('#left_div').css('position','fixed').css('top',left_div_height+'px');
          }else {
            $('#left_div').css('position','absolute').css('top','');
          }
            if ($(document).scrollTop() > menu_offset.top-50) {
                $('#bar').css('position','fixed').css('top','0px');          
            }else {
                $('#bar').css('position','absolute').css('top','');
            }
        }
      
    });
});
(function (global, $) {
    var $menu = $('.menu'), 
        $contents = $('.content_menu'), 
        $doc = $('html, body'); 
    $(function () { 
        // 해당 섹션으로 스크롤 이동 
        $menu.on('click', function(e){ 
            var $target = $(this).parent(), 
                idx = $target.index(), 
                section = $contents.eq(idx), 
                offsetTop = section.offset().top; 
            $doc.stop() 
                .animate({ 
                scrollTop :offsetTop 
            }, 800);
            return false; 
        }); 
    }); 
    
    // menu class 추가 
    $(window).scroll(function(){ 
        var scltop = $(window).scrollTop(); 
        $.each($contents, function(idx, item){ 
            var $target = $contents.eq(idx), 
                i = $target.index(), 
                targetTop = $target.offset().top; 
            
            if (targetTop <= scltop+20) { 
                $menu.removeClass('menu_active_h2');
                $menu.eq(idx).removeClass('menu_h2');
                $menu.eq(idx).addClass('menu_active_h2');
            } 
            if (!(0 <= scltop)) { 
                $menu.removeClass('menu_active_h2'); 
            }
        }) 
    }); 
}(window, window.jQuery));
