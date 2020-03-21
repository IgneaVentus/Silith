var m = require("mithril")
var Articles = require("../models/article")

//Main, articles section of the site
var Main = {
	oninit: Articles.loadList(),
	view: function() {
		return m(".main", [Articles.list.map(function(article) {
			return m(".container-flex.row.articlebg.m-0[id='"+article.id+"'][style='background-image: url("+article.img+")']", [
				m(".col"),
				m("article.col-6.col-md-5.align-self-end.h-100",[
					m("h2",article.header),
					m("p",article.content),
				])
			])
		})])
	}
}

module.exports = Main