var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
$(document).ready(function () {
function dostuff(){
                       if( $("#task-index > div.container > ul > li:nth-child(1) > a").hasClass("button")){
                       	changes.play();
                       }
                       else {
                       	 $( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
                       }
                       }   
setInterval(dostuff, 60000);
  });           	
