function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }


if(window.screen.width > 992){
    document.querySelectorAll('.el-mob-flex').forEach(e => e.remove());
    document.querySelectorAll('.el-mob-block').forEach(e => e.remove());
}
else {
    document.querySelectorAll('.el-desc').forEach(e => e.remove());
}
if(document.querySelector('.factors') && window.screen.width > 992 ) {

    factorsProgress(1);

    function opencard(id){
        var el = document.getElementById('factors-card-'+id);
        var btn = document.getElementById('factors-btn-'+id);

        if(el.hidden){
            document.querySelectorAll('.factors-btn').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.factors-card-desk').forEach(item => item.hidden = true);
            btn.classList.add('active');
            factorsProgress(id);
            el.hidden = false;
        }
        
    }

    function clickcard(id){
        var el = document.getElementById('factors-card-'+id);
        var btn = document.getElementById('factors-btn-'+id);

        function factorsProgress() { }

        if(el.hidden){
            document.querySelectorAll('.factors-btn').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.factors-card-desk').forEach(item => item.hidden = true);
            btn.classList.add('active');
            el.hidden = false;
        }
        
    }

    function factorsProgress(id){
        var time = setInterval(start,75);
        var btns = document.getElementsByClassName('factors-btn').length;
        var elem = document.querySelector(".factors-btn.active .factors-btn-progress");
        var width = 20;

        function start() {        
            if (width > 100) {
                if (id < btns) {
                    id = id + 1;
                    clearInterval(time);
                    opencard(id);
                }
                else {
                    clearInterval(time);
                } 
            } else {  
                elem.style.width = width + '%'; 
                width++;
            }
        }
        function stop() {

        }

    }
}

if ($(document).width() > 1175) {
    $('.section').addClass('will-animate');
}
$('.heading').addClass('will-animate');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(window).resize(function() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
document.addEventListener('DOMContentLoaded', function () {
    
    window.addEventListener('load', function () {
        document.querySelector('body').classList.add('loaded');
    });
    
    // Ролик в шапке
    $('.marketing-video .list-lang > a').on('click',function () {
        let el = $('.marketing-video');
        let lang = $(this).data('lang');
        let video = $(this).data('video_key');
        let copy = el.find('.block-copy .link > a');

        $('.marketing-video .list-lang > a').removeClass('active');
        $(this).addClass('active');

        el.find('[data-video_lang]').removeClass('active').addClass('noactive');
        el.find('[data-video_lang="' + lang + '"]').removeClass('noactive').addClass('active');

        copy.html('https://youtu.be/' + video);
    });
    $('.marketing-video .block-copy .copy').on('click',function () {
        window.copyText($('.marketing-video .block-copy .link > a').text())
    });
    $('.marketing-video .block-copy .link > a').on('click',function (e) {
        window.copyText($(this).text())
        e.preventDefault();
        return false;
    });



    $('.marketing-video__button').on('click',function () {

        $('.modal-content').html('<div data-video_lang="ru" class="video-container active"><iframe width="90%" src="https://www.youtube.com/embed/z2IGoJadgEs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="en" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/OjT0I6ofM-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="es" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/GtSclA9xSYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="fr" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/uId6K_Lq3AY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="pt" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/P0NIMx8xFB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="hi" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/mtL02KGJgGI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="be" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/MlcLd7ocLo8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="az" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/re__JvZvZdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div><div data-video_lang="id" class="video-container "><iframe width="90%" src="https://www.youtube.com/embed/k7rbelZabIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div>');

        // Init modal
        $.fancybox.open(
            $('#marketing-video'), {
                touch: false,
                mobile: {
                    touch: {
                        vertical: true,
                        momentum: true
                    }
                }
            }
        );
    });

    $('.header_link__soon').on('click',function () {

        $.fancybox.open(
            $('#coming-soon-modal'), {
                touch: false,
                mobile: {
                    touch: {
                        vertical: true,
                        momentum: true
                    }
                }
            }
        );
    });

    $('.modal-bg-close').on('click',function(){
        $("body").css({'overflow-y':'visible'});
    });

    $('#modal-disclaimer .modal-bg-close').on('click',function(){
        setTimeout(() => {
            $('iframe#launcher').show();
        }, 500);
    });

    $('.registr-button').on('click', function () {
        $('iframe#launcher').hide();
        $.fancybox.open(
            $('#registr-modal'), {
                touch: false,
                mobile: {
                    touch: {
                        vertical: true,
                        momentum: true
                    }
                },
               
            }
        );
    });

    $('.login-button').on('click', function () {
        $('iframe#launcher').hide();
        $.fancybox.open(
            $('#login-modal'), {
                touch: false,
                mobile: {
                    touch: {
                        vertical: true,
                        momentum: true
                    }
                },
               
            }
        );
    });
    
    // accordion
    if (document.querySelector('.faq')) {
        ! function (i) {
            var o, n;
            i(".accordion-heading").on("click", function () {
                o = i(this).parents(".accordion"), n = o.find(".accordion-content"),
                    o.hasClass("active") ? (o.removeClass("active"),
                        n.slideUp()) : (o.addClass("active"), n.stop(!0, !0).slideDown(),
                        o.siblings(".active").removeClass("active").children(".accordion-content").stop(!0, !0).slideUp());
            })
        }(jQuery);
    }
    
    
    // system message
    console.log('Page loaded. v1.0.0');
    $('.carousel').carousel('next');
});