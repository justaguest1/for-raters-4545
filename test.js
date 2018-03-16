var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
$(document).ready(function () {
function dostuff(){
                       if( $("#task-index > div.container > ul > li:nth-child(n) > a").hasClass("button")){
                       	changes.play();
                       }
                       else {
                         alert('button not there');
                       	 //$( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
                       }
                       }   
setInterval(dostuff, 60000);
  });           	
