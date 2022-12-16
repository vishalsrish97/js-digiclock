var 
	dateElement=document.getElementById('date'),
	monthElement=document.getElementById('month'),
	yearElement=document.getElementById('year'),
	amElement=document.getElementById('am'),
	pmElement=document.getElementById('pm'),
	hoursElement=document.getElementById('hours'),
	minutesElement=document.getElementById('minutes'),
	secondsElement=document.getElementById('seconds'),
	sunElement=document.getElementById('sun'),
	monElement=document.getElementById('mon'),
	tueElement=document.getElementById('tue'),
	wedElement=document.getElementById('wed'),
	thuElement=document.getElementById('thu'),
	friElement=document.getElementById('fri'),
	satElement=document.getElementById('sat');


function updatetime(){
	var toDay=new Date();
	hours=toDay.getHours();
	minutes=toDay.getMinutes();
	seconds=toDay.getSeconds();
	hoursElement.innerText=parseNumber(hours);
	minutesElement.innerText=parseNumber(minutes);
	secondsElement.innerText=parseNumber(seconds);
}

function parseNumber(number){
	if(number < 10){
		return '0' + number;
	}else{
		return number;
	}
}

function updatedate(){
	var toDay=new Date();
	date=toDay.getDate();
	month=toDay.getMonth();
	year=toDay.getFullYear();
	dateElement.innerText=parseNumber(date);
	monthElement.innerText=parseNumber(month + 1);
	yearElement.innerText=parseNumber(year);	
}

setInterval(updatetime, 1000);

updatetime();
updatedate();

var toDay=new Date();
weeks=toDay.getDay();

switch(weeks){
	case 0:
	document.getElementById('sun').classList.add('day');
	break;
	case 1:
	document.getElementById('mon').classList.add('day');
	break;
	case 2:
	document.getElementById('tue').classList.add('day');
	break;
	case 3:
	document.getElementById('wed').classList.add('day');
	break;
	case 4:
	document.getElementById('thu').classList.add('day');
	console.log(weeks);
	break;
	case 5:
	document.getElementById('fri').classList.add('day');
	break;
	case 6:
	document.getElementById('sat').classList.add('day');
	break;
}
/*
var hours=new Date();
currenthours=hours.getDate();
if(currenthours > 12){
	document.getElementById('pm').classList.add('ampm');
}else{
	document.getElementById('am').classList.add('ampm');
}

*/
