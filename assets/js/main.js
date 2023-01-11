(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    /*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
    window.sr = ScrollReveal();
    sr.reveal('.foo', { duration: 1000, delay: 15 });





    /*--/ Navbar Collapse /--*/
    $('.navbar-toggle-box-collapse').on('click', function() {
        $('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
    });
    $('.close-box-collapse, .click-closed').on('click', function() {
        $('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
        $('.menu-list ul').slideUp(700);
    });

    /*--/ Navbar Menu Reduce /--*/
    $(window).trigger('scroll');
    $(window).bind('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-default').addClass('navbar-reduce');
            $('.navbar-default').removeClass('navbar-trans');
        } else {
            $('.navbar-default').addClass('navbar-trans');
            $('.navbar-default').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

})(jQuery);



// A $( document ).ready() block.
$(document).ready(function() {
    // console.log( "ready!" );

    let processProperty = () => {
        let propertyName = property.name;
        //console.log(property)
        const address = `${property.address_1},${property.address_2},${property.address_3},${property.address_4},${property.address_5},${property.address_6}`
        let propertyType = "Condo";
        switch (property.propertyType) {
            case 0:
                propertyType = 'Condo';
                break;
            case 1:
                propertyType = 'House';
                break;
        }
        let propertyStatus = "Crowdfund";
        switch (property.state) {
            case 0:
                propertyName = propertyName + ' (Crowdfund)'
                propertyStatus = 'Crowdfund';
                break;
            case 1:
                propertyName = propertyName + ' (Sold)'
                propertyStatus = 'Sold';
                break;
        }
        let amenities = "";
        ul = document.getElementById('amenities')
        for (var i = 0; i < property.amenities.length; ++i) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(property.amenities[i].name));
            ul.appendChild(li);
        }


        var owl = $('#property-single-carousel');
        owl.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                }
            }
        });
        // Append a new item
        for (var i = 0; i < property.images.length; ++i) {
            owl.trigger('add.owl.carousel', [`<img src="${property.images[i].url}">`]);

        }
        owl.trigger('refresh.owl.carousel');



        //format the currency
        const amount = formatCurencyUSD(property.internationalCost, 0);
        const tranchePrice = formatCurencyUSD(property.tranchePrice, 0);


        //build the page

        document.getElementById('name').innerHTML = propertyName;
        document.getElementById('address').innerHTML = address;
        document.getElementById('description').innerHTML = property.description;
        document.getElementById('price').innerHTML = amount;
        document.getElementById('currency').innerHTML = property.internationalCurrency;
        document.getElementById('propertyId').innerHTML = property.id;
        document.getElementById('location').innerHTML = address;
        document.getElementById('type').innerHTML = propertyType;
        document.getElementById('status').innerHTML = propertyStatus;
        document.getElementById('area').innerHTML = property.area + "m";
        document.getElementById('beds').innerHTML = property.bedrooms;
        document.getElementById('baths').innerHTML = property.bathrooms;
        document.getElementById('garage').innerHTML = property.garage;
        document.getElementById('googlemap').src = property.location;
        if (propertyStatus == "Crowdfund")
            document.getElementById('crowdfund').classList.remove('d-none');
        document.getElementById('totaltranches').innerHTML = property.tranches;
        document.getElementById('tranchesold').innerHTML = property.tranchesSold;
        document.getElementById('tranchesleft').innerHTML = property.tranches - property.tranchesSold;
        document.getElementById('tranchecost').innerHTML = tranchePrice;




    }

    let getProperty = () => {
        propertyId = getUrlParamater('id');
        //process the API call
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl + `properties/crowdfund/?id=${propertyId}`, true);
        xhr.onload = function() {
            //check it was ok
            if (this.status === 200) {
                property = this.response
                property = JSON.parse(property);
                processProperty()
            }
        };
        xhr.send();
    }

    getProperty();
});