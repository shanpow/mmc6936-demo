$(document).ready(function(){
    $('td').click(function(){
        // capture the value of the table cell that was clicked
        var square_value = $(this).text();

        // determine the mark to write to the cell
        var new_mark     = '';

        if(square_value === '') { new_mark = 'O'; }
        if(square_value === 'O'){ new_mark = 'X'; }
        if(square_value === 'X'){ new_mark = ''; }

        $(this).text(new_mark);
    });
});
