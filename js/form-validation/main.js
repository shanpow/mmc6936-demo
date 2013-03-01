$(document).ready(function(){

    /* form validator */
    $('form').submit(function(){
        // track the validity of the form inputs
        var errors   = '';

        // verify that all required fields have been completed
        $('.required').each(function(){
            // buffer the jQuery (this) object
            var the_field = $(this);
            if(the_field.val() === ''){
                the_field.css('background-color', 'pink');
                var field_name  = the_field.attr('name');
                errors         += "The " + field_name + " field is invalid.<br>";
            } else {
                the_field.css('background-color', 'white');
            }
        });

        // display an error notice if errors exist
        if(errors !== ''){
            $('div#notice').html(errors).fadeIn();
        } else {
            $('div#notice').fadeOut();
        }

        // prevent the form from submitting. (In "real life",
        // you would probably want the form to actually submit
        // if it contained no errors.)
        return false;
    });

    // bind the change() event handler to fire when the 
    // select is changed
    $('select[name=housing]').change(function(){
        // show or hide the housing_comments textarea
        // depending on whether the student lives on or
        // off campus
        if($(this).val() === 'off_campus'){
            $('textarea[name=housing_comments]').fadeOut();
        } else {
            $('textarea[name=housing_comments]').fadeIn();
        }
    });

});
