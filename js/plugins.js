$(document).ready(function(){
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
      interval: 2000
    });
    
    var x = 0;
    //Show the Color Option
    $(".gear-check").click(function(){
        $(".color-option").fadeToggle();
        if(x == 1){
            $(".body").css("opacity",1);
            x = 0;
        } else {
            $(".body").css("opacity",0.5);
            x = 1;
        }
        
    });
    $(".body").click(function(){
        $(".color-option").fadeOut();
        $(".body").css("opacity",1);
        x = 0;
    });
    
    //Change theme Color
    
    var colorLi = $(".color-option ul li");
    
    colorLi
        .eq(0).css("backgroundColor","#F25454").end()
        .eq(1).css("backgroundColor","#D6D448").end()
        .eq(2).css("backgroundColor","#4BBF45").end()
        .eq(3).css("backgroundColor","#6765BF").end()
        .eq(4).css("backgroundColor","#BF65A2");
    
    colorLi.click(function(){
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    
    // Scrolling
    var scrollBtn = $("#scroll-top");
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() >= 700){
            scrollBtn.css("display","block");
        } else {
            scrollBtn.css("display","none");
        }
    });
    
    scrollBtn.click(function(){
        $("html, body").animate( {scrollTop: 0}, 600);
    });
    
});


//Loading Section

$(window).load(function(){
   
    
    $(".loading-overlay .spinner").fadeOut(2000, function(){
        $(this).parent().fadeOut(1000,function(){
            $(this).remove();
        });
    });
    
    
});