// Thanks to https://usefulangle.com/post/113/javascript-detecting-element-visible-during-scroll
var peova = document.querySelectorAll('.visibexc');

var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true) {
		entries[0].target.style.filter = 'opacity(100%)';
	}
//	else {
//		entries[0].target.style.filter = 'opacity(0%)';
//	}
}, { threshold: [0.5] });

for (let i = 0; i < peova.length; i++) {
	observer.observe(document.querySelectorAll(".visibexc")[i]);
}