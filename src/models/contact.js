var m = require("mithril")

var Contact = {
    data: [],
    loadList: function() {
		this.data = require("../data/data.json").contact
		console.log("Contact data loaded")
    },
}

module.exports = Contact