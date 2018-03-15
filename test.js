var changes = new Audio('https://raw.githubusercontent.com/justaguest1/for-raters-4545/master/changes.ogg');            
var dostuff = function() {
                       if( $("#task-index > div.container > ul > li > a").hasClass("button")){
                       	changes.play();
                       }
                       else {
                       	setTimeout('refresh()',5000);
                       }
                       
                       };	
            

setInterval(dostuff, 60000);           
setTimeout (dostuff, 1000);
