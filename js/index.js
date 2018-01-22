/* 下载客户端 */
$(".top-bar li").hover(function(){
    $(this).css("backgroundColor","#fff");
    $(this).css("color","#f90");
    $(this).children(".show-client").show();
},function(){
    $(this).children(".show-client").hide();
    $(this).css("backgroundColor","transparent");
    $(this).css("color","#000");
})
$(".switch-btn").click(function(){
    $(".v2").show(3000,function(){
        $("product").addClass("animated animated-right");
    })
    $(".v1").hide();

})

/* 点切换背景图片 （营销工具）*/
$(".tools").hover(function(){
    $(this).children(".icon").addClass("change-bg");
    $(this).children(".wise-more").css("color","#f60");
    $(this).children(".wise-more").css("border","1px solid #f60");
    $(this).css("cursor","pointer");
},function(){
    $(this).children(".icon").removeClass("change-bg");
    $(this).children(".wise-more").css("color","#25a3dd");
    $(this).children(".wise-more").css("border","1px solid #25a3dd");
    $(this).css("cursor","default");
})

/* banner轮播  */
setInterval("myInterval()",1000);//1000为1秒钟
function myInterval()
{

}

/* 获奖荣誉 */
/*$(".ch-content a").mouseover(function(){
    $(this).find("img").css("width","120px");
    $(".time").css("font-size","16px");
});*/
/*
$("p").mouseout(function(){
    $("p").css("background-color","#E9E9E4");
});*/
