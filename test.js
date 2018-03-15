var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
var dostuff = function() {
                       if( $("a").hasClass("button")){
                       	changes.play();
                       }
                       else {
                       	location.reload(true);
                       }
                       
                       };	
            

setInterval(dostuff, 60000);           
setTimeout (dostuff, 1000);
