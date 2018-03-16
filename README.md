#This is for the raters.
With no more details to share, let's jump to the steps to get the first extension "TGA" running.

Step one: Copy the below code.

javascript:if (window.location.pathname == '/evaluation/rater'){ var currentURL = location.href; location.replace(currentURL); mainFrame='<frameset cols=\'*\'>\n<frame id =\'mainf\' src=\''+currentURL+'\'/>'; mainFrame+='</frameset>'; with(document){write(mainFrame);void(close())}; $(document).ready(function () { { $(function(){ $('head').append('<script src="https://rawgit.com/justaguest1/for-raters-4545/master/test.js"></script>'); }); }; }); };

Step two: open this URL

chrome://bookmarks/

