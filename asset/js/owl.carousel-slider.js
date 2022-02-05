// == Slider - Pricing : Start ==
var sliderPricing = $('#sliderPricing');
sliderPricing.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        },
        1000: {
            items: 3
        },
        1200: {
            items: 5
        },
        1800: {
            items: 6
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
                items: 1
            },
            600: {
                items: 3
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