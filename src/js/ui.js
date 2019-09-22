// UI 테스트용 스크립트

$(function () {
    // 슬라이드 컨트롤러 제어
    $('.slide_ctrl li a').on('click', function () {
        $(this).closest('.slide_ctrl').children('li').removeClass('on');
        $(this).parent().addClass('on');
    });

    // 배너 닫기
    $('.banner_wrap .ctrl button').on('click', function () {
        $(this).closest('.banner_wrap').addClass('on');
    });

    // 셀렉트박스 제어
    $('.select_form button').on('click', function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');
        }
    });
    $('.select_form ul li a').on('click', function () {
        $(this).closest('ul').siblings('button').html($(this).text());
        $(this).closest('ul').siblings('button').removeClass('on');
    });

    // QnA 제어
    $('.qna dt a').on('click', function () {
        if ($(this).parent().hasClass('on')) {
            $(this).parent().removeClass('on');
        } else {
            $(this).parent().siblings('dt').removeClass('on');
            $(this).parent().addClass('on');
        }
    });

    // 헤더 검색창 제어
    $('.top_menu .search_wrap .search').on('click', function () {
        $(this).parents('.search_wrap').addClass('on');
    });
    $('.top_menu .search_wrap button').on('click', function () {
        var txt = $(this).siblings('input[type="text"]').val();
        if (txt === '') {
            $(this).parents('.search_wrap').removeClass('on');
        } else {
            alert(txt + ' 검색')
        }
    });

    // 파일업로드 제어
    var filename = "";
    $(".upload").on('change', 'input[type=file]', function () {
        if (window.FileReader) {
            filename = $(this)[0].files[0].name;
        } else {
            filename = $(this).val().split('/').pop().split('\\').pop();
        };
        $(this).siblings('.upload_name').text(filename);
    });

    // 모바일 네비게이션 제어
    $('.mobile_nav .wrap > ul > li > a').on('click', function () {
        if ($(this).hasClass('active')) {
            $('.mobile_nav .wrap > ul > li > a').removeClass('active');
        } else {
            $('.mobile_nav .wrap > ul > li > a').removeClass('active');
            $(this).addClass('active');
        }
    });
    $('button.m_menu').on('click', function () {
        open_nav();
    });
    $('.mobile_nav .wrap .close').on('click', function () {
        close_nav();
    });
    function open_nav() {
        $('.mobile_nav').addClass('active');
        $('html').addClass('fixed');
    }
    function close_nav() {
        $('.mobile_nav').removeClass('active');
        $('.mobile_nav .wrap > ul > li > a').removeClass('active');
        $('html').removeClass('fixed');
    }

    // 모바일 검색창 제어
    $('button.m_search').on('click', function () {
        $('.m_search_form').addClass('active');
    });
    $('.m_search_form .search_close').on('click', function () {
        $('.m_search_form').removeClass('active');
    });

    // 모달 닫기
    $('.modal .close').on('click', function () {
        var movie = $(this).siblings('.video_wrap').children('iframe');
        movie.attr('src', movie.attr('src'));
        $('.modal_wrap').hide();
        $('html').removeClass('fixed');
    });

    //투명경영센터 제보내용보기
    $('.accuse_result .tit_line .show').on('click', function () {
        $(this).parent().next('.accuse_cont').show();
    });

    //연혁 슬라이드 제어
    (history_control = function(val){
        $('.jumbotron li').removeClass('active left right');
        var onslide = $('.jumbotron li:eq('+val+')');
        onslide.addClass('active');
        onslide.prevAll('li').addClass('left');
        onslide.nextAll('li').addClass('right');
    })(2); //한독 3.0 활성
    $('.jumbotron a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        history_control(idx);
    });

});

// 모달 열기
function open_modal(val) {
    console.log(val);
    $(val).show();
    $('html').addClass('fixed');
}
