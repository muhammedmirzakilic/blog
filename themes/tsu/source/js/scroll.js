$(function(){
    var SPACING = 20;
    var $toc = $('._toc');
    
    if($toc.length){
        var minScrollTop = $toc.offset().top - SPACING;
        var tocState = {
            start: {
                'position':'absolute',
                'top':minScrollTop
            },
            process: {
                'position':'fixed',
                'top':SPACING
            }
        }
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();

            if(scrollTop < minScrollTop){
                $toc.css(tocState.start);
            }
            else{
                $toc.css(tocState.process);
            }
        })
        
    }
});
$(window).resize(function(){
    var $toc = $('._toc');
    var minwidth = 1480;
    var $avator = $('#avator');
    var $postswrapper = $('.posts-wrapper');
    if($(window).width()<1480){
        $toc.css("display","none");
    }
    else {
        $toc.css("display","block");
    }
    if($(window).width()<950){
        $avator.css("display","none");
        $postswrapper.css("width","100%");
    }
    else {
        $avator.css("display","block");
        $postswrapper.css("width","73%");

    }
});
$(function(){
    var $toc = $('._toc');
    var minwidth = 1480;
    var $avator = $('#avator');
    var $postswrapper = $('.posts-wrapper');
    if($(window).width<1480){
        $toc.css("display","none");
    }
    if($(window).width()<950){
        $avator.css("display","none");
        $postswrapper.css("width","100%");
    }
});
