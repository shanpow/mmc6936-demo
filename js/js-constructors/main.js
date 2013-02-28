$(document).ready(function(){
    red    = new Box('red');
    blue   = new Box('blue');
    orange = new Box('orange');
    pink   = new Box('pink');
});

function Box(color){
    this.color  = color;
    this.height = 100;
    this.width  = 100;

    this.fade = function(in_or_out){
        (in_or_out === 'in') ? $('#' + this.color).fadeIn() : $('#' + this.color).fadeOut();
    };

    this.resize = function (width, height){
        $('#' + this.color)
            .css('height' , height + 'px')
            .css('width'  , width  + 'px');
    };

    this.change_color = function(color){
        $('#' + this.color).css('background-color', color);
    };
}
