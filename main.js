$(document).ready(function(){

    // Get screen width for later tests
    var screen_width = screen.width;

    // Watching for scrolling past the top logo
    var opener_logo = document.getElementById('opener-logo');

    if (screen_width > 700) {
        var isInViewport = function (elem) {
            var bounding = elem.getBoundingClientRect();
            var height = elem.height;
            //console.log(bounding);
            return (
                bounding.bottom >= height/2
            );
        };

        window.addEventListener('scroll', function (event) {
            if (!isInViewport(opener_logo)) {
                $("#logo-link").addClass("showLogo");
                console.log('Logo shown');
            } else {
                $("#logo-link").removeClass("showLogo");
                console.log('Logo removed');
            }
        }, false); 
    }

    // Get rid of responsive navigation on mobile when user clicks a link
    if (screen_width <= 700) {
        // var about_link = document.getElementById('about-link');
        // var about_link = $("#about-link");
        // var portfolio_link = $("#portfolio-link");
        // var resume_link = $("#resume-link");
        // var portfolio_link = document.getElementById('portfolio-link');
        // var resume_link = document.getElementById('resume-link');

        $("#about-link").click( function() { toggleView('menu_icon'); } );
        $("#portfolio-link").click( function() { toggleView('menu_icon'); } );
        $("#resume-link").click( function() { toggleView('menu_icon'); } );
        // portfolio_link.addEventListener('click', function(){toggleView('menu_icon');}, false);
        // resume_link.addEventListener('click', function(){toggleView('menu_icon');}, false);

        // about_link.addEventListener('click', function(){toggleView('menu_icon');}, false);
        // portfolio_link.addEventListener('click', function(){toggleView('menu_icon');}, false);
        // resume_link.addEventListener('click', function(){toggleView('menu_icon');}, false);
    }

    // Toggle a variety of mobile and desktop views on and off. Includes things like nav, about section, and detail drawers.
    if (document.getElementById('drexelreg-page')) {
        var original_site = document.getElementById('original');
        var redesign_site = document.getElementById('redesign');
        original_site.addEventListener('click', function() {toggleView('originalSite');});
        redesign_site.addEventListener('click', function() {toggleView('redesignSite');});
    } else if (document.getElementById('home-page')) {
        var infoButton = document.getElementById('infoButton');
        infoButton.addEventListener('click', function() {toggleView('infoButton');}, false);
    }

    // var menu_icon = document.getElementById('icon');
    var menu_icon = $("#icon");
    // menu_icon.addEventListener('click', function() {toggleView('menu_icon');}, false);
    $(menu_icon).click(function() {toggleView('menu_icon');});

    // Function that runs the toggling action
    function toggleView(e) {
        switch (e) {
            // Toggling for the Read More button on mobile
            case 'infoButton':
                console.log('About Button pressed');
                var infoAbout = document.getElementById('abT');
                if (infoAbout.className === 'aboutTxt') {
                    infoAbout.className += " showTxt";
                    infoButton.innerHTML = 'Collapse';
                } else {
                    infoAbout.className = 'aboutTxt';
                    infoButton.innerHTML = 'Read More';
                }
                break;

            // Toggling for the hamburger/x nav icon
            case 'menu_icon':
                console.log('Menu Button pressed');
                // var navlinks = document.getElementById('navlinks');
                var navlinks = $("#navlinks");
                if (navlinks.className === 'navlinks') {
                    // navlinks.classList.add('responsive');
                    $(navlinks).addClass("responsive");
                    // menu_icon.setAttribute('src', 'images/close.svg');
                    $(menu_icon).attr("src", "images/close.svg");
                } else {
                    navlinks.className = 'navlinks';
                    menu_icon.setAttribute('src', 'images/hamburger.svg');
                }
                break;

            // Toggling for the detail drawers on the Drexel Registration subpage
            case 'originalSite':
            case 'redesignSite':
                console.log(e + ' drawer pressed');

                var to_open;
                var arrow;

                if (e === 'originalSite') {
                    to_open = document.getElementById('original_details');
                    arrow = document.getElementById('original').firstChild;
                } else if (e === 'redesignSite') {
                    to_open = document.getElementById('redesign_details');
                    arrow = document.getElementById('redesign').firstChild;
                }

                if (to_open.hidden == false) {
                    to_open.hidden = true;
                    to_open.classList.add('closed');
                    to_open.parentElement.classList.remove('opened');
                    arrow.innerHTML = '&#9656;';
                } else {
                    to_open.hidden = false;
                    to_open.parentElement.classList.add('opened');
                    to_open.classList.remove('closed');
                    arrow.innerHTML = '&#9662;';
                }
                break;
        }
    }


    // Get the current year when page loads for copyright info
    var date = new Date();
    var copy_year = date.getFullYear();

    console.log('Year is ' + copy_year);
    
    document.getElementById('copyright').innerHTML = copy_year;

});