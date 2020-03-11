var m = require("mithril")
var Data = require("../models/contact")

//Część kontaktowa strony
var Contact = {
	oninit: Data.loadList(),
	view: function() {
		return m(".container-flex.contact_tab.pt-4[id='contact']",[
			m("h2.cont_name",Data.data.name+" "+Data.data.surname),
			m(".row row-cols-4",[
				m("col"),
				m(".col.phone_number","+48 "+Data.data.phone),
				m("a.col.mail[href='mailto:"+Data.data.mail+"']",Data.data.mail),
				m("col")
			])
		])
	}
}

module.exports = Contact