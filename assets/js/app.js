$(function () {
            'use strict';
            //banner slick slider plugin
            $(".banner_slider").slick({
                arrows:false,
            })
            //filterizer plugin
            $('.filterizer-container').filterizr()
            //magnific-popup
            $(".popup-youtube").magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            })
            $('#bar1').barfiller({
                barColor: '#000000',
            });
            $('#bar2').barfiller();
            $('#bar3').barfiller();
            $('#bar4').barfiller();
            $('#bar5').barfiller();
            $('.counter').counterUp({
                delay: 10,
                time: 1000,
            })
            //Owl carousel
            $('.testimonial_item_container').owlCarousel({
                margin:0,
                loop:true,
                autoplay:true,
                autoplayTimeout:4000,
                nav:false,
                smartSpeed:800,
                navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
                URLhashListener:true,
                startPosition: 'URLHash',
                responsive:{
                    0:{
                        items:1
                    },
                    450:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })
            //brand slick active
            $(".brand_name").slick({
                slidesToShow:5,
                slidesToScroll:1,
                autoplay:true,
                autoplaySpeed:3000,
                arrows:false,
            })
            //map interagetion
            map = new GMaps({
                div: '.google_map',
                lat: 22.3569,
                lng: 91.7832
              });
              map.addMarker({
                lat: 22.3569,
                lng: 91.7832,
                title: 'Lima',
                click: function(e) {
                  alert('You clicked in this marker');
                }
              });
            })