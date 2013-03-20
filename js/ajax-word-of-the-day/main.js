$(document).ready(function(){

    // load an initial word into the document
    $.get('/wordgen.php', function(data){
        $('div#word_of_the_day').html(data);
    });

    // use AJAX to retrieve a new word on every button click
    $('input').click(function(){
        $.get('/wordgen.php', function(data){
            $('div#word_of_the_day').html(data);
        });
    });

});
