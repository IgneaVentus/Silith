var m = require("mithril")
var Data = require("../models/contact")
var logo
var logom

//Override function for logo
function logo() {
	if (Data.data.logo!="") {
		logo="<img src="+Data.data.logo+" height='30' alt='logo'>"
		logom=m("img[src='"+Data.data.logo+"'][height='30'][alt='"+Data.data.name+"']")
	}
	else {
		logo=logom=Data.data.name
	}
}

//Contact component of the site
var Contact = {
	oninit: Data.loadList(),
	view: function() {
		logo()
		var element = document.getElementById("brand")
		//Site and navbar title override with contact name
		if (Data.data.logo!="") {
			document.title=Data.data.name
			element.innerHTML=logo
		}
		else {
			document.title=element.innerHTML=Data.data.name
		}
		//Adding contact footer
		return m(".container-flex.contact_tab.pt-4.m-0.w-100.row [id='contact']",[
			m(".col-md-2"),
			m("a.col-md.phone_number.align-self-center[href='tel:+"+Data.data.phoneprefix+Data.data.phone+"']","+"+Data.data.phoneprefix+" "+Data.data.phone),
			m("h2.col-md.align-self-center",logom),
			m("a.col-md.mail.align-self-center[href='mailto:"+Data.data.mail+"']",Data.data.mail),
			m(".col-md-2")
		])
	},
	brand: function() {
	}
}

module.exports = Contact