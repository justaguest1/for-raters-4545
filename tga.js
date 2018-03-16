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
