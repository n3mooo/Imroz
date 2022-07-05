/*------------------------------------------------
Template Name: Imroz - Html5 Agency & Portfolio Template
All Main Js Here  

Index All JS 
-----------------------
        01. Wow Active
        02. Counter Up
        03. Feature Icon Activation
        04. Youtub Popup 
        05. Slick Activation            
        06. Paralax Window
        07. LightBox
        08. Parallax Activation
        09. Masonry Activation
        10. ScrollUp Activation
        11. Mobile Menu Activation
        12. Smoth Scroll
--------------------------------------------------*/

(function (window, document, $, undefined) {
    'use strict';

    var imJs = {

        m: function (e) {
            imJs.d();
            imJs.methods();
        },

        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },

        methods: function (e) {
            imJs.mobileMenuActive();
            imJs.wowActivation();
        },

        mobileMenuActive: function (e) {
            $('.rn-popup-mobile-menu .nav-pills .nav-link').on('click', function (e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                $('html').css({
                    overflow: ""
                })
            })
            $('.rn-popup-mobile-menu .has-dropdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                $('html').css({
                    overflow: ""
                })
            });
            $('.menubar').on('click', function (e) {
                e.preventDefault();
                $('.rn-popup-mobile-menu').addClass('menu-open');
                $('html').css({
                    overflow: "hidden"
                })
            });
            $('.close-menu').on('click', function (e) {
                e.preventDefault();
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                $('.rn-popup-mobile-menu .has-dropdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                $('html').css({
                    overflow: ""
                })
            });
        },

        wowActivation: function () {
            new WOW().init();
        },
    }
    imJs.m();

})(window, document, jQuery)