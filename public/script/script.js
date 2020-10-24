function basicPopup(url, id) {
	console.log(id);
popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
popupWindow.document.getElementsByTagName('body')[0].innerHTML = '';
if( id == 5 ) {
	popupWindow.document.write 
    ('<HTML><HEAD><TITLE>Rules</TITLE></HEAD><BODY><FORM    NAME="form1">' +
    '<img src="images/image-rules-bonus.svg"><br />'+
    ' Click the button below to close the window.<br />' +
    '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY>   </HTML>');
} else {
	popupWindow.document.write 
    ('<HTML><HEAD><TITLE>Rules</TITLE></HEAD><BODY><FORM    NAME="form1">' +
    '<img src="images/image-rules.svg"><br />'+
    ' Click the button below to close the window.<br />' +
    '<INPUT TYPE="button" VALUE="OK"onClick="window.close();"></FORM></BODY>   </HTML>');
}
	};