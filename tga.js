if (window.location.pathname == '/evaluation/rater'){ //For TGA
var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
function dostuff(){
                       if( $('#task-index > div.container > ul > li:nth-child(n) > a', window.parent.frames[0].document).hasClass("button")){
                       	changes.play();
                       }
                       else {
                       $( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
                       }
                       }   
setInterval(dostuff, 60000);
};

//To Remember The Choice of TGA
$(function()
{
    $('input[type=radio]', window.parent.frames[0].document).each(function()
    {
        var state = JSON.parse( localStorage.getItem('radio_'  + this.id) );
        
        if (state) this.checked = state.checked;
    });
});

$(window).bind('unload', function()
{
    $('input[type=radio]', window.parent.frames[0].document).each(function()
    {
        localStorage.setItem(
            'radio_' + this.id, JSON.stringify({checked: this.checked})
        );
    });
});
