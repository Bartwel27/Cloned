
	 let form_one = document.querySelector(".form_one")
	 let form_two = document.querySelector(".form_two")
	 let nextbtn = document.getElementById("nextbtn")
	 let forgotpassword = document.getElementById("forgotpassword")
	 let cancelbtn = document.getElementById("cancelbtn")
	 
	 let username = document.getElementById("username")
	 let data = document.getElementById("data")
	 
	 forgotpassword.onclick = function(){
	 window.location.href="https://x.com/i/flow/login"
	 };loggoogle.onclick = function(){
	  window.location.href="https://accounts.google.com/gsi/select?client_id=49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com&ux_mode=popup&ui_mode=bottom_sheet&as=DoibgUO9M47Vz8evzMMqRQ&channel_id=d31025ba812bf843f73803c830de37ecf1c80e42ff5f04326b021a7cca788c61&origin=https%3A%2F%2Fx.com";
	 };logapple.onclick = function(){
	  window.location.href="https://appleid.apple.com/auth/authorize?client_id=com.twitter.twitter.siwa&redirect_uri=https%3A%2F%2Fx.com&response_type=code%20id_token&state=xXMH9qjyUMuVrVNlZsdpJbjTaN9atm6fPKRP5hLsRCe&scope=name%20email&response_mode=web_message&frame_id=8be7687b-99c2-4dd9-a2ed-c3fadbd349af&m=11&v=1.5.5"
	 }
	 
	 nextbtn.addEventListener("click", function(){
	  if (username.value !="") {
	    form_one.style.display="none"
	    form_two.style.display="block"
	    data.textContent = username.value
	   	    
	     // now clickable
	     cancelbtn.onclick = function(){
	       form_one.style.display="block"
	       form_two.style.display="none"
	     }
	    	    
	   } else {
	     username.style.border="01px solid red"
	     username.style.placeholder="red"
	   } 
	  
	 });
	
