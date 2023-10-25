$(document).ready(function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    $('ul.navbar-nav li.nav-item').each(function() {
        var link = $(this).find('a').attr('href');
        if (link === page) {
            $(this).addClass('active');
        }
    });
});