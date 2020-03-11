var m = require("mithril")

var Article = {
    list: [],
    loadList: function() {
		this.list = Array.from(require("../data/data.json").articles)
		console.log("Articles data loaded")
    },
}

module.exports = Article