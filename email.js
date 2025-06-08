var shown = false;
function showhideEmail(){
	if(shown){
		document.getElementById('email').innerHTML = "";
		shown = false;
	}else{
		var myemail = "<a href='mailto:rdsippy"+ "@" + "gmail.com'>rdsippy" + "@" + "gmail.com</a>";
		document.getElementById('email').innerHTML= myemail
		document.getElementById('email').style.color = "white"
		shown = true;
	}
}
