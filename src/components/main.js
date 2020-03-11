var m = require("mithril")
var Articles = require("../models/article")

//Część główna strony
var Main = {
	oninit: Articles.loadList(),
	view: function() {
		return m(".main", [Articles.list.map(function(article) {
			return m(".container-flex.row.articlebg[id='"+article.id+"'][style='background-image: url("+article.img+")']", [
				m(".col"),
				m("article.col-2.col-sm-3.col-md-4.align-self-end.h-100",[
					m("h2",article.header),
					m("p",article.content),
				])
			])
		})])
	}
}

module.exports = Main