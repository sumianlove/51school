$(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });
})

$(function() {
    // 自动播放
    var timer=setInterval(function(){
         $(".autoplay").fadeIn(500);
    },50000);
   // 自动播放的关闭
   $(".closeAuto").click(function(){
         clearInterval(timer);
         $(".autoplay").fadeOut(500);
   });

    //侧边栏特效

    var times = 1;
    $("#setting").click(function() {
        //侧边栏展开
        if (times == 1) {
            $(".aside").animate({
                "right": "0"
            }, 500);
            $(".slide_left").animate({
                "right": "2.5rem"
            }, 500);
            $(".footer .nav").animate({
                "margin-left": "-=2.5rem"
            }, 500);
            $("#setting").attr("src", "images/ico_btn2.png");
            $("#setting").bind('touchmove', function(event) {
                event.preventDefault();
            });
            times = 2;
        }
        //侧边栏收缩
        else if (times == 2) {
            $(".aside").animate({
                "right": "-2.5rem"
            }, 500);
            $(".slide_left").animate({
                "right": "0"
            }, 500);
            $(".footer .nav").animate({
                "margin-left": "+=2.5rem"
            }, 500);
            $("#setting").attr("src", "images/ico_btn2_hov.png");
            times = 1;
        }
    });

    //热门留学院校地区切换
    //1.页面加载时自动显示第一个
    $("#first-place").css("color", "#fe4d37");
    for (var i = 0; i <= 4; i++) {
        $("li:contains('地区')").eq(i).click(function() {
            $(".pl").eq(1).show();
        });
    }
    //2.切换
    // 通过查找 .too 下的li 元素 遍历 循环
    $(".foo .slide:gt(0)").hide();
    $(".school .place-ul").find("li").each(function(index) {
        // $(this) 当前选中的元素 鼠标移动
        $(this).click(function() {
            // $(this) 当前选中的元素 增加 on 样式 ，但是 其同胞元素 移除 on 样式
            //$(this).addClass("on").siblings().removeClass("on");
            $(".school  .place-ul").find("li").removeClass("first-place").eq(index).addClass("on");

            // .slide 通过 eq(index) 选择器 来显示隐藏
            $(".foo .slide").hide().eq(index).show();
        })
    })
    // 3.点击加载更多
    var mm=1;
    // 一开始最后一个隐藏
    $(".show").addClass("none");
    // 点击加载显示
    $(".clickMore").click(function(){
        if(mm==1){
             $(".show").removeClass("none");
             $(this).html("点击收起");
             mm=2;
             
        }else if(mm==2){
            $(".show").addClass("none");
            $(this).html("点击加载更多");
            mm=1;
        }
        
    });

    //优选留学方案下拉
    var mark2=1;
    $(".project-title").click(function() {
    	if(mark2==1){
	        $(".project-down").css("display","block");
	        mark2=2;
	    }else if(mark2=2){
	    	$(".project-down").css("display","none");
	    	mark2=1;
	    }

    });

    // 优选留学方案之加载更多
    var n=1;
    $(".show2").addClass("none");
    // 点击加载显示
    $(".loadmore").click(function(){
        if(n==1){
             $(".show2").removeClass("none");
             $(this).html("点击收起");
             n=2;
             
        }else if(n==2){
            $(".show2").addClass("none");
            $(this).html("点击加载更多");
            n=1;
        }
        
    });

    // 头条上翻
    function autoPlay() {
        $(".news li:first").animate({
            "margin-top": "-0.4rem"
        }, 1000, function() {
            $(this).css("margin-top", 0).appendTo(".headnews_up");
        })
    }
    var timer = setInterval(autoPlay, 1000);

    // //去除定时器
    $(".news li").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(autoPlay, 1000);
    })

    // 指纹点击
	var mark=1;
	$(".fg").click(function(){
		if(mark==1){
			$(".fg-img1").animate({
				"left":"1.13rem"
			},1000);
			$(".fg-img2").animate({
				"left":"2.13rem"
			},800);
			$(".fg-img3").animate({
				"left":"3.13rem"
			},600);
			$(".fg-img4").animate({
				"left":"4.13rem"
			},400);
			$(".fg-img5").animate({
				"left":"5.13rem"
			},200);
			mark=2;
		}else if(mark==2){
			$(".fg-img1").animate({
				"left":"0.13rem"
			},200);
			$(".fg-img2").animate({
				"left":"0.13rem"
			},400);
			$(".fg-img3").animate({
				"left":"0.13rem"
			},600);
			$(".fg-img4").animate({
				"left":"0.13rem"
			},800);
			$(".fg-img5").animate({
				"left":"0.13rem"
			},1000);
            mark=1;
		}
	});
    // 点击返回最顶层
     $(window).scroll(function(event) {
        $(window).scrollTop() > 200 ? $(".fg-img5").show() : $(".foot").hide();
    });
    $(".fg-img5").click(function(event) {
        $("html,body").animate({ "scrollTop": 0 }, 500);
    });

    // 底部导航的hover
    $(".footer .nav-ul li").hover(function() {
        $(this).css("color","#fe3c24");
    }, function() {
        $(this).css("color","#adadad");
    })
	
});


