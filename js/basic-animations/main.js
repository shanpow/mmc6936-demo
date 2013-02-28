$(document).ready(function () {
    var red = $('#red');

    $('button#one').toggle(
        function(){ red.fadeOut(); },
        function(){ red.fadeIn();  }
    );
});

