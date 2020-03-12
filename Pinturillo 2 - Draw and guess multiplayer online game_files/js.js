var isMobile={
	android: function() { return navigator.userAgent.match(/Android/i) ? true : false; },
	blackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) ? true : false; },
	iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false; },
	opera: function() { return navigator.userAgent.match(/Opera Mini/i) ? true : false; },
	windows: function() { return navigator.userAgent.match(/IEMobile/i) ? true : false; },
	any: function() { return (isMobile.android() || isMobile.blackBerry() || isMobile.iOS() || isMobile.opera() || isMobile.windows()) ? true : false; }
};

initWeb();

function initWeb(){
	if (isReady()){
		if (isMobile.any()){mobileVer();}else{insertApp();}
	}else{
		setTimeout(initWeb,1000);
	}
}

function isReady(){
	if (document.getElementById('zoneMiddle')!=null && document.getElementById('mobileContent')!=null){
		return true;
	}
	return false;
}

function insertApp(){
	var mainDiv=document.getElementById('zoneMiddle');
	if (mainDiv!=null){
		mainDiv.innerHTML = '';
		var theDiv = document.createElement('div'); 
		theDiv.id='appContent';
		mainDiv.appendChild(theDiv);
		var theScript = document.createElement('script'); 
		theScript.src = 'appData/main.js';
		mainDiv.appendChild(theScript);
	}else{
		console.log('no mainDiv');
	}
}

function mobileVer(){
	var theDiv=document.getElementById('mobileContent');
	if (theDiv!=null){
		theDiv.style.display='block';
	}
}