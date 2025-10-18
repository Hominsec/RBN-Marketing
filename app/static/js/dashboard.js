window.addEventListener('load',()=>{

console.log("Dashboard loaded_test");
  var var1 =0;
  var add1=0;
  var add2=0;
  var var2=0;
  var var3=0;

  let inputCard1         = document.querySelector("#One");       // Query by HTML class & element type. Select <p> element
  let inputCard2         = document.querySelector("#Two"); 
  let inputCardBtn      = document.querySelector("#hm");  // Query by HTML class & element type. Select <button> element

  let p1=document.querySelector("#prompt1");
  let p2=document.querySelector("#prompt2");
  let p3=document.querySelector("#prompt3");
  let p4=document.querySelector("#prompt4");
  let p5=document.querySelector("#prompt5");
  let p6=document.querySelector("#prompt6");
  
  let weatherstation=document.querySelector("#weather_station");
  let sockets=document.querySelector("#sockets");
  let capstone=document.querySelector("#capstone");
  let book_keeping=document.querySelector("#book_keeping");
  let clock_alarm=document.querySelector("#clock_alarm");
  let home_automation=document.querySelector("#home_automation");
  let h_a=document.querySelector("#h_a");
  //let sc=document.querySelector("#sc");
  let Btn1      = document.querySelector("#b1");
  let Btn2      = document.querySelector("#b2");
  let Btn3      = document.querySelector("#b3");
  let Btn4      = document.querySelector("#b4");
  let Btn5      = document.querySelector("#b5");
  let Btn6      = document.querySelector("#b6");
  let h1      = document.querySelector("#h_phone1");
  let h2     = document.querySelector("#h_phone2");
  let h3      = document.querySelector("#h_phone3");
  let h4      = document.querySelector("#h_phone4");
  let h5      = document.querySelector("#h_phone5");
  let h6      = document.querySelector("#h_phone6");
  

  //let vid     =document.querySelector("#weather");
  let vid1 = document.querySelector("#vid1");
  let vid2 = document.querySelector("#vid2");
  let vid3 = document.querySelector("#vid3");
  let vid4 = document.querySelector("#vid4");
  
  
let details = navigator.userAgent;
  
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;
  
/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);
  
if (isMobileDevice) {
    console.log("You are using a Mobile Device");
	h1.innerHTML="Tap Me";
	h2.innerHTML="Tap Me";
	h3.innerHTML="Tap Me";
	h4.innerHTML="Tap Me";
	h5.innerHTML="Tap Me";
	h6.innerHTML="Tap Me";
} else {
    console.log("You are using a Desktop");
}
  


  //WEATHER STATION
Btn1.addEventListener("click",()=>{
	vid1.src="../static/videos/weather_station.mp4";
	vid1.poster="../static/images/load.gif";
	//console.log("Button One Clicked");
	//weatherstation.style.backgroundImage= "url('static/images/azure.jpg')";
	//p1.innerHTML="Languages used: Python-Flask, AVR-C, HTML,CSS, JavaScript,MongoDB <br>Protocols Used: MQQT<br> Description: This is an embedded IOT application which functioned to read the environmental data of its surroundings, storing that data and finally displaying that data to the user on a website.";
});
weatherstation.addEventListener("mouseover",()=>{
	//weatherstation.style.backgroundImage= "url('static/images/azure.jpg')";
	//p1.innerHTML="Languages used: Python-Flask, AVR-C, HTML,CSS, JavaScript,MongoDB <br>Protocols Used: MQQT<br> Description: This is an embedded IOT application which functioned to read the environmental data of its surroundings, storing that data and finally displaying that data to the user on a website.";
	weatherstation.style.backgroundSize= "100% 100%";
	weatherstation.style.backgroundImage= "url('static/images/weather_station.jpg')";
	//p1.innerHTML="In Progress";
});
weatherstation.addEventListener("mouseleave",()=>{
	//console.log(vid1.play);
	vid1.poster="";
	//console.log("Weather Moved");
	weatherstation.style.backgroundSize= "90% 90%";
	weatherstation.style.backgroundImage= "url('static/images/arduino.svg')";
	vid1.src="";
	p1.innerHTML="";
	
});

vid1.addEventListener("ended",()=>{
	vid1.poster="";
	//console.log("Weather Moved");
	weatherstation.style.backgroundSize= "90% 90%";
	weatherstation.style.backgroundImage= "url('static/images/arduino.svg')";
	vid1.src="";
	//p1.innerHTML="";
});


//SOCKETS
Btn2.addEventListener("click",()=>{
	vid3.src="../static/videos/DJSA.mp4";
	vid3.poster="../static/images/load.gif";
	///sockets.style.backgroundSize= "100% 100%";
	///sockets.style.backgroundImage= "url('static/images/network.jpg')";
	///p2.innerHTML="";
	//console.log("Button Two Clicked");
	//sockets.style.backgroundImage= "url('static/images/azure.jpg')";
	///sockets.style.backgroundImage= "";
	///p2.innerHTML="Languages used: Python <br> Applications Used: Wireshark, Command Prompt <br><br> Description: A standalone software that had multiple functions such as socket communication and port scanning. ";
});
sockets.addEventListener("mouseover",()=>{
	///sockets.style.backgroundSize= "100% 100%";
	///sockets.style.backgroundImage= "url('static/images/network.jpg')";
	//sc.style.color="white";
	//console.log("Sockets Hovered");
	//p2.innerHTML="In Progress";
	sockets.style.backgroundImage= "";
	p2.innerHTML="Languages used: Python <br> Applications Used: Wireshark, Command Prompt <br><br> Description: A Client and Server script that allows two or more machines to communicate through an encrypted, real time connection without the need for bluetooth or internet. ";
});
sockets.addEventListener("mouseleave",()=>{
	//sc.style.color="black";
	vid3.poster="";
	vid3.src="";
	p2.innerHTML="";
	sockets.style.backgroundSize= "90% 90%";
	sockets.style.backgroundImage= "url('static/images/python.svg')";
	//p2.innerHTML="";
});
Btn2.addEventListener("mouseleave",()=>{
	sockets.style.backgroundSize= "90% 90%";
	sockets.style.backgroundImage= "url('static/images/python.svg')";
	//p2.innerHTML="";
	//console.log("Sockets Moved");
	
});
vid3.addEventListener("ended",()=>{
	vid3.poster="";
	//console.log("Weather Moved");
	sockets.style.backgroundSize= "90% 90%";
	sockets.style.backgroundImage= "url('static/images/python.svg')";
	vid3.src="";
	//p1.innerHTML="";
});


//BOOK-KEEPING
Btn4.addEventListener("click",()=>{
	vid4.src="../static/videos/book_keeping.mp4";
	vid4.poster="../static/images/load.gif";
	//console.log("Button One Clicked");
	//book_keeping.style.backgroundSize= "100% 100%";
	//book_keeping.style.backgroundImage= "url('static/images/azure.jpg')";
	///book_keeping.style.backgroundImage= "";
	///p4.innerHTML="Languages used: Java <br><br> Description: This application was made on the request of a small business owner to assist her in the daily operations of her business.";
});
book_keeping.addEventListener("mouseover",()=>{
	///book_keeping.style.backgroundSize= "100% 80%";
	///book_keeping.style.backgroundImage= "url('static/images/books.svg')";
	book_keeping.style.backgroundImage= "";
	p4.innerHTML="Languages used: Java <br><br> Description: This application was made on the request of a small business owner to assist her in the daily operations of her business.";
	//console.log("Book Hovered");
	//p1.innerHTML="In Progress";
});
book_keeping.addEventListener("mouseleave",()=>{
	vid4.poster="";
	p4.innerHTML="";
	book_keeping.style.backgroundSize= "80% 80%";
	book_keeping.style.backgroundImage= "url('static/images/java.svg')";
	vid4.src="";
	//console.log("Book Hovered");
	//p1.innerHTML="In Progress";
});
Btn4.addEventListener("mouseleave",()=>{
	///book_keeping.style.backgroundSize= "80% 80%";
	///book_keeping.style.backgroundImage= "url('static/images/java.svg')";
	//console.log("Book_test Moved");
	///p4.innerHTML="";
});
vid4.addEventListener("ended",()=>{
	vid4.poster="";
	//console.log("Weather Moved");
	book_keeping.style.backgroundSize= "80% 80%";
	book_keeping.style.backgroundImage= "url('static/images/java.svg')";
	vid4.src="";
	//p1.innerHTML="";
});

//CLOCK-ALARM
Btn5.addEventListener("click",()=>{
	clock_alarm.style.backgroundSize= "100% 100%";
	clock_alarm.style.backgroundImage= "url('static/images/clock.jpg')";
	clock_alarm.style.backgroundColor= "black";
	p5.innerHTML="";
	//console.log("Button One Clicked");
	//clock_alarm.style.backgroundImage= "url('static/images/azure.jpg')";
	///clock_alarm.style.backgroundImage= "";
	///p5.innerHTML="Languages used: Avr-C <br><br> Description: An Embedded device which was programmed to function as a digital clock and alarm.";
});
clock_alarm.addEventListener("mouseover",()=>{
	///clock_alarm.style.backgroundSize= "100% 100%";
	///clock_alarm.style.backgroundImage= "url('static/images/clock.jpg')";
	//console.log("Clock Hovered");
	//p1.innerHTML="In Progress";
	clock_alarm.style.backgroundColor= "rgba(255,255,255,0.5)";
	clock_alarm.style.backgroundImage= "";
	p5.innerHTML="Languages used: Avr-C <br><br> Description: An Embedded device which was programmed to function as a digital clock and alarm.";
});
clock_alarm.addEventListener("mouseleave",()=>{
	clock_alarm.style.backgroundColor= "#7CB9E8";
	clock_alarm.style.backgroundSize= "80% 80%";
	clock_alarm.style.backgroundImage= "url('static/images/electronics.svg')";
	p5.innerHTML="";
	//console.log("Clock Hovered");
	//p1.innerHTML="In Progress";
});
Btn5.addEventListener("mouseleave",()=>{
	clock_alarm.style.backgroundColor= "#7CB9E8";
	//console.log("CLock Moved");
	///
});


//HOME-AUTOMATION
Btn6.addEventListener("click",()=>{
	//console.log("Button Six Clicked");
	vid2.src="../static/videos/home_automation.mp4";
	vid2.poster="../static/images/load.gif";
	//home_automation.style.backgroundSize= "100% 100%";
	//home_automation.style.backgroundImage= "url('static/images/azure.jpg')";
	//p6.innerHTML="Languages used: Avr-C, HTML,CSS, JS <br>Protocols Used: MQQT <br><br> Description: An application created to model and reflect remote home automation.";
});
home_automation.addEventListener("mouseover",()=>{
	home_automation.style.backgroundSize= "100% 100%";
	home_automation.style.backgroundImage= "url('static/images/home_automation.jpg')";
	
	//home_automation.style.backgroundSize= "100% 80%";
	//home_automation.style.backgroundImage= "url('static/images/home3.png')";
	//console.log("Home Hovered");
	//p1.innerHTML="In Progress";
});
home_automation.addEventListener("mouseleave",()=>{
	vid2.poster="";
	//console.log("Home Moved");
	home_automation.style.backgroundSize= "80% 80%";
	home_automation.style.backgroundImage= "url('static/images/html.svg')";
	vid2.src="";
	p6.innerHTML="";
});
vid2.addEventListener("ended",()=>{
	vid2.poster="";
	//console.log("Home Moved");
	home_automation.style.backgroundSize= "80% 80%";
	home_automation.style.backgroundImage= "url('static/images/html.svg')";
	vid2.src="";
	p6.innerHTML="";
});


//CAPSTONE
Btn3.addEventListener("click",()=>{
	//console.log("Button Three Clicked");
	//capstone.style.backgroundImage= "url('static/images/azure.jpg')";
	capstone.style.backgroundImage= "";
	p3.innerHTML="The Capstone Project is a final year project which I will be taking a part of in 2024. <br> The theme I chose for my project is 'Security' and it will contain equal elements of computer science and electronics.<br>It's applicaple to institutions that requires constant security monitoring; and I believe it has the potential to be a marketable product. <br> To create this project I will be using python, web programming and embedded systems programming. ";
});
capstone.addEventListener("mouseover",()=>{
	capstone.style.backgroundSize= "100% 100%";
	capstone.style.backgroundImage= "url('static/images/inventor.png')";
	//console.log("Emergency Hovered");
	//p3.innerHTML="In Progress";
});
capstone.addEventListener("mouseleave",()=>{
	capstone.style.backgroundSize= "80% 80%";
	capstone.style.backgroundImage= "url('static/css/images2/brain.svg')";
	//console.log("Emergency Hovered");
	//p3.innerHTML="In Progress";
});
Btn3.addEventListener("mouseleave",()=>{
	//console.log("Emergency Moved");
	p3.innerHTML="";
});

});