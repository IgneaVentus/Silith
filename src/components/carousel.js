var m = require("mithril")
var Article = require("../models/article")
// m("article[id='']",[
					// m("h2",""),
					// m("p","")
				// ]),

//Część główna strony
var Main = {
	oninit: Article.loadList,
	view: function() {
		return m(".main", [
			m(".container[id='articles']", Article.list.map(function(article) {
				m("article[id='"+article.id+"']",[
					m("h2",article.header),
					m("p",article.content),
				])
			}))
		])
	}
}

module.exports = Main