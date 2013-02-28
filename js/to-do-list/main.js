$(document).ready(function(){

    $('form').submit(function(){
        // clear the todo item box
        $('input[name=todo_item]').val('');

        // prevent the form from submitting
        return false;
    });

    // attach an event handler that will fire when the submit button
    // is clicked
    $('input[type=submit]').click(function(){
        // grab the todo item to append to the list
        var todo_item = $('input[name=todo_item]').val();

        // aggregate the markup
        var new_table_row = "<tr>" +
            "<td></td>" + 
            "<td>" + todo_item + "</td>" + 
            "<td><a href='javascript:void(0)'>Delete</a></td>" + 
        "</tr>";

        // append the aggregated markup to the table
        $('table tr:last').after(new_table_row);

        // attach event handlers to the new delete links
        $('a').click(function(event){
            $(event.target)
                .parents('tr')
                .fadeOut(400, function(){
                    $(this).remove();
                });
        });
    });

});
