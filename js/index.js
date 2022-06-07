$(function(){
    $(window).scroll(function(){
        var $slider_top=$(".slider-container").offset().top;
        console.log("슬라이더높이"+$slider_top);
        var $box_wrap=$(".box-wrap").offset().top;  
        console.log("박스높이"+$box_wrap);
        var winScrollTop=$(window).scrollTop();
        console.log("스크롤탑"+winScrollTop);
        if(winScrollTop+$(window).height() > $slider_top){
            $(".slider-container").addClass("ani");
        }
        
        if(winScrollTop+$(window).height()/2+100 > $box_wrap){
            console.log("박스의 탑을 찾음")
            $(".box1").addClass("box1-ani");
            $(".box2").addClass("box2-ani");
            $(".box3").addClass("box3-ani");
        }
    })

    var $width=0;
    var $length=$(".slide").length;
    var $value=1;
    

    function ini(){
        $width=$(".slider-container").width();
        console.log($width);
        slide_width=parseInt($width/$value);
        console.log(slide_width);
        $(".slide").css({
            width:slide_width
        });
        $(".slides").css({
            width:slide_width*$length,
            background:"white",  
        });
        
    }
    ini();

    function nextMove(){
        $(".slides").stop().animate({
            left:-slide_width
        },function(){
                $(this).append("<div class='slide'>"+$(this).find(".slide:first").html()+"</div>");
                $(this).find(".slide:first").remove();
                $(this).find(".slide").css({width:slide_width});
                $(this).css({left:0});
            });  
    };

    function prevMove(){
        $(".slides").css({left:-slide_width});
        $(".slides").prepend("<div class='slide'>"+$(".slides").find(".slide:last").html()+"</div>");
        $(".slides").find(".slide:last").remove();
        $(".slides").find(".slide:first").css({width:slide_width});
        $(".slides").animate({left:0});    
    }  
    
    $(window).resize(function(){
        ini();
    });
    
    var count=0;
    $(".next").click(function(){
        nextMove();   
    });

    $(".prev").click(function(){
        prevMove();
        
    });

    function autoPlay(){
        auto=setInterval(function(){
            nextMove();
        },10000);
    };

    autoPlay();

    $(".slides").mouseenter(function(){
        clearInterval(auto);
    });
    $(".slides").mouseleave(function(){
        autoPlay();
    });


    $(".more").click(function(){
        $(".more-content").slideToggle().css({
            display:"flex",
        })
    });

    $(".box2-wrap a").click(function(){
       $(".text-box").hide();
       $(this.hash).show();
       return false;
    });
});