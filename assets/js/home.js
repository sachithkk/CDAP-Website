$(document).ready(function () {
    
    $().UItoTop({
        easingType: 'easeOutQuart'
    });
});

$(document).ready(function () {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});

addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(6.914717, 79.972926),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}