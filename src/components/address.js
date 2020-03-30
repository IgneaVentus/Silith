var m = require("mithril")
var Address = require("../models/address")

//Space & comma replacer
function despacer(data) {
	data = data.replace(/,/g,"%2C")
	data = data.replace(/ /g,"+")
	return data
}

//Address link creator
function addresser(type) {
	var src;
	if (type==0) {
		src = "https://www.google.com/maps/embed/v1/place?";
		src += "key="+Address.data.api_key;
		src += despacer("&q="+Address.data.street_name+", "+Address.data.street_number+", "+Address.data.city+", "+Address.data.postcode);
	}
	else {
		src = "https://www.google.com/maps/search/?api=1&query=";
		src += despacer(Address.data.street_name+", "+Address.data.street_number+", "+Address.data.city+", "+Address.data.postcode);
	}
	return src
}

//Address component of the site
var Contact = {
	oninit: Address.loadList(),
	view: function() {
		console.log(Address.data.api_key);
		if (Address.data.api_key!="") {
			return m(".embed-responsive[id='address']",
				m("iframe.embed-responsive-item[src='"+addresser(0)+"']")
			)
		}
		else if (Address.data.street_name) {
			return m(".container-flex[id='address']",
				m("a[href='"+addresser(1)+"'][target='_blank']",Address.data.street_name+" "+Address.data.street_number+", "+Address.data.postcode+" "+Address.data.city)
			)
		}
	}
}

module.exports = Contact