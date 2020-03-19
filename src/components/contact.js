var m = require("mithril")
var Data = require("../models/contact")

//Część kontaktowa strony
var Contact = {
	oninit: Data.loadList(),
	name,
	function () { 
	},
	view: function() {
		return m(".container-flex.contact_tab.pt-4.m-0.w-100[id='contact']",[
			m(".row row-cols-5",[
				m("col"),
				m("a.col.phone_number.align-self-center[href='tel:+"+Data.data.phoneprefix+Data.data.phone+"']","+"+Data.data.phoneprefix+" "+Data.data.phone),
				m("h2.col.align-self-center",Data.data.name),
				m("a.col.mail.align-self-center[href='mailto:"+Data.data.mail+"']",Data.data.mail),
				m("col")
			])
		])
	}
}

module.exports = Contact