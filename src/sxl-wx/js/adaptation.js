// JavaScript Document	
  (function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	var screenWidth=window.screen.width;
	console.log("当前屏幕screenWidth:"+screenWidth);
	if (!screenWidth) return;
	docEl.style.fontSize = 100 * (screenWidth / 375) + 'px';
	if(screenWidth>1024){
		docEl.style.fontSize = 136.533 + 'px';
		}
  };
  
  
  if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);