$(document).ready(function(){
    $('.carousel').carousel({interval: 2000}); 
	$(".skitter-large").skitter();
	
	// $('.val21-h2').countTo();
	// $("ul li").Click(function(){
	// 	$("ul li").addClass('activ').siblings('li').removeClass('active');	
	// })
	$('.admin-tab li').click(function(){
		$(this).addClass('selected').siblings('li').removeClass('selected');
		$('.viewUser,.viewRequest').hide();
		$('.'+$(this).data('class')).fadeIn();
		});
		
	// 	$('.links ul li').click(function(){
	// 		$(this).addClass('selected').siblings('li').removeClass('selected');
	// 		$('.Personal-Information,.change-pass,.Email-and-SMS,.Manage-Contact').hide();
	// 		$('.'+$(this).data('class')).fadeIn();
	// 		});

	// 		$('.map-links ul li').click(function(){
	// 			$(this).addClass('selected').siblings('li').removeClass('selected');
	// 			$('.map-info,.change-pass').hide();
	// 			$('.'+$(this).data('class')).fadeIn();
	// 			});
  });
  var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	smartBackspace: true ,
	typeSpeed: 200,
	backDelay: 200,
	loop: true,
  loopCount: Infinity,


  });

//     var myNav = document.getElementById("nav2"),
//     myDiv = document.getElementById("nav1"),
//     mya=document.getElementsByClassName('a');
// window.onscroll = function say() {
//     "use strict";
//     if (window.scrollY <= myDiv.offsetHeight) {
//         myNav.classList.remove("pos");
//         for(var i=0;i<this.mya.length;i++)
//         mya[i].style.color="rgb(126, 10, 161)";
//     }else if (window.scrollY > myDiv.offsetHeight) {
//         myNav.classList.add("pos");
//         for(var i=0;i<this.mya.length;i++)
//         mya[i].style.color="white";
//     }  
// };
// function updateTimer(deadline){
// 	var time=Math.abs(deadline - new Date());
// 	return{
// 		'hours':Math.floor( (time/(1000*60*60))%24),
// 		'minutes':Math.floor( (time/1000/60)%60),
// 		'seconds':Math.floor((time/1000)%60),
// 		'total':time
// 	      };
// 		}
// function animateClock(span){
// 		// span.className="turn";
// 	     setTimeout(function(){
// 		//    span.className="";
// 	},700);
// }
// function startTimer(id,deadline){
// 	    var timerInterval=setInterval(function(){
// 		var clock=document.getElementById(id);
// 		var timer=updateTimer(deadline);
//         clock.innerHTML='<span style="background: #26c2b9;padding: 10px;border-radius: 5px;margin: 20px 1.5%;">'+timer.hours+'</span>'+
// 		                '<span style="background: #f6bc58;padding: 10px;border-radius: 5px;margin: 0 1.5%;">'+timer.minutes+'</span>'+
// 		                '<span style="background: rgb(206, 14, 196);padding: 10px;border-radius: 5px;margin: 0 1.5%;">'+timer.seconds+'</span>';
// 		var spans=clock.getElementsByTagName("span");
// 		animateClock(spans[3]);
//         if (timer.seconds==59)
//         animateClock(spans[2]);
//         if (timer.minutes==59&&timer.seconds==59)
//         animateClock(spans[1]);
//         // if (timer.hours==23&&timer.minutes==59&&timer.seconds==59)
//         // animateClock(spans[0]); 
// 		if (timer.total<1) {
// 			clearInterval(timerInterval);
// 			clock.innerHTML='<span>0</span><span>0</span><span>0</span>';
// 		}
// 	},1000);
// }
// window.onload=function(){
// 	var deadline=new Date();
// 	startTimer("clock",deadline);
// };
