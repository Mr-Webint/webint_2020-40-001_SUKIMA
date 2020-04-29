const IBConfigs = {
	root: null,
	rootMargin: "-30% 0px",
	threshold: 0,
}
const verticalObserver = new IntersectionObserver(verticalFadein, IBConfigs)
const observeVerticalTargetElements = document.querySelectorAll('.verticalFadeInTarget')
observeVerticalTargetElements.forEach(els => {
	verticalObserver.observe(els)
})
const horizontalObserver = new IntersectionObserver(horizontalFadein, IBConfigs)
const observeHorizontalTargetElements = document.querySelectorAll('.horizontalFadeInTarget')
observeHorizontalTargetElements.forEach(els => {
	horizontalObserver.observe(els)
})

/*
var univList = loadJson('/json/univList.json')
const univListElement = document.getElementById('univList')

for(var i=0; i<univList.length; i++) {
	var newElm = document.createElement("span")
	var txt = document.createTextNode(univList[i].name)
	newElm.classList.add('univ')
	newElm.appendChild(txt)

	univListElement.appendChild(newElm)
}
*/





//---
function verticalFadein(entries) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('verticalFadeIn')
		}
	})
}
function horizontalFadein(entries) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add('horizontalFadeIn')
		}
	})
}
function loadJson(pahtToJson) {
	var requestObj = new XMLHttpRequest()
	var parsedObj
	
	requestObj.open( 'get', pahtToJson, false )
	requestObj.onload = function() {
		try {
			parsedObj = JSON.parse(this.responseText)
		} catch(e) {
			console.log('Failed Loading JSON')
		}
	}
	requestObj.send(null)
	return parsedObj
}