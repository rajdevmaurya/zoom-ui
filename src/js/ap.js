import $ from 'jquery';
(function ($) {

    $(document).ready(function () {

        /* data table */


        /* SIDEBAR */
        $(document).on("click", "#header_menu", function () {
            $(".sidebar").toggleClass("sidebar--expanded");
            $('.level-1 > li').removeClass("menu__open");
            $('.level-1 > li').children('.level-2').slideUp();
        });

        $(window).resize(function () {
            toggleSidebar();
        });

        $(window).on({load:toggleSidebar()});

        function toggleSidebar() {
            if ($(window).width() > 768) {
                $(".sidebar").addClass("sidebar--expanded");
            } else {
                $(".sidebar").removeClass("sidebar--expanded");
            }
        }


        /* SIDEBAR MENU */
        $(".level-2").hide();
        $(".level-2").eq(0).show();
        $(document).on("click", ".level-1 > li > a", function (e) {
            $(this).parent().siblings().removeClass("menu__open");
            $(this).parent().siblings().children('.level-2').slideUp();
            $(this).parent().toggleClass("menu__open");
            $(this).next().slideToggle();
        })


        /* USER INFO */
        $("#header_user").click(function () {
            $(this).next().toggleClass("show__info");
            return false;
        });
        $(document).click(function (c) {
            $(".header__user__info").removeClass("show__info");
        });
        $('.header__user__info').click(function (e) {
            e.stopPropagation();
        });

        /* ALERT */
        $('.close').click(function () {
            $(this).closest('.alert').hide();
        })

    });

})($);