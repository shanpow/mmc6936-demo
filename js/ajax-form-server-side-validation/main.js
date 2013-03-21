$(document).ready(function(){

    $('form').submit(function(){
        // read the form values
        var form_data = $('form').serialize();

        // asynchronously post them to the form processor
        $.post('form-processor.php', form_data, function(response){
            // unpackage the JSON object
            var json = JSON.parse(response);

            $('#form_info').fadeOut('slow', function(){
                $(this)
                    .attr('class', json.status)
                    .html(json.content)
                    .fadeIn()
                    .delay(5000)
                    .fadeOut();
            });
        });

        // prevent the form from submitting
        return false;
    });

});
