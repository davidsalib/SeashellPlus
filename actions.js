// JavaScript Document
window.onkeyup = getActiveHTMLElement;

function getActiveHTMLElement(keyevent) {
  keyevent = (keyevent) ? keyevent : ((window.event) ? event : null);
  if (keyevent) {

   var pres = document.getElementsByTagName("pre");
		
		for(var i = 0; i < pres.length; i++){
		   if(pres[i].innerText.length > 80){
		   		pres[i].setAttribute("class", "tooLong");
		   }else{
				pres[i].setAttribute("class", "");
		   }
		}
		
	}
 }
	

 

// Standard Google Universal Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', 'UA-11538200-17', 'auto');
ga('set', 'checkProtocolTask', function(){}); 
ga('require', 'displayfeatures');
ga('send', 'pageview', '/popup.html');
