$(document).ready(function(){
    $('td div.chit').click(function(){

        // capture the class of the chit that was clicked on 
        var chit_class = $(this).attr('class');

        // determine the new class to assign
        var new_chit_class = '';

        if(chit_class === 'chit'){ new_chit_class = 'chit red'; }
        if(chit_class === 'chit red'){ new_chit_class = 'chit black'; }
        if(chit_class === 'chit black'){ new_chit_class = 'chit'; }

        $(this).attr('class', new_chit_class);
    });
});
