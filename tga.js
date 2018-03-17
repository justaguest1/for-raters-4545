if (window.location.pathname == '/evaluation/rater'){ //For TGA
var addRadio = $('#task-index', window.parent.frames[0].document).append('<div id="popupPrompt"><input type="radio" name="refPage" id="ref" val="Yes" checked="true"/>Refresh<input type="radio" name="refPage" id="refAc" val="No"/>Refresh + Accept<br /></div>');
var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
function dostuff(){
                       $('#task-index', window.parent.frames[0].document).append('<div id="popupPrompt"><input type="radio" name="refPage" id="ref" val="Yes" checked="true"/>Refresh<input type="radio" name="refPage" id="refAc" val="No"/>Refresh + Accept<br /></div>');
                       if( $('#task-index > div.container > ul > li:nth-child(n) > a', window.parent.frames[0].document).hasClass("button")){
                       	changes.play();
                       }
                       else {
                       $( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
$(document).ready(function() {                         
                       $('#task-index', window.parent.frames[0].document).append('<div id="popupPrompt"><input type="radio" name="refPage" id="ref" val="Yes" checked="true"/>Refresh<input type="radio" name="refPage" id="refAc" val="No"/>Refresh + Accept<br /></div>');
 });
                       }
                       }   
setInterval(dostuff, 60000);
};




//To Remember The Choice of TGA
$(function()
{
    $('input[type=radio]').each(function()
    {
        var state = JSON.parse( localStorage.getItem('radio_'  + this.id) );
        
        if (state) this.checked = state.checked;
    });
});

$(window).bind('unload', function()
{
    $('input[type=radio]').each(function()
    {
        localStorage.setItem(
            'radio_' + this.id, JSON.stringify({checked: this.checked})
        );
    });
});
