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

$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});

function sendMail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "virajlkgunathilaka96@gmail.com",
        Password : "c28d7ca0-0171-495e-bfb3-d1f0a213b0cd",
        To : 'virajlakshitha39@gmail.com',
        From : "virajlkgunathilaka96@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}