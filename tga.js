function addRadio() {
  $('#task-index', window.parent.frames[0].document).append('<div id="popupPrompt"><input type="radio" name="refPage" id="ref" value="Yes" checked="true"/>Refresh<input type="radio" name="refPage" id="refAc" value="No"/>Refresh + Accept<br /></div>');
};

if (window.location.pathname == '/evaluation/rater'){ //For TGA
var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
  



function dostuff(){
                       setTimeout(addRadio, 2000);
                       if( $('#task-index > div.container > ul > li:nth-child(n) > a', window.parent.frames[0].document).hasClass("button")){
                       	changes.play();
                       }
                       else {
                       $( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
                       setTimeout(dostuff, 60000);
                       }
                       }  
};



function dostuff2(){  
                       if( $('#task-index > div.container > ul > li:nth-child(n) > a', window.parent.frames[0].document).hasClass("button")){
                       	changes.play();
                        $('#task-index > div.container > ul > li:nth-child(n) > a').click(); 
                       }
                       else {
                       $( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
                       setTimeout(dostuff2, 60000);
                       } 
};



$('input:radio[name=refPage]').change(
    function(){
        if ($(this).val() == 'Yes') {
dostuff();        }
        else {

if ($(this).val() == 'No') {
dostuff2();
}
        }
    });


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

  
  
