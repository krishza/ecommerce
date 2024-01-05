function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



$(document).ready(function () {
    $('.card-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});




function clk(newImg) {
    let getImg = document.getElementById("imgs");
    getImg.src = newImg.src;
}