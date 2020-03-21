var m = require("mithril")
var Data = require("../models/carousel")
var first = true
var count = 0

//Function for setting wchich images start as active
function Activator(x) {
	//Check flag and if true, sign
	if (x==0) {
		if (first) {
			first=false
			return(".active")
		}
		else {
			return("")
		}
	}
	//Reset flag
	else {
		first = true;
	}
}

function Counter() {
	return (count++)
}

//Image carousel part of the site
var Main = {
	oninit: Data.loadList(),
	view: function() {
		return m(".container-flex.m-0",
			m(".carousel slide.m-0[data-ride='carousel'][id='carousel']", [
				m("ol.carousel-indicators", [Data.list.map(function(item) {
					return m("li"+Activator(0)+"[data-target='carousel'][data-slide-to='"+Counter()+"']")
				})]),
				Activator(1),
				m("carousel-inner",[Data.list.map(function(item) {
					return m(".carousel-item"+Activator(0),
						m("img[src='"+item.image+"'][alt='Slide']"),
						m(".carousel-caption.d-none.d-md-block.captbg", [
							m("h5", item.title),
							m("p", item.caption)
						])
					)
				})]),
				m("a.carousel-control-prev[href='#carousel'][role='button'][data-slide='prev']", [
					m("span.carousel-control-prev-icon[aria-hidden='true']"),
					m("span.sr-only","Poprzedni")
				]),
				m("a.carousel-control-next[href='#carousel'][role='button'][data-slide='next']", [
					m("span.carousel-control-next-icon[aria-hidden='true']"),
					m("span.sr-only","Następny")
				])
			])
		)
	}
}

module.exports = Main