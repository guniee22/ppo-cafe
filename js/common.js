$(document).ready(function(){

    

    var winScrollTop;
    $(window).scroll(function(){
        winScrollTop=$(this).scrollTop();
        console.log("스크롤탑"+winScrollTop)
        if(winScrollTop>200){
            //addclass
            console.log("헤더추가")
            $("header").addClass("header-fixed");
        }else{
            //removeclass
            $("header").removeClass("header-fixed");
            console.log("헤더제거")
        }
    });


    var myAgent=navigator.userAgent.toLowerCase();
    var mobile=["iphone","ipod","android","blackberry","window ce","nokia","webos","opera mine","sonyericsson","opera mobi","iemobile"];
    console.log("운영체제 확인 : "+myAgent) 
    for(i=0; i<mobile.length; i++){
        if(myAgent.indexOf(mobile[i])>=0){ 
            var bool=true; 
            break; 
        }
        
    }
    console.log("운영체제 값 "+myAgent.indexOf());
    if(bool){
        // window.open("mobile.html","_self");
        mo(); 
    }else{
        // window.open("pc.html","_self");
        pc();
    }
    
     
    
});