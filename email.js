var shown = false;
function showhideEmail(){
	if(shown){
		document.getElementById('email').innerHTML = "Show my email";
		shown = false;
	}else{
		var myemail = "<a href='mailto:rdsippy"+ "@" + "gmail.com'>rdsippy" + "@" + "gmail.com</a>";
		document.getElementById('email').innerHTML= myemail
		shown = true;
	}
}
