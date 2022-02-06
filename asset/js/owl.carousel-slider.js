// == Slider - Pricing : Start ==
var sliderPricing = $('#sliderPricing');
sliderPricing.owlCarousel({
    loop: true,
    margin: 12,
    nav: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0
        },
        375: {
            items: 1,
            stagePadding: 20
        },
        700: {
            items: 2,
            stagePadding: 40
        },
        900: {
            items: 3,
        },
        1100: {
            items: 3,
            stagePadding: 80
        },
        1440: {
            items: 4,
            stagePadding: 80
        },
        1800: {
            items: 5,
            stagePadding: 100
        }
    }
});

// Slider - Pricing - Custom Navigation Button
$(".btn-slider-pricing-prev").click(function () {
    sliderPricing.trigger('prev.owl.carousel');
});
$(".btn-slider-pricing-next").click(function () {
    sliderPricing.trigger('next.owl.carousel');
});
// == Slider - Pricing : End ==

// == Slider - Our Works : Start ==
var allSliderOurWorks = $("#sliderOurWorksMusicVideo, #sliderOurWorksPreviewVideo, #sliderOurWorksIntroOutro, #sliderOurWorksStringer");

allSliderOurWorks.each(function () {
    $(this).owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            425: {
                items: 1,
                stagePadding: 40
            },

            540: {
                items: 1,
                stagePadding: 140
            },
            700: {
                items: 2,
                stagePadding: 80
            },
            1000: {
                items: 2,
                stagePadding: 160
            },
            1200: {
                items: 3,
                stagePadding: 40
            },
            1440: {
                items: 3,
                stagePadding: 160
            },
            1660: {
                items: 4,
                stagePadding: 60
            },
            1800: {
                items: 4,
                stagePadding: 200
            },
            2150: {
                items: 5,
                stagePadding: 220
            }
        }
    });
});

// Slider - Our Works - Custom Navigation Button
$(".btn-slider-our-works-prev").click(function () {
    allSliderOurWorks.trigger('prev.owl.carousel');
});
$(".btn-slider-our-works-next").click(function () {
    allSliderOurWorks.trigger('next.owl.carousel');
});
// == Slider - Our Works : End ==