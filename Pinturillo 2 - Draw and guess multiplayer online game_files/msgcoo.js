var cookieClass = new cookieClass();
window.addEventListener("load",initCookieClass);

function initCookieClass(){
	cookieClass.processCookie();
}

function cookieClass() {
	this.nameCookie='msgcoo';
	this.myTimerHideMsgCookie;
	
	this.processCookie = function (){
		if (this.readCookie(this.nameCookie)==null){
			document.cookie = this.nameCookie+"="+encodeURIComponent('1');
			this.addCSS();
			this.addHTML();
		}
	}
	this.readCookie = function (name){
	  return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	}
	this.hideMsgCookie = function (){
		var theElem = document.getElementById('cookieDiv');
		if (theElem!=null){ theElem.style.display = 'none'; }
		clearTimeout(this.myTimerHideMsgCookie);
	}
	this.addCSS = function (){
		var link  = document.createElement('link');
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = '/web/cookies/style.css';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	this.addHTML = function (){
		this.myTimerHideMsgCookie = setTimeout(this.hideMsgCookie, 20000);
		var newDiv = document.createElement('div');
		newDiv.id='cookieDiv';
		//newDiv.onclick = function() { cookieClass.hideMsgCookie(); };
		var msg='Las cookies nos permiten ofrecer nuestros servicios. Si continúas navegando consideramos que aceptas el uso que hacemos de las cookies. <a href=http://chachiware.com/privacy/ target=_blank class=textolink>Política de cookies</a>.';
		newDiv.innerHTML="<div class=cajatexto><span class=texto>"+msg+"</span></div><div class=closeboton onClick='javascript:cookieClass.hideMsgCookie();'><img src=//www.pinturillo2.com/web/img/closeboton.gif></div>";
		document.body.appendChild(newDiv);
	}
}
