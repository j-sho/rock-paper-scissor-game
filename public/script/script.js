function basicPopup(url, id) {
	console.log(id);
popupWindow = window.open(url,'popUpWindow','height=500,width=450,left='+(screen.width-450)/2+',top='+(screen.height-500)/2+'toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=no,resizable=no');
popupWindow.document.getElementsByTagName('body')[0].innerHTML = '';
let imageRule;
let imageClass;
if( id == 5 ) {
    imageRule = "images/image-rules-bonus.svg";
    imageClass = "pentagon";
} else {
    imageRule = "images/image-rules.svg";
    imageClass = "triangle";
};
popupWindow.document.write 
    ('<HTML><HEAD><TITLE>Rules</TITLE>' + 
        '<link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet">' +
        '<link rel="stylesheet" href="css/popup-style.css">' + 
        '</HEAD><BODY>'+
        '<div class="rule-heading"><h1>RULES</h1>'+
        '<button onClick="window.close();">' + 
        '<img src="images/icon-close.svg"></button></div><br />' + 
    '<div class="rule-container ' + imageClass + '"><img src=' + imageRule + '></div><br />'+
    '</BODY>   </HTML>');
	};


