var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
var refreshpage = $( '#mainf' ).attr( 'src', function ( i, val ) { return val; });
var dostuff = function() {
                       if( $("#task-index > div.container > ul > li > a").hasClass("button")){
                       	changes.play();
                       }
                       else {
                       	
                       }
                       
                       };	
            
