var m = require("mithril")

var Article = {
    list: [],
    loadList: function() {
		this.list = Array.from(require("../data/articles.json").articles)
		console.log("Data loaded")
		console.log(this.list)
    },
}

module.exports = Article