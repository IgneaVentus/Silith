var m = require("mithril")


var Article = {
	list: [],
	loadList: function () {
		return m.request({
			method: "GET",
			url: "../data/articles",
		})
		.then(function(result) {
			Article.list = result.data
		})
	}
}

module.exports = Article