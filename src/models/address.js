var m = require("mithril")

var Contact = {
    data: [],
    loadList: function() {
		this.data = require("../data/data.json").address
		console.log("Address data loaded")
    },
}

module.exports = Contact